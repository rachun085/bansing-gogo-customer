import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document, Documents } from 'src/entities/document.entity';
import { Register } from 'src/entities/register.entity';
import { Repository } from 'typeorm';
import { CreateContractDocumentDto } from './dto/create.contract.document.dto';
import { PDFDocument, StandardFonts, rgb, degrees, cmyk } from 'pdf-lib';
const fontKit = require('@pdf-lib/fontkit')
var fs = require('fs');
import fetch from "node-fetch";
import { User } from 'src/entities/user.entity';
import { Events } from 'src/entities/event.entity';
import { UpdateContractDocumentDto } from './dto/update.contract.document.dto';
const path = require('node:path');

@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(Documents) private documentRepository: Repository<Documents>,
        @InjectRepository(Register) private registerRepository: Repository<Register>,
    ) { }

    async getByRegisterId(registerId: number): Promise<Documents> {
        const document = await this.documentRepository.findOne({
            relations: ['register'],
            where: {
                register: {
                    id: registerId
                }
            }
        })

        if(!document){
            throw new HttpException('Document not found', HttpStatus.NOT_FOUND)
        }

        const docContentBase64 = fs.readFileSync(path.join(process.cwd(), `/frontend/assets/documents/${document.fileName}`), {encoding: 'base64'});
        document["base64Data"] = docContentBase64

        return document;
    }

    async createContractDocument(dto: CreateContractDocumentDto): Promise<Documents> {
        const register = await this.registerRepository.findOneBy({ id: dto.register.id })
        if (!register) {
            throw new HttpException('Register not found', HttpStatus.NOT_FOUND);
        }
        const createPdf = await this.createPdf(dto.user, dto.event);
        if (createPdf.created) {
            const document = this.documentRepository.create({
                fileName: createPdf.fileName,
                description: "",
                status: Document.Status.Enabled,
                editNo: 0
            })

            document.register = register;
            const saved = await this.documentRepository.save(document);
            return saved;
        }

    }

    async updateContractDocument(dto: UpdateContractDocumentDto): Promise<Documents> {
        const findDocument = await this.documentRepository.findOneBy({ id: dto.documentId })
        if (!findDocument) {
            throw new HttpException('Document not found', HttpStatus.NOT_FOUND);
        }
        const updatePdf = await this.updatePdf(findDocument.fileName, dto.contractBase64Data);
        if (updatePdf.updated) {
            findDocument.editNo = findDocument.editNo + 1
            const saved = await this.documentRepository.save(findDocument);
            return saved;
        }

    }

    async createPdf(user, event) {
        // TODO: Comment user, event on prodution
        // user = { firstName: "ทดสอบ", lastName: "ระบบ" }
        // event = { name: "Chonge #1", urlName: "chonge-1" }
        const originalFileName = `${event.urlName.split(' ').join('_')}_original_document.pdf`;
        const url = `${process.env.BASE_URL_FRONTEND}/documents/original_document/${originalFileName}`;
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        const form = pdfDoc.getForm()
        const button = form.createTextField('signContract')

        pdfDoc.registerFontkit(fontKit)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const THSarabunNewFont = await pdfDoc.embedFont(fs.readFileSync(path.join(process.cwd(), `/frontend/assets/fonts/THSarabunNew/THSarabunNew.ttf`)))

        const pages = pdfDoc.getPages()
        const firstPage = pages[0]
        const { width, height } = firstPage.getSize()
        firstPage.drawText(user.firstName, {
            x: 5,
            // y: height / 2 + 300,
            size: 14,
            font: THSarabunNewFont,
            // color: rgb(0.95, 0.1, 0.1),
            // rotate: degrees(-45),
        })

        // TODO: ตั้งค่าใหม่อีกครั้ง ตอนได้ PDF ไฟล์จริงมา
        button.addToPage(firstPage, {
            x: 255,
            y: 155,
            width: 140,
            backgroundColor: cmyk(0, 0, 0, 0),
            borderColor: cmyk(0, 0, 0, 0),
        })

        const pdfBytes = await pdfDoc.save()

        //write file
        const generateFileName = `${event.name.split(' ').join('_')}_${user.firstName}_${user.lastName}`
        const filePath = path.join(process.cwd(), `/frontend/assets/documents/${generateFileName}.pdf`);
        const basename = path.basename(filePath)
        fs.writeFile(filePath, Buffer.from(pdfBytes), 'binary', (err) => {
            if (err) {
                console.log("There was an error writing file");
                throw err;
            }
            console.log("Saved pdf contract file : ", filePath);

        })
        return {
            created: true,
            fileName: basename
        }
    }

    async updatePdf(fileName, contractBase64Data) {
        const url = path.join(process.cwd(), `/frontend/assets/documents/${fileName}`);
        console.log("url update image: ", url);
        const uint8Array = fs.readFileSync(url)
        // const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

        const pdfDoc = await PDFDocument.load(uint8Array)
        const form = pdfDoc.getForm()
        // pdfDoc.registerFontkit(fontKit)
        // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        // const THSarabunNewFont = await pdfDoc.embedFont(fs.readFileSync(path.join(process.cwd(), `/frontend/assets/fonts/THSarabunNew/THSarabunNew.ttf`)))
        const contractImage = await pdfDoc.embedPng(contractBase64Data);
        const textField = form.getTextField('signContract')

        const pages = pdfDoc.getPages()
        const firstPage = pages[0]
        const { width, height } = firstPage.getSize()
        textField.setImage(contractImage)


        const pdfBytes = await pdfDoc.save()

        //write file
        const filePath = path.join(process.cwd(), `/frontend/assets/documents/${fileName}`);
        const basename = path.basename(filePath)
        fs.writeFile(filePath, Buffer.from(pdfBytes), 'binary', (err) => {
            if (err) {
                console.log("There was an error writing file");
                throw err;
            }
            console.log("Saved pdf contract file : ", filePath);

        })
        return {
            updated: true,
            fileName: basename
        }
    }

    async deleteDocument(documentId: number): Promise<Documents> {
        const document = await this.documentRepository.findOne({
            where: {
                id: documentId
            }
        });
        if (!document) {
            throw new HttpException('Document not found', HttpStatus.NOT_FOUND);
        }

        fs.stat(`frontend/documents/${document.fileName}`, (err, stats) => {
            console.log("stats file document: ", stats);//here we got all information of file in stats variable
         
            if (err) {
                return console.error(err);
            }
         
            fs.unlink(`frontend/documents/${document.fileName}`,(err) => {
                 if(err) return console.log(err);
                 console.log('document file deleted successfully');
            });  
         });

        return await this.documentRepository.remove(document);
        

    }

}
