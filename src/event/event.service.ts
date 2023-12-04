import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyService } from 'src/company/company.service';
import { Events } from 'src/entities/event.entity';
import { EventImage } from 'src/entities/event.image.entity';
import { OriginalDocument } from 'src/entities/original.document.entity';
import { Register } from 'src/entities/register.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create.event.dto';
import { DeleteEventImageDto } from './dto/delete.event.image.dto';
import { UpdateEventDto } from './dto/update.event.dto';
import { UpdateImageDto } from './dto/update.image.dto';
var path = require('path')
const fs = require('fs');

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Events) private eventRepository: Repository<Events>,
        @InjectRepository(EventImage) private eventImageRepository: Repository<EventImage>,
        @InjectRepository(OriginalDocument) private originalDocumentRepository: Repository<OriginalDocument>,
    ) { }

    @Inject()
    private companyService: CompanyService

    async getAll(): Promise<Events[]> {
        try {
            const event = await this.eventRepository.find();

            return event;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async get(id: number): Promise<Events> {
        try {
            const event = await this.eventRepository.findOne({
                where: {
                    id: id
                },
                relations: {
                    image: true,
                    company: true
                }
            });


            let newImages = [];
            for (let i = 0; i < event.image.length; i++) {
                var convertToBase64;
                // console.log("image : ", event.image[i]);

                let readFile = fs.readFileSync(`${event.image[i].src}`, async (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    return data;

                });

                const item = {
                    id: event.image[i].id,
                    src: event.image[i].src,
                    alt: event.image[i].alt,
                    type: event.image[i].type,
                    createdAt: event.image[i].createdAt,
                    updatedAt: event.image[i].updatedAt,
                    base64Data: await this.toBase64(readFile)
                }
                newImages.push(item)
            }

            // console.log("new image : ", newImages);
            delete event["image"]
            event["image"] = newImages;
            return event;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async toBase64(data: string): Promise<any> {
        return Buffer.from(data).toString('base64');
    }

    async getByURL(url: string): Promise<Events> {
        try {
            const event = await this.eventRepository.findOne({
                where: {
                    urlName: url
                },
                relations: {
                    image: true,
                    company: true,
                    register: {
                        registerPayment: true
                    }
                },
                order: {
                    image: {
                        id: "ASC"
                    }
                }
            });

            if(!event){
                throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
            }
            for (const it of event.register) {
                if (it.status == Register.Status.Uncomplete && it.registerPayment.length == 0) {
                    if (new Date() > new Date(it.dueDate)) {
                        it.status = Register.Status.Expired

                        
                    }
                }
            }
            await this.eventRepository.save(event);
            return event;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getWithRegister(id: number): Promise<Events> {
        try {
            const event = await this.eventRepository.findOne({
                where: {
                    id: id
                },
                relations: {
                    image: true,
                    register: true
                }
            });

            return event;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createEvent(dto: CreateEventDto, files: any): Promise<Events> {
        const company = await this.companyService.getByName(dto.companyName);
        const foundSameUrlName = await this.eventRepository.findOneBy({
            urlName: dto.urlName
        });

        if (!company) {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }

        if (foundSameUrlName) {
            throw new HttpException('URL Name is exist', HttpStatus.CONFLICT);
        }

        let itemsImage: EventImage[] = [];
        let itemsDocument: OriginalDocument[] = [];
        const event: Events = await this.eventRepository.create(dto);
        event.name = dto.name;
        event.eventDate = dto.eventDate;
        event.targetPrice = dto.targetPrice;
        event.ownership = dto.ownership;
        event.sharePercentage = dto.sharePercentage;
        event.pricePerOwnership = dto.pricePerOwnership;
        event.shortDescription = dto.shortDescription;
        event.description = dto.description;
        event.urlName = dto.urlName;
        event.status = Events.Status.Enabled;
        event.company = company;

        if (files.images) {
            for (const it of files.images) {
                let image: EventImage = this.eventImageRepository.create({
                    alt: it.originalname,
                    src: it.path,
                    type: 1
                });

                itemsImage.push(image)
            }
        }

        if (files.contract) {
            for (const it of files.contract) {
                let document: OriginalDocument = this.originalDocumentRepository.create({
                    fileName: `${dto.urlName.split(' ').join('_')}_original_document${path.extname(it.originalname)}`,
                    status: OriginalDocument.Status.Used,
                });

                itemsDocument.push(document)
            }
        }

        event.image = itemsImage;
        event.originalDocument = itemsDocument;
        const savedEvent = await this.eventRepository.save(event);
        if (savedEvent) {
            console.log(`Create event success : ${savedEvent.id}`);
        }
        return savedEvent;

    }

    async updateEvent(dto: UpdateEventDto, files: any): Promise<Events> {
        const event = await this.eventRepository.findOne({
            where: {
                id: dto.eventId
            },
            relations: {
                image: true,
                originalDocument: true
            }
        });
    
        if (!event) {
            throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
        }

        let itemsImage: EventImage[] = [];
        let itemsDocument: OriginalDocument[] = [];

        if(dto.urlName){
            if(dto.urlName !== event.urlName){
                const foundSameUrlName = await this.eventRepository.findOneBy({
                    urlName: dto.urlName
                });

                if (foundSameUrlName) {
                    throw new HttpException('URL Name is exist', HttpStatus.CONFLICT);
                }
            }
        }

        event.name = dto.name;
        event.eventDate = dto.eventDate;
        event.targetPrice = dto.targetPrice;
        event.ownership = dto.ownership;
        event.sharePercentage = dto.sharePercentage;
        event.pricePerOwnership = dto.pricePerOwnership;
        event.shortDescription = dto.shortDescription;
        event.description = dto.description;
        event.urlName = dto.urlName;
        event.status = dto.status == "ENABLED" ? Events.Status.Enabled : dto.status == "DISABLED" ? Events.Status.Disabled : Events.Status.Enabled 

        if (files && files.images) {
            for (const it of files.images) {
                let image: EventImage = this.eventImageRepository.create({
                    alt: it.originalname,
                    src: it.path,
                    type: 1
                });

                itemsImage.push(image)
            }
            event.image = event.image.concat(itemsImage);
        }

        if (files && files.contract) {
            const findDoc = await this.originalDocumentRepository.findOne({
                where: {
                    event: {
                        id: event.id
                    }
                },
                relations: {
                    event: true
                }
            });
            
            if(findDoc){
                fs.stat(`frontend/static/documents/original_document/${findDoc.fileName}`, (err, stats) => {
                    console.log("stats file contract: ", stats);//here we got all information of file in stats variable
                 
                    if (err) {
                        return console.error(err);
                    }
                 
                    fs.unlink(`frontend/static/documents/original_document/${findDoc.fileName}`,(err) => {
                         if(err) return console.log(err);
                         console.log('old contract file deleted successfully');
                    });  
                 });

                await this.originalDocumentRepository.remove(findDoc);
            }
            for (const it of files.contract) {
                let document: OriginalDocument = this.originalDocumentRepository.create({
                    fileName: `${dto.urlName.split(' ').join('_')}_original_document${path.extname(it.originalname)}`,
                    status: OriginalDocument.Status.Used,
                });

                itemsDocument.push(document)
            }

            event.originalDocument = itemsDocument;
        }

        
        const savedEvent = await this.eventRepository.save(event);
        if (savedEvent) {
            console.log(`Updated event success : ${savedEvent.id}`);
        }
        return savedEvent;

    }

    async updateImageEvent(dto: UpdateImageDto, file: Express.Multer.File): Promise<any> {
        console.log("old : ", dto.oldFileName);

        const oldEventImage = await this.eventImageRepository.findOne({
            where: {
                alt: dto.oldFileName
            },
            relations: {
                event: true
            }
        });

        if (!oldEventImage) {
            throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
        }

        if (file) {
            const eventImage = this.eventImageRepository.create({
                alt: file.originalname,
                src: file.path,
                type: oldEventImage.type,
                event: oldEventImage.event
            })

            const savedImage = await this.eventImageRepository.save(eventImage);
            if (savedImage) {
                await this.eventImageRepository.remove(oldEventImage);
            }
        }

    }

    async deleteImageByImageId(imageId: number): Promise<EventImage> {
        const eventImage = await this.eventImageRepository.findOneBy({ id: imageId });
        if (!eventImage) {
            throw new HttpException('image not found', HttpStatus.NOT_FOUND);
        }

        fs.stat(`${eventImage.src}`, (err, stats) => {
            // console.log("stats file : ", stats);//here we got all information of file in stats variable
         
            if (err) {
                return console.error(err);
            }
         
            fs.unlink(`${eventImage.src}`,(err) => {
                 if(err) return console.log(err);
                 console.log('file deleted successfully');
            });  
         });

        return await this.eventImageRepository.remove(eventImage);
    }

    async deleteEvent(eventId: number): Promise<Events> {
        const event = await this.eventRepository.findOneBy({ id: eventId });
        if (!event) {
            throw new HttpException('event not found', HttpStatus.NOT_FOUND);
        }

        return await this.eventRepository.remove(event);
    }



}
