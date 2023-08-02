import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const nodemailer = require('nodemailer');
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailService {
  private nodemailerTransport: Mail
  constructor(private configService: ConfigService) {
    this.nodemailerTransport = createTransport({
      service: this.configService.get('EMAIL_SERVICE'),
      host: this.configService.get('EMAIL_HOST'),
      port: this.configService.get('EMAIL_PORT'),
      secure: true,
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASSWORD'),
      },
      from: this.configService.get('EMAIL_USER')
    });
  }

  async sendMail(options: Mail.Options) {
    return this.nodemailerTransport.sendMail(options, function (error, info) {
      if (error) {
        console.log("Error in sending email " + error);
      } else {
        console.log("Email send: ", info.response);
      }
    })
  }
}
