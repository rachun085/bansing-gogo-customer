import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentService } from 'src/document/document.service';
import { EmailConfirmationService } from 'src/email-confirmation/email-confirmation.service';
import { Documents } from 'src/entities/document.entity';
import { Register } from 'src/entities/register.entity';
import { RegisterPayment } from 'src/entities/register.payment.entity';
import { MailService } from 'src/mail/mail.service';
import { RegisterService } from 'src/register/register.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { RegisterPaymentController } from './register-payment.controller';
import { RegisterPaymentService } from './register-payment.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Register, RegisterPayment, Documents]),
        forwardRef(() => UserModule)
    ],
    exports: [TypeOrmModule],
    providers: [RegisterPaymentService, UserService, DocumentService, EmailConfirmationService, JwtService, MailService],
    controllers: [RegisterPaymentController]
})


export class RegisterPaymentModule {}
