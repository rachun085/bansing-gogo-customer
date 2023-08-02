import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Post, Req, Res, Session, UseGuards } from '@nestjs/common';
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

    //         // TODO: setup later if use
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

}
