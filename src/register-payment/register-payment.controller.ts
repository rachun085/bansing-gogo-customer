import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
const path = require('path');
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { DocumentService } from 'src/document/document.service';
import { CreateRegisterPaymentDto } from './dto/create.register.payment.dto';
import { UpdateRegisterPaymentDto } from './dto/update.register.payment.dto';
import { RegisterPaymentService } from './register-payment.service';
const sharp = require('sharp');

const configMulter = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'frontend/assets/images/register/slip');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

@Controller('register-payment')     //แจ้งชำระเงิน
export class RegisterPaymentController {
    constructor(private registerPaymentService: RegisterPaymentService, private documentService: DocumentService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get(':register_id')
    async getRegisterPaymentByRegisterId(@Param() param): Promise<any> {
        console.log(`get register payment by register id [GET] /register-payment/${param.register_id}`);
        const registerPayment = await this.registerPaymentService.getByRegisterId(param.register_id);
        return registerPayment;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @UseInterceptors(FileInterceptor('slip_image', { storage: configMulter }))
    @Post('')
    async createRegister(@Body() dto: CreateRegisterPaymentDto, @Req() req, @Res() res, @UploadedFile() file: Express.Multer.File): Promise<any> {
        try {
            const { filename: image } = req.file;
            console.log(`add register payment [POST] /register-payment`);
            await sharp(req.file.path).jpeg({quality: 70}).toFile(path.resolve(req.file.destination,'resized', image))
            const registerPayment = await this.registerPaymentService.createRegisterPayment(dto, file);
            const response = {
                status: "success",
                data: registerPayment
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from [POST] register-payment => ", error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @Put('update')
    async updateRegisterPayment(@Body() dto: UpdateRegisterPaymentDto, @Req() req, @Res() res): Promise<any> {
        try {
            console.log(`update register payment [PUT] /register-payment/update`);
            const updated = await this.registerPaymentService.updateRegisterPayment(dto);
            if(updated.status == "CONFIRMED"){
                const dto = {user: updated.register.user, event: updated.register.event, register: updated.register}
                await this.documentService.createContractDocument(dto)  //สร้างสัญญาหลังจากยืนยันการชำระเงินแล้ว
            }
            const response = {
                status: "success",
                data: updated
            }
            res.send(response);
            return updated;
        } catch (error) {
            console.log("error from [PUT] /register-payment/update => ", error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }
}
