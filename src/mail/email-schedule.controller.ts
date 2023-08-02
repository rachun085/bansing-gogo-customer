import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import EmailScheduleDto from './dto/email-schedule.dto';
import { EmailScheduleService } from './email-schedule.service';

@Controller('email-schedule')
export class EmailScheduleController {
    constructor(
        private readonly emailScheduleService: EmailScheduleService
      ) {}

      @Post('schedule')
      @UseGuards(JwtAuthGuard)
      async scheduleEmail(@Body() emailSchedule: EmailScheduleDto) {
        this.emailScheduleService.scheduleEmail(emailSchedule);
      }
    
}
