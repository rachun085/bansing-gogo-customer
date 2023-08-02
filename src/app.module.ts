import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { RegisterService } from './register/register.service';
import { RegisterController } from './register/register.controller';
import { RegisterPaymentController } from './register-payment/register-payment.controller';
import { RegisterPaymentService } from './register-payment/register-payment.service';
import { DocumentService } from './document/document.service';
import { DocumentController } from './document/document.controller';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';
import { LogModule } from './log/log.module';
import { AuthModule } from './auth/auth.module';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';
import { MailService } from './mail/mail.service';
// import TypeOrmConfig from './ormconfig';
import * as TypeOrmConfig from "./ormconfig"
import { MulterModule } from '@nestjs/platform-express';
import { RegisterModule } from './register/register.module';
import { BankInformationModule } from './bank-information/bank.information.module';
import { RegisterPaymentModule } from './register-payment/register-payment.module';
import { MailModule } from './mail/mail.module';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { JwtService } from '@nestjs/jwt';
import { EmailConfirmationController } from './email-confirmation/email-confirmation.controller';
import { DocumentModule } from './document/document.module';
import { memoryStorage } from 'multer';
import { SettingModule } from './setting/setting.module';

@Module({
  
  imports: [ConfigModule.forRoot(
    {
      envFilePath: `.env`,
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    CompanyModule,
    EventModule,
    LogModule,
    AuthModule,
    RoleModule,
    RegisterModule,
    BankInformationModule,
    RegisterPaymentModule,
    MailModule,
    ScheduleModule.forRoot(),
    DocumentModule,
    MulterModule.register({
      storage: memoryStorage()
    }),
    SettingModule
  ],
  controllers: [AppController, UserController, CompanyController, RegisterController, RegisterPaymentController, DocumentController, LogController, EmailConfirmationController],
  providers: [AppService, UserService, CompanyService, RegisterService, RegisterPaymentService, DocumentService, LogService, RoleService, MailService, EmailConfirmationService, JwtService],
})
export class AppModule {
  @Inject()
  configService: ConfigService;
}
