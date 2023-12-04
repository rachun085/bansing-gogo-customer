import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import OrderSuccessDto from 'src/email-confirmation/dto/order.success.dto';
import { EmailConfirmationService } from 'src/email-confirmation/email-confirmation.service';
import { CreateRegisterDto } from './dto/create.register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private registerService: RegisterService,
        private emailConfirmationService: EmailConfirmationService
        ) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get(':id')
    async getRegisterById(@Param() param): Promise<any> {
        console.log(`get register [GET] /register/${param.id}`);
        const register = await this.registerService.get(param.id);
        return register;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Post('')
    async createRegister(@Body() dto: CreateRegisterDto, @Req() req, @Res() res): Promise<any> {
        try {
            console.log(`add register event [POST] /register`);
            const register = await this.registerService.createRegister(dto);

            // send mail after create register to customer
            const payloadSendEmail: OrderSuccessDto = {
                email: register.user.email,
                registId: register.id,
                amountOwnership: register.amountOwnership,
                totalPrice: register.totalPrice,
                fullName: `${register.user.firstName} ${register.user.lastName}`,
                registDate: String(register.createdAt),
                eventName: register.event.name
            }
            await this.emailConfirmationService.sendMailOrderSuccess(payloadSendEmail);

            const response = {
                status: "success",
                data: register
            }
            res.send(response);
            return response;
            
        } catch (error) {
            console.log("error from [POST] /register => ", error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('/user/:id')
    async getRegisterByUserId(@Param() param): Promise<any> {
        console.log(`get register by user id [GET] /register/user/${param.id}`);
        const register = await this.registerService.getByUserId(param.id);
        return register;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('/contract/:userId')
    async getContractByUserId(@Param() param): Promise<any> {
        console.log(`get register with contract by user id [GET] /register/contract/${param.userId}`);
        const register = await this.registerService.getContractByUserId(param.userId);
        return register;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @Get('/get/all')
    async getAll(@Param() param): Promise<any> {
        console.log(`get all register [GET] /register/payment`);
        const register = await this.registerService.getAll();
        return register;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @Get('/get/payment/:id')
    async getRegisterByIdWithPayment(@Param() param): Promise<any> {
        console.log(`get register by id with payment [GET] /register/get/payment/${param.id}`);
        const register = await this.registerService.getByIdWithPayment(param.id);
        return register;
    }

}
