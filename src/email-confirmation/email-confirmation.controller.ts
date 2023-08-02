import { Body, ClassSerializerInterceptor, Controller, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import ConfirmEmailDto from './dto/confirmEmail.dto';
import { EmailConfirmationService } from './email-confirmation.service';

@Controller('email-confirmation')
@UseInterceptors(ClassSerializerInterceptor)
export class EmailConfirmationController {
    constructor(
        private readonly emailConfirmationService: EmailConfirmationService
    ) { }

    @Post('confirm')
    async confirm(@Body() confirmationData: ConfirmEmailDto) {
        try {
            console.log(`call confirmation email [POST] /email-confirmation/confirm`);
            const email = await this.emailConfirmationService.decodeConfirmationToken(confirmationData.token);
            await this.emailConfirmationService.confirmEmail(email);

            const response = {
                statusCode: 200,
                status: "success",
                data: "Confirmation Email Successfull"
            }
            return response;
        } catch (error) {
            const err = {
                statusCode: error.response.statusCode,
                status: "fail",
                data: error.response.message
            }
            console.log("error from /email-confirmation/confirm => ", error.response);
            return err;
        }

    }

    @Post('resend-confirmation-link')
    // @UseGuards(JwtAuthGuard)
    async resendConfirmationLink(@Body() body) {
        try {
            console.log(`call resend confirmation email [POST] /email-confirmation/resend-confirmation-link`);
            await this.emailConfirmationService.resendConfirmationLink(body.email);

            const response = {
                statusCode: 200,
                status: "success",
                data: "Resend Confirmation Email Success"
            }
            return response;

        } catch (error) {
            // const err = {
            //     statusCode: error.response.statusCode,
            //     status: "fail",
            //     data: error.response.message
            // }
            // console.log("error from /email-confirmation/confirm => ", error.response);
            // return err;
        }
        
    }
}
