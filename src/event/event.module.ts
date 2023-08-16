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
import { MailService } from 'src/mail/mail.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Events, EventImage, Company, CompanyImage, OriginalDocument]),
    forwardRef(() => UserModule)
  ],
  exports: [TypeOrmModule],
  providers: [EventService, UserService, CompanyService, EmailConfirmationService, JwtService, MailService],
  controllers: [EventController]
})
export class EventModule {}
