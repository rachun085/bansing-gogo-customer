import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { configMulter } from 'src/common/configMulter';
import { CreateCompanyDto } from 'src/company/dto/create.company.dto';
import { BankInformationService } from './bank-information.service';
import CreateBankInformationDto from './dto/create.bank.information.dto';
import UpdateBankInformationDto from './dto/update.bank.information.dto';

@Controller('bank-information')
export class BankInformationController {
    constructor(private bankInformationService: BankInformationService) {}

    @Get('get/all/customer')
    async getAllBankCustomer(@Req() req, @Res() res): Promise<any> {
        console.log(`get bank information customer [GET] /bank-information/get/all/customer`);
        const bankInformation = await this.bankInformationService.getAllForCustomer();
        res.send(bankInformation);
        return bankInformation;
    }

    @Get('get/all')
    async getAllBank(@Req() req, @Res() res): Promise<any> {
        console.log(`get bank information [GET] /bank-information`);
        const bankInformation = await this.bankInformationService.getAll();
        res.send(bankInformation);
        return bankInformation;
    }

    @Get('get/id/:id')
    async getById(@Req() req, @Res() res, @Param() param): Promise<any> {
        console.log(`get bank information [GET] /bank-information`);
        const bankInformation = await this.bankInformationService.getById(param.id);
        res.send(bankInformation);
        return bankInformation;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @Post('')
    async addBank(@Body() dto: CreateBankInformationDto, @Req() req, @Res() res): Promise<any> {
        try {
            console.log(`add bank [POST] /bank-information`);
            const bank = await this.bankInformationService.create(dto);
            const response = {
                status: "success",
                data: bank
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from [POST] /bank-information => ", error);
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
    async updateBank(@Body() dto: UpdateBankInformationDto, @Req() req, @Res() res): Promise<any> {
        try {
            console.log(`update bank [PUT] /bank-information/update`);
            const bank = await this.bankInformationService.update(dto);
            const response = {
                status: "success",
                data: bank
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from [PUT] /bank-information/update => ", error);
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
    @Delete(':id')
    async deleteBank(@Req() req, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`delete bank-information [DELETE] /bank-information/${param.id}`);
            const bank = await this.bankInformationService.delete(param.id);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /bank-information/${param.id} => `, error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }
}
