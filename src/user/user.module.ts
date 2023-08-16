import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { EmailConfirmationService } from 'src/email-confirmation/email-confirmation.service';
import { ResetPasswordToken } from 'src/entities/reset.password.token.entity';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { MailService } from 'src/mail/mail.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Role, User, ResetPasswordToken]),
        forwardRef(() => AuthModule)
    ],
    exports: [TypeOrmModule],
    providers: [UserService, EmailConfirmationService, MailService, JwtService],
    controllers: [UserController]
})
export class UserModule {}
