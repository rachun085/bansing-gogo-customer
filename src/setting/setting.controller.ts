import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { CreateBannerImageDto } from './dto/create.banner.image.dto';
import { UpdateBannerImageDto } from './dto/update.banner.image.dto';
import { SettingService } from './setting.service';
const sharp = require('sharp');
const path = require('path');

const configMulter = diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname == 'image') {
            cb(null, 'frontend/assets/images/uploads/banner-image');
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname == 'image') {
            cb(null, file.originalname);
        }
    }
});

@Controller('setting')
export class SettingController {
    constructor(private settingService: SettingService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @Get('/banner-image/:id')
    async getUserById(@Param() param): Promise<any> {
        try {
            console.log(`fetching detail banner immage from [GET] /setting/banner-image/${param.id}`);
            const bannerImage = await this.settingService.getById(param.id);
            return bannerImage;
        } catch (error) {
            const result = {
                status: "error",
                data: "Banner not found"
            }
            return result;
        }

    }

    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('/banner-image/get/all/customer')
    async getUserAllForCustomer(@Param() param): Promise<any> {
        console.log(`fetching all banner image (customer) from [GET] /setting/banner-image/get/all/customer`);
        const bannerImage = await this.settingService.getAllBannerImageCustomer();
        return bannerImage;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @Get('/banner-image/get/all')
    async getUserAll(@Param() param): Promise<any> {
        console.log(`fetching all banner image from [GET] /setting/banner-image/get/all`);
        const bannerImage = await this.settingService.getAll();
        return bannerImage;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @UseInterceptors(FileInterceptor('image', { storage: configMulter }))
    @Post('/banner-image')
    async createBannerImage(@Body() dto: CreateBannerImageDto, @Req() req, @Res() res, @UploadedFile() file: Express.Multer.File): Promise<any> {
        try {
            console.log(`add banner image [POST] /setting/banner-image`);
            const { filename: image } = req.file;
            await sharp(req.file.path).jpeg({quality: 70}).toFile(path.resolve(req.file.destination,'resized', image))
            const bannerImage = await this.settingService.createBannerImage(dto, file);
            const response = {
                status: "success",
                data: bannerImage
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from [POST] /setting/banner-image => ", error);
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
    @Put('/banner-image')
    async updateBannerImage(@Body() dto: UpdateBannerImageDto, @Req() req, @Res() res, @UploadedFile() file: Express.Multer.File): Promise<any> {
        try {
            let bannerImage;
            console.log(`update banner image [PUT] /setting/banner-image`);
            if(req.file){
                console.log("req.file : ", req.file);
                
                const { filename: image } = req.file;
                await sharp(req.file.path).jpeg({quality: 70}).toFile(path.resolve(req.file.destination,'resized', image))
                bannerImage = await this.settingService.updateBannerImage(dto, file);
            }else{
                bannerImage = await this.settingService.updateBannerImage(dto);
            }
            
            const response = {
                status: "success",
                data: bannerImage
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from PUT] /setting/banner-image => ", error);
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
    @Delete('/banner-image/delete/:imageBannerId')
    async deleteCompany(@Req() req, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`delete image banner [DELETE] /setting/delete-image-banner [param image id : ${param.imageBannerId}]`);
            const event = await this.settingService.deleteBannerImage(param.imageBannerId);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /setting/delete-image-banner => `, error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }
}
