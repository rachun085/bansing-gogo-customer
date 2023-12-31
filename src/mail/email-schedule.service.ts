import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import EmailScheduleDto from './dto/email-schedule.dto';
import { MailService } from './mail.service';

@Injectable()
export class EmailScheduleService {
    constructor(
        private readonly emailService: MailService,
        private readonly schedulerRegistry: SchedulerRegistry
    ) { }

    scheduleEmail(emailSchedule: EmailScheduleDto) {
        const date = new Date(emailSchedule.date);
        const job = new CronJob(date, () => {
            this.emailService.sendMail({
                to: emailSchedule.recipient,
                subject: emailSchedule.subject,
                text: emailSchedule.content
            })
        });

        this.schedulerRegistry.addCronJob(`${Date.now()}-${emailSchedule.subject}`, job);
        job.start();
    }


    cancelAllScheduledEmails() {
        this.schedulerRegistry.getCronJobs().forEach((job) => {
            job.stop();
        })
    }
}
