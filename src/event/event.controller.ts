import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { CreateEventDto } from './dto/create.event.dto';
import { EventService } from './event.service';
import { diskStorage } from 'multer';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UpdateImageDto } from './dto/update.image.dto';
import { DeleteEventImageDto } from './dto/delete.event.image.dto';
import { UpdateEventDto } from './dto/update.event.dto';
var path = require('path')

const configMulter = diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname == 'images') {
            cb(null, 'frontend/assets/images/uploads/event');
        } else if (file.fieldname == 'contract') {
            cb(null, 'frontend/static/documents/original_document');
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname == 'images') {
            cb(null, file.originalname);
        } else if (file.fieldname == 'contract') {
            cb(null, `${req.body.urlName.split(' ').join('_')}_original_document${path.extname(file.originalname)}`);
        }

    },
});

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('getAll')
    async getAll(@Param() param): Promise<any> {
        const event = await this.eventService.getAll();
        return event;
    }

    @UseGuards(JwtAuthGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get(':id')
    async getUserById(@Param() param): Promise<any> {
        const event = await this.eventService.get(param.id);
        return event;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('get/url-name/:urlName')
    async getEventsByURLName(@Param() param): Promise<any> {
        console.log(`get event by url name [GET] /event/get/url-name/${param.urlName}`);
        const company = await this.eventService.getByURL(param.urlName);
        return company;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }, { name: 'contract', maxCount: 2 }], { storage: configMulter }))
    @Post('')
    async addEvent(@Body() dto: CreateEventDto, @Req() req, @UploadedFiles() files: { images?: Array<Express.Multer.File>, contract?: Express.Multer.File }, @Res() res): Promise<any> {
        try {
            console.log(`add event [POST] /event`);
            const event = await this.eventService.createEvent(dto, files);
            const response = {
                status: "success",
                data: event
            }

            res.send(response);
            return response;
        } catch (error) {
            console.log("error from [POST] /event => ", error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }

    // @Post('upload')
    // @UseInterceptors(FilesInterceptor('images', 10, { storage: configMulter }))
    // uploadFile(@UploadedFiles() images: Array<Express.Multer.File>) {
    //     console.log(images);
    // }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 10 }, { name: 'contract', maxCount: 1 }], { storage: configMulter }))
    @Put('update-event')
    async updateEvent(@Body() dto: UpdateEventDto, @Req() req, @UploadedFiles() files: { images?: Array<Express.Multer.File>, contract?: Express.Multer.File }, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`update event [PUT] /event/update-event`);
            const event = await this.eventService.updateEvent(dto, files);
            const response = {
                status: "success",
                data: event
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [PUT] /event/update-event => `, error);
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
    @UseInterceptors(FileInterceptor('file', { storage: configMulter }))
    @Post('update-image')
    async updateImage(@Body() dto: UpdateImageDto, @Req() req, @UploadedFile() file: Express.Multer.File, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`update image [POST] /event/update-image`);
            const event = await this.eventService.updateImageEvent(dto, file);
            const response = {
                status: "update image successfully",
                data: event
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [POST] /event/update-image => `, error);
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
            console.log(`delete event image [DELETE] /event/delete-image [param image id : ${param.imageId}]`);
            const event = await this.eventService.deleteImageByImageId(param.imageId);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /event/delete-image => `, error);
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
    @Delete('/delete-event/:eventId')
    async deleteEvent(@Req() req, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`delete event [DELETE] /event/delete-event [param event id : ${param.eventId}]`);
            const event = await this.eventService.deleteEvent(param.eventId);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /event/delete-company => `, error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }

}
