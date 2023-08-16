import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from 'src/company/company.service';
import { EmailConfirmationService } from 'src/email-confirmation/email-confirmation.service';
import { Company } from 'src/entities/company.entity';
import { CompanyImage } from 'src/entities/company.image.entity';
import { Events } from 'src/entities/event.entity';
import { EventImage } from 'src/entities/event.image.entity';
import { OriginalDocument } from 'src/entities/original.document.entity';
import { Register } from 'src/entities/register.entity';
import { EventService } from 'src/event/event.service';
import { MailService } from 'src/mail/mail.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Register, Events, EventImage, Company, CompanyImage, OriginalDocument]),
        forwardRef(() => UserModule)
    ],
    exports: [TypeOrmModule],
    providers: [RegisterService, UserService, EventService, CompanyService, EmailConfirmationService, JwtService, MailService],
    controllers: [RegisterController]
})
export class RegisterModule {}
