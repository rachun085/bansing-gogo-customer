import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param, Post, Req, Res, Session, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';
// import { JwtAuthGuard } from './jwt.auth.guard';
import { LocalAuthGuard } from './local.auth.guard';
import { RefreshTokenGuard } from './refresh.token.auth.guard';
import { Request } from 'express';
import { EmailConfirmationService } from 'src/email-confirmation/email-confirmation.service';
import ConfirmResetPasswordDto from './dto/comfirm.reset.password.dto';
import ResetPasswordDto from 'src/email-confirmation/dto/reset.password.dto';

@Controller('auth')
export class AuthController {
    @Inject()
    usersService: UserService;

    @Inject()
    configService: ConfigService;

    @Inject()
    authService: AuthService;

    @Inject()
    emailConfirmationService: EmailConfirmationService;

    // @UseGuards(AuthGuard('local'))
    // @Post('login')
    // async login(@Req() req, @Res() res, @Session() session) {
    //     // console.log('xxxx', req);
    //     req.login(req.user, err => {
    //         if (err || !req.user) {
    //             throw err ||
    //             new HttpException(
    //                 { status: HttpStatus.UNAUTHORIZED, error: `Unauthorized` },
    //                 HttpStatus.UNAUTHORIZED,
    //             );
    //         }

    //         // const payload: JwtPayload = { sub: req.user.username, userId: req.user.id };
    //         // const accessToken = this.jwtService.sign(payload)
    //         console.log(req.user);

    //         return req.user
    //     });
    // }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        console.log(`login... [POST] /auth/login`);
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('logout')
    async logout(@Req() req, @Res() res) {
        console.log(`logout... [GET] /auth/logout`);
        this.authService.logout(req.user.id);
        req.session.destroy(() => {
            // this.cookieService.clearCookies(req, res);
            // window.close();
            // res.redirect('/login');
        });
    }

    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    refreshTokens(@Req() req: Request) {
        console.log(`call refresh token [GET] /auth/refresh`);
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken'];
        // console.log("refresh token from req : ", req.user);

        return this.authService.refreshToken(userId, refreshToken);
    }

    @HttpCode(201)
    @Post('register')
    async register(@Body() dto: CreateUserDto, @Req() req): Promise<any> {
        try {
            console.log(`call register user with [POST] /auth/register`);
            const user = await this.usersService.registerUser(dto);
            await this.emailConfirmationService.sendUserRegisterVerificationLink(dto.email);        //send confirmation email
            const response = {
                status: "success",
                data: user
            }
            return response;
        } catch (error) {
            const err = {
                status: "fail",
                data: error
            }
            console.log("error from /auth/register => ", error);
            return err;
        }

    }

    @HttpCode(200)
    @Post('reset-password')
    async requestResetPassword(@Body('email') email, @Req() req, @Res() res): Promise<any> {
        console.log(`call reset password [POST] /auth/reset-password`);
        const reset = await this.usersService.requestResetPassword(email);

        const payloadSendEmail: ResetPasswordDto = {
            email: email,
            url: reset.url
        }

        console.log(`sending mail...`);
        await this.emailConfirmationService.sendMailResetPassword(payloadSendEmail);        //send mail
        if(reset.data.id){
            const response = {
                status: "success",
                data: reset.data
            }

            res.send(response);
            return response;
        }
        return;
    }

    @Post('confirm-reset-password')
    async resetPassword(@Req() req, @Body() dto: ConfirmResetPasswordDto, @Res() res) {
        console.log(`call confirm reset password [POST] /auth/confirm-reset-password`);
        let confirm = await this.usersService.resetPassword(dto);
        const { password, refreshToken, resetPasswordToken, ...result } = confirm;

        const response = {
            status: "success",
            data: result
        }

        res.send(response); 
        return response;
    }

    @Get('find-token/:tokenId')
    async findToken(@Req() req, @Param() param, @Res() res) {
        console.log(`call find token [GET] /auth/find-token`);
        let token = await this.usersService.findToken(param.tokenId);

        res.send(token); 
        return token;
    }

}
