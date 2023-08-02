import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { DocumentService } from './document.service';
import { CreateContractDocumentDto } from './dto/create.contract.document.dto';
import { UpdateContractDocumentDto } from './dto/update.contract.document.dto';
const path = require('node:path'); 

@Controller('document')
export class DocumentController {
    constructor(private documentService: DocumentService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
    @Get('/register/:registerId')
    async getByRegisterId(@Param() param): Promise<any> {
        console.log(`get document by register id [GET] /document/${param.registerId}`);
        const document = await this.documentService.getByRegisterId(param.registerId);
        return document;
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ROLE_SUP', 'ROLE_ADMIN')
    @Post('')
    async createDocument(@Body() dto: CreateContractDocumentDto, @Req() req, @Res() res): Promise<any> {
        try {
            console.log(`create contract document [POST] /document`);
            const document = await this.documentService.createContractDocument(dto);
            const response = {
                status: "success",
                data: document
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from [POST] /document => ", error);
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
    @Put('add-sign-contract')
    async addContractToDocument(@Body() dto: UpdateContractDocumentDto, @Req() req, @Res() res): Promise<any> {
        try {
            console.log(`add sign-contract document [PUT] /document/add-sign-contract`);
            const document = await this.documentService.updateContractDocument(dto);
            const response = {
                status: "success",
                data: document
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log("error from PUT] /document/add-sign-contract => ", error);
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
    @Delete(':documentId')
    async deleteDocument(@Req() req, @Res() res, @Param() param): Promise<any> {
        try {
            console.log(`delete document [DELETE] /document/${param.documentId}`);
            const company = await this.documentService.deleteDocument(param.documentId);
            const response = {
                status: "success",
                data: "Deleted successfuly"
            }
            res.send(response);
            return response;
        } catch (error) {
            console.log(`error from [DELETE] /document/${param.documentId} => `, error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: error.message,
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }
}
