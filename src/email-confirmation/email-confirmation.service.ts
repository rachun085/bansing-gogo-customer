import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { MailService } from 'src/mail/mail.service';
import { UserService } from 'src/user/user.service';
import VerificationTokenPayload from './verificationTokenPayload.interface';

@Injectable()
export class EmailConfirmationService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly emailService: MailService,
        private readonly usersService: UserService
    ) { }

    public sendUserRegisterVerificationLink(email: string) {
        const payload: VerificationTokenPayload = { email };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_EMAIL_VERIFICATION_TOKEN_SECRET'),
            expiresIn: `${this.configService.get('JWT_EMAIL_VERIFICATION_TOKEN_EXPIRATION_TIME')}s`
        });

        const url = `${this.configService.get('EMAIL_CONFIRMATION_URL')}?token=${token}`;

        const text = `ขอบคุณสำหรับการสมัครสมาชิกเว็บไซต์ bansinggogo.com กรุณาคลิกที่ลิ้งค์เพื่อยืนยันการสมัครสมาชิก, คลิกที่นี่: ${url}`;

        return this.emailService.sendMail({
            from: "xxx@gmail.com",
            to: email,
            subject: 'Bansing GOGO | โปรดยืนยันอีเมล',
            text,
            html: text
        })
    }

    public async confirmEmail(email: string) {
        const user = await this.usersService.getByEmail(email);
        if (user.status == User.Status.Enabled) {
            throw new BadRequestException('Email already confirmed');
        }
        await this.usersService.markEmailAsConfirmed(email);
    }

    public async decodeConfirmationToken(token: string) {
        try {
            console.log("token : ", token);
            
            const payload = await this.jwtService.verify(token, {
                secret: this.configService.get('JWT_EMAIL_VERIFICATION_TOKEN_SECRET'),
            });

            if (typeof payload === 'object' && 'email' in payload) {
                return payload.email;
            }
            throw new BadRequestException();
        } catch (error) {
            if (error?.name === 'TokenExpiredError') {
                throw new BadRequestException('Email confirmation token expired');
            }
            throw new BadRequestException('Bad confirmation token');
        }
    }

    public async resendConfirmationLink(email: string) {
        const user = await this.usersService.getByEmail(email);
        if (user.status == User.Status.Enabled) {
            throw new BadRequestException('Email already confirmed');
        }
        await this.sendUserRegisterVerificationLink(email);
      }
}
