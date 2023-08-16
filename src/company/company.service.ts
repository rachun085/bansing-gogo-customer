import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/company.entity';
import { CompanyImage } from 'src/entities/company.image.entity';
import { Events } from 'src/entities/event.entity';
import { Repository } from 'typeorm';
import { AddImageCompanyDto } from './dto/add.image.company.dto';
import { CreateCompanyDto } from './dto/create.company.dto';
import { UpdateCompanyDto } from './dto/update.company.dto';
import { UpdateImageCompanyDto } from './dto/update.image.company.dto';
var path = require('path')
const fs = require('fs');

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company) private companyRepository: Repository<Company>,
        @InjectRepository(CompanyImage) private companyImageRepository: Repository<CompanyImage>,
        @InjectRepository(Events) private eventRepository: Repository<Events>,
    ) { }

    async get(id: number): Promise<Company> {
        try {
            const company = await this.companyRepository.findOne({
                where: {
                    id: id
                },
                relations: {
                    image: true,
                    event: true
                }
            });

            for (const it of company.image) {
                if(fs.existsSync(path.join(process.cwd(), it.src))){
                    const contentBase64 = fs.readFileSync(path.join(process.cwd(), it.src), { encoding: 'base64' });
                    it["base64Data"] = contentBase64
                }else{
                    it["base64Data"] = ""
                }
            }

            return company;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getByName(name: string): Promise<Company> {
        try {
            const company = await this.companyRepository.findOne({
                where: {
                    name: name
                },
                relations: {
                    image: true,
                    event: true
                }
            });

            return company;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getAll(): Promise<Company[]> {
        const companies = await this.companyRepository.find({
            relations: {
                image: true
            }
        })

        return companies;
    }

    async getWithEventsByURLName(urlName: string): Promise<any> {
        try {
            const company = await this.companyRepository.findOne({
                relations: {
                    image: true,
                },
                where: {
                    urlName: urlName
                }
            });

            if (!company) {
                throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
            }

            const event = await this.eventRepository.find({
                relations: {
                    company: true,
                    image: true
                },
                where: {
                    company: {
                        id: company.id
                    },
                    status: Events.Status.Enabled
                },
                select: {
                    id: true,
                    name: true,
                    image: true,
                    targetPrice: true,
                    status: true,
                    eventDate: true,
                    urlName: true
                },
                order: {
                    image: {
                        id: "ASC"
                    }
                }
            });

            company["event"] = event
            return company;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updateCompany(dto: UpdateCompanyDto, file: Express.Multer.File): Promise<Company> {
        let itemsEvent: Events[] = [];
        const company = await this.companyRepository.findOne({
            where: {
                id: dto.id
            },
            relations: {
                event: true
            }
        })
        if (!company) {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }

        const image = await this.companyImageRepository.find({
            where: {
                company: {
                    id: company.id
                }
            }
        });

        if (dto.events) {
            for (const it of dto.events) {
                let event: Events = this.eventRepository.create({
                    name: it.name,
                    eventDate: it.eventDate,
                    targetPrice: it.targetPrice,
                    ownership: it.ownership,
                    pricePerOwnership: it.pricePerOwnership,
                    shortDescription: it.shortDescription,
                    description: it.description,
                    urlName: it.urlName,
                    status: Events.Status.Enabled
                });

                itemsEvent.push(event)
            }
            const concatEvent = company.event.concat(itemsEvent);
            company.event = concatEvent;
        }

        company.name = dto.name;
        company.urlName = dto.urlName;
        company.description = dto.description;
        if (!file) {
            if (image) {
                company.image = image
            } else {
                company.image = []
            }
        } else {
            if (image) {
                company.image = image;
            } else {
                let createImage: CompanyImage = this.companyImageRepository.create({
                    alt: file.originalname,
                    src: file.path,
                    type: 1
                });
                // createImage.company = company;
                company.image = [createImage];
            }

        }

        const saved = await this.companyRepository.save(company);
        return saved;

    }

    async updateCompanyImage(dto: UpdateImageCompanyDto, file: Express.Multer.File): Promise<CompanyImage> {
        let itemsEvent: Events[] = [];
        const company = await this.companyRepository.findOne({
            where: {
                id: dto.companyId,
            }
        })
        if (!company) {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }

        const image = await this.companyImageRepository.findOne({
            where: {
                company: {
                    id: company.id,
                },
                type: 2
            }
        });

        if (image) {
            const oldSrc = image.src;

            fs.stat(oldSrc, (err, stats) => {
                console.log("stats file image: ", stats);//here we got all information of file in stats variable
             
                if (err) {
                    return console.error(err);
                }
             
                fs.unlink(oldSrc,(err) => {
                     if(err) return console.log(err);
                     console.log('old image file deleted successfully');
                });  
             });

            image.alt = file.originalname,
            image.src = file.path,
            image.type = 2

            const saved = await this.companyImageRepository.save(image);
            return saved;
        }else{
            const image = await this.companyImageRepository.create({
                alt: file.originalname,
                src: file.path,
                type: 2,
                company: company
            })

            const saved = await this.companyImageRepository.save(image);
            return saved;
        }
    }

    async createCompany(dto: CreateCompanyDto, file: Express.Multer.File): Promise<Company> {
        let itemsEvent: Events[] = [];
        let itemsImage: CompanyImage[] = [];
        let company: Company = await this.companyRepository.create({
            name: dto.name,
            urlName: dto.urlName,
            description: dto.description
        });

        if (dto.event) {
            for (const it of dto.event) {
                let event: Events = this.eventRepository.create({
                    name: it.name,
                    eventDate: it.eventDate,
                    targetPrice: it.targetPrice,
                    ownership: it.ownership,
                    pricePerOwnership: it.pricePerOwnership,
                    shortDescription: it.shortDescription,
                    description: it.description,
                    urlName: it.urlName
                });

                itemsEvent.push(event)
            }
        }
        if (file) {
            let image: CompanyImage = this.companyImageRepository.create({
                alt: file.originalname,
                src: file.path,
                type: 1
            });

            itemsImage.push(image)
        }

        company.event = itemsEvent
        company.image = itemsImage
        const saved = await this.companyRepository.save(company);
        return saved;

    }

    async addImageCompany(dto: AddImageCompanyDto, file: Express.Multer.File): Promise<Company> {
        let itemsImage: CompanyImage[] = [];
        const company = await this.companyRepository.findOne({
            where: {
                id: dto.companyId
            },
            relations: {
                image: true
            }
        });
        if (!company) {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }

        if (file) {
            let image: CompanyImage = this.companyImageRepository.create({
                alt: file.originalname,
                src: file.path,
                type: dto.type
            });

            itemsImage.push(image)
        }

        const concatImage = company.image.concat(itemsImage);
        company.image = concatImage;
        const saved = await this.companyRepository.save(company);
        return saved;

    }

    async deleteCompany(id: number): Promise<Company> {
        let itemsImage: CompanyImage[] = [];
        const company = await this.companyRepository.findOne({
            where: {
                id: id
            },
            relations: {
                image: true
            }
        });
        if (!company) {
            throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
        }

        return await this.companyRepository.remove(company);


    }

    async deleteImage(imageId: number): Promise<CompanyImage> {
        const image = await this.companyImageRepository.findOne({
            where: {
                id: imageId
            }
        });
        if (!image) {
            throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
        }

        fs.stat(`${image.src}`, (err, stats) => {
            // console.log("stats file : ", stats);//here we got all information of file in stats variable

            if (err) {
                return console.error(err);
            }

            fs.unlink(`${image.src}`, (err) => {
                if (err) return console.log(err);
                console.log('image file deleted successfully');
            });
        });

        return await this.companyImageRepository.remove(image);


    }
}
