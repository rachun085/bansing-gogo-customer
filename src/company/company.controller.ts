import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create.company.dto';
// import { configMulter } from 'src/common/configMulter'
import { diskStorage } from 'multer';
import { UpdateCompanyDto } from './dto/update.company.dto';
import { AddImageCompanyDto } from './dto/add.image.company.dto';
import { UpdateImageCompanyDto } from './dto/update.image.company.dto';

const configMulter = diskStorage({
    // Specify where to save the file
    destination: (req, file, cb) => {
        cb(null, 'frontend/assets/images/uploads/company');
    },
    // Specify the file name
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get(':id')
    async getCompanyById(@Param() param): Promise<any> {
        console.log(`get company [GET] /company/${param.id}`);
        const company = await this.companyService.get(param.id);
        return company;
    }

    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('get/all')
    async getCompanyAll(@Param() param): Promise<any> {
        console.log(`get all company [GET] /company/get/all`);
        const companies = await this.companyService.getAll();
        return companies;
    }

    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('get/url-name/:urlName')
    async getEventsByURLName(@Param() param, @Res() res): Promise<any> {
        console.log(`get company by url name [GET] /company/get/url-name/${param.urlName}`);
        const companies = await this.companyService.getWithEventsByURLName(param.urlName);
        res.send(companies) 
        return companies;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @UseInterceptors(FileInterceptor('file', { storage: configMulter }))
    @Post('')
    async addCompany(@Body() dto: CreateCompanyDto, @Req() req, @UploadedFile() file: Express.Multer.File, @Res() res): Promise<any> {
        try {
            console.log(`add company [POST] /company`);
            const company = await this.companyService.createCompany(dto, file);
            const response = {
                status: "success",
                data: company
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from [POST] /company => ", error);
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
    @UseInterceptors(FileInterceptor('file', { storage: configMulter }))
    @Put('update')
    async updateCompany(@Body() dto: UpdateCompanyDto, @Req() req, @UploadedFile() file: Express.Multer.File, @Res() res): Promise<any> {
        try {
            console.log(`update company [PUT] /company/update`);
            const company = await this.companyService.updateCompany(dto, file);
            const response = {
                status: "success",
                data: company
            }
            res.send(response);
            return company;
        } catch (error) {
            console.log("error from [PUT] /company/update => ", error);
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
    @UseInterceptors(FileInterceptor('image', { storage: configMulter }))
    @Put('update-image')
    async updateCompanyImage(@Body() dto: UpdateImageCompanyDto, @Req() req, @UploadedFile() file: Express.Multer.File, @Res() res): Promise<any> {
        try {
            console.log(`update company image [PUT] /company/update-image`);
            const company = await this.companyService.updateCompanyImage(dto, file);
            const response = {
                status: "success",
                data: company
            }
            res.send(response);
            return company;
        } catch (error) {
            console.log("error from [PUT] /company/update-image => ", error);
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
    @UseInterceptors(FileInterceptor('file', { storage: configMulter }))
    @Post(':id/image')
    async addImage(@Body() dto: AddImageCompanyDto, @Req() req, @UploadedFile() file: Express.Multer.File, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`add image company [POST] /company/${param.id}/image`);
            const company = await this.companyService.addImageCompany(dto, file);
            const response = {
                status: "success",
                data: company
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [POST] /company/${param.id}/image => `, error);
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
    @Delete(':id')
    async deleteCompany(@Req() req, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`delete company [DELETE] /company/${param.id}`);
            const company = await this.companyService.deleteCompany(param.id);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /company/${param.id} => `, error);
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
    @Delete('delete-image/:imageId')
    async deleteCompanyImage(@Req() req, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`delete company image [DELETE] /company/delete-image/${param.imageId}`);
            const company = await this.companyService.deleteImage(param.imageId);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /company/delete-image${param.imageId} => `, error);
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
    @Delete('/delete-image/:imageId')
    async deleteImage(@Req() req, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`delete event image [DELETE] /company/delete-image [param image id : ${param.imageId}]`);
            const event = await this.companyService.deleteImage(param.imageId);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /company/delete-image => `, error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }
    
}
