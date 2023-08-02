import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './mail.service';
import { EmailScheduleController } from './email-schedule.controller';
import { EmailScheduleService } from './email-schedule.service';

@Module({
    imports: [ConfigModule],
    controllers: [EmailScheduleController],
    providers: [MailService, EmailScheduleService],
    exports: [MailService]
})

export class MailModule {}
