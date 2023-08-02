import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
const bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UpdateUserDto } from 'src/user/dto/update.user.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService, private configService: ConfigService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.getByEmail(email);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        if (user.status === User.Status.Disabled) {
            throw new HttpException('This user is disabled', HttpStatus.UNAUTHORIZED);
        }

        if (user.status === User.Status.NotConfirmed) {
            throw new HttpException('This user is not confirmed', HttpStatus.UNAUTHORIZED);
        }

        if (bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        } else {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id, roles: user.roles };
        const tokens = await this.getTokens(user);
        const updateToken = await this.updateRefreshToken(user.id, tokens.refreshToken);
        if(!updateToken){
            
        }

        return {
            status: "success",
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            roles: user.roles,
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken
        };
    }

    async logout(userId: string) {
        return this.usersService.updateRefreshToken({
            id: userId,
            refreshToken: null,
        });
      }

    async getTokens(user: any) {
        const payload = { username: user.email, sub: user.id, roles: user.roles };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload,
                {
                    secret: this.configService.get<string>('accessTokenSecret'),
                    expiresIn: this.configService.get<string>('accessTokenExpirationTime'),
                }),
            this.jwtService.signAsync(payload,
                {
                    secret: this.configService.get<string>('refreshTokenSecret'),
                    expiresIn: this.configService.get<string>('refreshTokenExpirationTime'),
                }
            )
        ]);

        return { accessToken, refreshToken }
    }

    async updateRefreshToken(userId: number, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        const updateRefreshToken = await this.usersService.updateRefreshToken({
            id: userId,
            refreshToken: hashedRefreshToken,
        });

        return updateRefreshToken;
    }

    async hashData(data: string) {
        const salt = await bcrypt.genSaltSync();
        const hash = await bcrypt.hashSync(data, salt);

        return hash;
    }

    async refreshToken(userId: number, refreshToken: string){
        const user = await this.usersService.get(userId);
        if(!user || !user.refreshToken) throw new ForbiddenException('Access Denied');

        const refreshTokenMatches = await bcrypt.compareSync(refreshToken, user.refreshToken);
        if(!refreshTokenMatches) throw new ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user);
        await this.updateRefreshToken(user.id, tokens.refreshToken);

        return {
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken
        }
    }
    
}
