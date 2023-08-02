import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerImage } from 'src/entities/banner.image.entity';
import { Repository } from 'typeorm';
import { CreateBannerImageDto } from './dto/create.banner.image.dto';
import { UpdateBannerImageDto } from './dto/update.banner.image.dto';
const fs = require('fs');

@Injectable()
export class SettingService {
    constructor(
        @InjectRepository(BannerImage) private bannerImageRepository: Repository<BannerImage>
    ) { }

    async getAll(): Promise<BannerImage[]> {
        try {
            const bannerImage = await this.bannerImageRepository.find();

            for (const it of bannerImage) {
                let readFile = fs.readFileSync(`${it.src}`, async (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    return data;
                });

                it["base64Data"] = await this.toBase64(readFile)
            }

            return bannerImage;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getAllBannerImageCustomer(): Promise<BannerImage[]> {
        try {
            const bannerImage = await this.bannerImageRepository.find({
                where: {
                    status: BannerImage.Status.Enabled
                }
            });

            for (const it of bannerImage) {
                let readFile = fs.readFileSync(`${it.src}`, async (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    return data;
                });

                it["base64Data"] = await this.toBase64(readFile)
            }

            return bannerImage;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getById(bannerImageId: number): Promise<BannerImage> {
        try {
            const bannerImage = await this.bannerImageRepository.findOne({
                where: {
                    id: bannerImageId
                }
            });

            let readFile = fs.readFileSync(`${bannerImage.src}`, async (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                return data;
            });

            bannerImage["base64Data"] = await this.toBase64(readFile)

            return bannerImage;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createBannerImage(dto: CreateBannerImageDto, file: Express.Multer.File): Promise<BannerImage> {
        if (file) {
            const bannerImage = this.bannerImageRepository.create({
                alt: dto.alt,
                src: `${file.destination}/resized/${file.filename}`,
                urlName: dto.urlName,
                title: dto.title,
                subTitle: dto.subTitle,
                status: dto.status == "Enabled" ? BannerImage.Status.Enabled : dto.status == "Disabled" ? BannerImage.Status.Disabled : BannerImage.Status.Disabled
            })

            const savedImage = await this.bannerImageRepository.save(bannerImage);
            if (savedImage) {
                fs.stat(file.path, (err, stats) => {
                    console.log("stats file to remove: ", stats);

                    if (err) {
                        return console.error(err);
                    }

                    fs.unlink(file.path, (err) => {
                        if (err) return console.log(err);
                        console.log('old img banner file deleted successfully');
                    });
                });

            }
            return savedImage;
        }

    }

    async updateBannerImage(dto: UpdateBannerImageDto, file?: Express.Multer.File): Promise<BannerImage> {
        let oldPathImage;
        const bannerImage = await this.bannerImageRepository.findOneBy({ id: dto.bannerImageId });

        if (!bannerImage) {
            throw new HttpException('Banner Id not found', HttpStatus.NOT_FOUND);
        }

        bannerImage.alt = dto.alt;
        bannerImage.urlName = dto.urlName;
        bannerImage.title = dto.title;
        bannerImage.subTitle = dto.subTitle;
        bannerImage.status = dto.status == "Enabled" ? BannerImage.Status.Enabled : dto.status == "Disabled" ? BannerImage.Status.Disabled : BannerImage.Status.Disabled

        if (file) {
            oldPathImage = bannerImage.src;
            bannerImage.src = `${file.destination}/resized/${file.filename}`
        } else {
            bannerImage.src = bannerImage.src
        }

        const savedImage = await this.bannerImageRepository.save(bannerImage);
        if (savedImage && file) {
            fs.stat(oldPathImage, (err, stats) => {
                // console.log("stats file to remove: ", stats);

                if (err) {
                    return console.error(err);
                }

                fs.unlink(oldPathImage, (err) => {
                    if (err) return console.log(err);
                    console.log('old img banner file deleted successfully');
                });
            });
        }
        return savedImage;
    }

    async toBase64(data: string): Promise<any> {
        return Buffer.from(data).toString('base64');
    }

    async deleteBannerImage(bannerImageId: number): Promise<BannerImage> {
        const image = await this.bannerImageRepository.findOneBy({ id: bannerImageId });
        if (!image) {
            throw new HttpException('image not found', HttpStatus.NOT_FOUND);
        }

        fs.stat(`${image.src}`, (err, stats) => {
            // console.log("stats file : ", stats);//here we got all information of file in stats variable
         
            if (err) {
                return console.error(err);
            }
         
            fs.unlink(`${image.src}`,(err) => {
                 if(err) return console.log(err);
                 console.log('file deleted successfully');
            });  
         });

        return await this.bannerImageRepository.remove(image);
    }

} 
