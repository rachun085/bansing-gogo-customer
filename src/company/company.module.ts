import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { EmailConfirmationService } from 'src/email-confirmation/email-confirmation.service';
import { Company } from 'src/entities/company.entity';
import { CompanyImage } from 'src/entities/company.image.entity';
import { Events } from 'src/entities/event.entity';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { MailService } from 'src/mail/mail.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Company, Events, CompanyImage]),
        forwardRef(() => UserModule)
    ],
    exports: [TypeOrmModule],
    providers: [CompanyService, UserService, EmailConfirmationService, JwtService, MailService],
    controllers: [CompanyController]
})
export class CompanyModule {}
