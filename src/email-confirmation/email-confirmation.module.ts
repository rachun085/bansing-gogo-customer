import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [
        forwardRef(() => UserModule)
    ],
    exports: [UserService],
    providers: [
        UserService,
        MailService,
        JwtService
    ]
})
export class EmailConfirmationModule {}
