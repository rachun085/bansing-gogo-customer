import { HttpException, HttpStatus, Inject, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ResetPasswordToken } from 'src/entities/reset.password.token.entity';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { UpdateUserDto } from './dto/update.user.dto';
import { check } from 'prettier';
const Hashids = require('hashids/cjs');

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Role) private rolesRepository: Repository<Role>,
        @InjectRepository(ResetPasswordToken) private resetPasswordTokenRepository: Repository<ResetPasswordToken>
    ) { }

    @Inject()
    private configService: ConfigService;

    async get(id: number): Promise<any> {
        try {
            const user = await this.usersRepository.findOne({
                where: {
                    id: id
                },
                relations: {
                    roles: true
                }
            });
            const { password, ...result } = user;
            return { ...result };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({
            where: {
                email: email
            },
            relations: {
                roles: true
            }
        });
    }

    async getRoleByName(name: string): Promise<Role> {
        return this.rolesRepository.findOne({
            where: {
                name: Role.Name[name]
            }
        });
    }

    async hasEmail(email: string): Promise<boolean> {
        const found = await this.usersRepository.findOne({
            where: {
                email: email
            }
        });
        return found ? true : false;
    }

    async getDefaultRole(): Promise<Role> {
        return await this.rolesRepository.findOne({
            where: {
                name: Role.Name.ROLE_CUSTOMER
            }
        });
    }

    async findRole(name: string): Promise<Role> {
        if (name == "customer") {
            return await this.rolesRepository.findOne({
                where: {
                    name: Role.Name.ROLE_CUSTOMER
                }
            });
        } else if (name == "admin") {
            return await this.rolesRepository.findOne({
                where: {
                    name: Role.Name.ROLE_ADMIN
                }
            });
        }
    }

    async hashPassword(password: string, salt: string) {
        return await bcrypt.hashSync(password, salt);
    }

    async validatePassword(password: string, confirmPassword: string) {
        // check match
        if (password != confirmPassword) {
            throw new HttpException('Password not match', HttpStatus.FORBIDDEN);
        }

        if (password.length < 6) {
            throw new HttpException('Password require length more than 6', HttpStatus.FORBIDDEN);
        }

        const salt = bcrypt.genSaltSync();
        const hash = this.hashPassword(password, salt);
        return hash;
    }


    async findAll(user?: User): Promise<any> {
        const users = await this.usersRepository.find({
            relations: {
                roles: true
            },
            where: {
                roles: {
                    name: Role.Name.ROLE_CUSTOMER
                }
            }
        });
        // const queryBuilder = await this.usersRepository.manager
        //   .createQueryBuilder(User, "u")
        //   .innerJoinAndSelect("u.roles", "role")
        //   .getMany();
        // const response = queryBuilder.map((q)=>{
        //   const { password, ...result } = q;
        //   return result;
        // })
        return users;
    }

    async comparePassword(inputPassword, currentPassword) {
        const check = bcrypt.compareSync(inputPassword, currentPassword)
        return check;
    }

    async updateProfile(dto: UpdateProfileDto): Promise<User> {
        const found = await this.usersRepository.findOne({
            where: {
                id: dto.id
            }
        });
        if (!found) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        // change password
        if (dto.currentPassword != null && dto.newPassword != null && dto.confirmNewPassword != null) {
            const compare = await this.comparePassword(dto.currentPassword, found.password);
            if(!compare) throw new HttpException('Current password is incorrect.', HttpStatus.FORBIDDEN);

            const validatedPassword = await this.validatePassword(dto.newPassword, dto.confirmNewPassword)

            found.password = validatedPassword;
            const savedUser = await this.usersRepository.save(found);
            return savedUser;
        }

        found.firstName = dto.firstName;
        found.lastName = dto.lastName;
        found.cardId = dto.cardId;
        found.phoneNumber = dto.phoneNumber;
        if(dto.status){
            found.status = dto.status == 'ENABLED' ? User.Status.Enabled : dto.status == "DISABLED" ? User.Status.Disabled : dto.status == "NOT_CONFIRMED" ? User.Status.NotConfirmed : User.Status.Disabled
        }else{
            found.status = found.status;
        }
        

        const savedUser = await this.usersRepository.save(found);
        return savedUser;
    }

    async updateRefreshToken(dto): Promise<User> {
        const user = await this.usersRepository.findOne({
            where: {
                id: dto.id
            }
        });
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        user.refreshToken = dto.refreshToken

        const savedUser = await this.usersRepository.save(user);
        return savedUser;
    }

    async generateUrlToken(): Promise<string> {
        const hex = crypto.randomBytes(24).toString('hex');
        const hashids = new Hashids(
            '',
            0 /*, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'*/,
        );
        const token = hashids.encodeHex(hex);
        return token;
    }

    async requestResetPassword(email: string): Promise<ResetPasswordToken> {
        const user = await this.getByEmail(email);
        if (!user) {
            throw new Error('User is not found');
        }

        if (user.resetPasswordToken != null) {
            await this.resetPasswordTokenRepository.delete(
                user.resetPasswordToken.id,
            );
        }

        const token = await this.generateUrlToken();
        const expire = this.configService.get<number>('emailExpirationTime');

        let resetPassword: ResetPasswordToken = new ResetPasswordToken();
        resetPassword.token = token;
        resetPassword.expiredAt = new Date(new Date().getTime() + Number(expire));
        resetPassword.user = user;
        const saved = await this.resetPasswordTokenRepository.save(resetPassword);

        //TODO: send mail (call mail.service.ts)

        // let url = `${this.configService.get<string>(
        //   'resetPasswordBaseUrl',
        // )}/${token}`;

        // await this.scheduleService.sendResetPasswordEmailNow({
        //   email: email,
        //   url: url,
        //   lang: lang,
        // });
        return saved;
    }

    async resetPassword(
        newPwd: string,
        cfNewPwd: string,
        tokenId: string,
    ): Promise<User> {
        const found = await this.resetPasswordTokenRepository.findOne({
            where: {
                token: tokenId
            },
            relations: {
                user: true
            }
        });
        if (!found) {
            throw new UnauthorizedException('Token not found');
        }

        const validPassword = await this.validatePassword(newPwd, cfNewPwd);
        if (!validPassword) {
            throw new UnauthorizedException('Invalid password');
        }

        // update new password
        let user: User = found.user;
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        user.password = validPassword;

        const savedUser = await this.usersRepository.save(user);
        await this.resetPasswordTokenRepository.delete(found.id);

        return savedUser;
    }

    async registerUser(dto: CreateUserDto): Promise<User> {
        const validatePassword = await this.validatePassword(
            dto.password,
            dto.confirmPassword,
        );

        var isDuplicated = await this.hasEmail(dto.email);
        if (isDuplicated) {
            throw new HttpException('Already has email', HttpStatus.CONFLICT);
        }

        let user: User = await this.usersRepository.create(dto);
        user.email = dto.email;
        user.firstName = dto.firstName;
        user.lastName = dto.lastName;
        user.phoneNumber = dto.phoneNumber;
        user.password = validatePassword;
        user.status = dto.role == 'admin' ? User.Status.Enabled : User.Status.NotConfirmed

        if (dto.role) {
            const role = await this.findRole(dto.role);
            user.roles = [role];
        } else {
            const role: Role = await this.getDefaultRole();
            user.roles = [role];
        }

        const savedUser = await this.usersRepository.save(user);
        if (savedUser) {
            console.log(`Create user success : ${savedUser.id}`);
        }
        return savedUser;
    }

    async markEmailAsConfirmed(email: string) {
        const update = this.usersRepository.update({ email }, {
            status: User.Status.Enabled
          });
          if(update){
            return "email has confirmed";
          }
        
      }

}
