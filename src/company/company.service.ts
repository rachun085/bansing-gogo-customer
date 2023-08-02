import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/company.entity';
import { CompanyImage } from 'src/entities/company.image.entity';
import { Events } from 'src/entities/event.entity';
import { Repository } from 'typeorm';
import { AddImageCompanyDto } from './dto/add.image.company.dto';
import { CreateCompanyDto } from './dto/create.company.dto';
import { UpdateCompanyDto } from './dto/update.company.dto';

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

    async getWithEventsByURLName(urlName: string): Promise<Company> {
        try {
            const company = await this.companyRepository.findOne({
                where: {
                    urlName: urlName
                },
                select: {
                    event: {
                        id: true,
                        name: true,
                        image: true,
                        targetPrice: true,
                        status: true,
                        eventDate: true,
                        urlName: true
                    }
                },
                relations: {
                    image: true,
                    event: {
                        image: true
                    }
                },
                order: {
                    event: {
                        image: {
                            id: "ASC"
                        }
                    }
                }
            });

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
}
