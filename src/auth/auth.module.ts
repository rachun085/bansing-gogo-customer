import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './auth.local.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { RefreshTokenStrategy } from './refresh.token.strategy';
import { EmailConfirmationService } from 'src/email-confirmation/email-confirmation.service';
import { MailService } from 'src/mail/mail.service';

@Module({
    imports: [
        // UserModule, 
        PassportModule,
        JwtModule.register({}),
        PassportModule.register({ session: true }),
        forwardRef(() => UserModule)
    ],
    providers: [AuthService, LocalStrategy, ConfigService, UserService, JwtStrategy, RefreshTokenStrategy, EmailConfirmationService, MailService],
    controllers: [AuthController]
})
export class AuthModule { }
