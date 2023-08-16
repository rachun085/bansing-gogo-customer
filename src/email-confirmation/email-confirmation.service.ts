import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { MailService } from 'src/mail/mail.service';
import { UserService } from 'src/user/user.service';
import VerificationTokenPayload from './verificationTokenPayload.interface';
import handlebars from "handlebars";
import OrderSuccessDto from './dto/order.success.dto';
var fs = require('fs');
const path = require('node:path');
import moment from 'moment';
import ResetPasswordDto from './dto/reset.password.dto';

@Injectable()
export class EmailConfirmationService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly emailService: MailService,
        private readonly usersService: UserService,
    ) { }

    // @Inject()
    

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
        }else if (user.status == User.Status.Disabled) {
            throw new BadRequestException('This User is not resend email');
        }

        await this.sendUserRegisterVerificationLink(email);
    }

    public sendMailOrderSuccess(dto: OrderSuccessDto) {
        const filePath = path.join('/Users/supx/bansing-fund/src/mail/template/email-order-success.html');
        const source = fs.readFileSync(filePath, 'utf-8').toString();
        // console.log("source : ", source);
        
        const template = handlebars.compile(source);
        const replacements = {
          email: dto.email,
          registId: dto.registId,
          amountOwnership: dto.amountOwnership,
          totalPrice: dto.totalPrice,
          fullName: dto.fullName,
          registDate: dto.registDate,
          eventName: dto.eventName
        };

        const htmlToSend = template(replacements);

        return this.emailService.sendMail({
            from: "xxx@gmail.com",
            to: dto.email,
            subject: 'Bansing GOGO | ขอบคุณสำหรับการลงทะเบียน',
            html: htmlToSend,
            attachments: [
                {
                    filename: 'logo.png',
                    path: path.join('/Users/supx/bansing-fund/frontend/assets/images/icon/logo.png'),
                    cid: 'logo'
                },
                {
                    filename: 'success.png',
                    path: path.join('/Users/supx/bansing-fund/frontend/assets/images/email-temp/success.png'),
                    cid: 'success'
                },
                {
                    filename: 'space.jpg',
                    path: path.join('/Users/supx/bansing-fund/frontend/assets/images/email-temp/space.jpg'),
                    cid: 'space'
                },
            ]
        }

        )
    }

    public sendMailResetPassword(dto: ResetPasswordDto) {
        const text = `สวัสดีครับ, คุณได้สร้างคำขอรีเซ็ทรหัสผ่านเว็บไซต์ bansinggogo.com จาก Email: ${dto.email} หากคุณต้องการรีเซ็ทรหัสผ่าน, คลิกที่นี่: ${dto.url} <b>(ห้ามคลิกลิ้งค์หากคุณไม่ได้สร้างคำขอนี้)</b>`;

        return this.emailService.sendMail({
            from: "xxx@gmail.com",
            to: dto.email,
            subject: 'Bansing GOGO | คำขอรีเซ็ทรหัสผ่าน',
            text,
            html: text
        })

        // return this.emailService.sendMail({
        //     from: "xxx@gmail.com",
        //     to: dto.email,
        //     subject: 'Bansing GOGO | โปรดยืนยันอีเมล',
        //     html: htmlToSend
        // }
    }

    // private formatDate(date, format = 'LL') {
    //     // moment.locale('th');
    //     return moment(date).add(543, 'year').format(format);
    // }
}
