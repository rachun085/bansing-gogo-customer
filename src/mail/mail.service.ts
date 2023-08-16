import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const nodemailer = require('nodemailer');
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
const hbs = require('nodemailer-express-handlebars');


const handlebarOptions = {
  viewEngine: {
      extName: '.handlebars',
      partialsDir: './views/partials',
      layoutsDir: './views/layouts',
      defaultLayout: '',
  },
  viewPath: './views/templates',
  extName: '.handlebars',
};



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

    // this.nodemailerTransport.use('compile', hbs(handlebarOptions));
    // var reminder = this.nodemailerTransport.
    return this.nodemailerTransport.sendMail(options, function (error, info) {
      if (error) {
        console.log("Error in sending email " + error);
      } else {
        console.log("Email send: ", info.response);
      }
    })
  }
}
