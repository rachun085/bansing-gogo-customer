import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/entities/document.entity';
import { Events } from 'src/entities/event.entity';
import { Register } from 'src/entities/register.entity';
import { RegisterPayment } from 'src/entities/register.payment.entity';
import { User } from 'src/entities/user.entity';
import { EventsDescription, IsNull, Not, Repository } from 'typeorm';
import { CreateRegisterDto } from './dto/create.register.dto';
var fs = require('fs');
const path = require('node:path');

@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(Register) private registerRepository: Repository<Register>,
        @InjectRepository(Events) private eventRepository: Repository<Events>,
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    // @Inject()
    // private 

    async getAll(): Promise<any> {
        try {
            const register = await this.registerRepository.find({
                relations: ['user', 'event', 'registerPayment'],
            });

            for (const it of register) {
                if (it.status == Register.Status.Uncomplete && it.registerPayment.length == 0) {
                    if (new Date() > new Date(it.dueDate)) {
                        it.status = Register.Status.Expired

                        await this.registerRepository.save(register);
                    }
                }
            }

            const result = {
                result: "success",
                data: register
            }

            return register;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


    async get(id: number): Promise<Register> {
        try {
            const register = await this.registerRepository.findOne({
                where: {
                    id: id
                },
                relations: {
                    event: true
                }
            });

            return register;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getByIdWithPayment(registerId: number): Promise<any> {
        try {
            const register = await this.registerRepository.findOne({
                where: {
                    id: registerId
                },
                relations: ['user', 'event', 'registerPayment'],
            });

            register.registerPayment.forEach(async el => {
                let readFile = fs.readFileSync(`${el.slipSrc}`, async (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    return data;
                });

                el["base64Data"] = await this.toBase64(readFile)
            });

            const result = {
                result: "success",
                data: register
            }

            return register;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createRegister(dto: CreateRegisterDto): Promise<Register> {
        const date = new Date();
        date.setDate(date.getDate() + 2);

        const event = await this.eventRepository.findOneBy({ id: dto.eventId });
        const user = await this.userRepository.findOneBy({ id: dto.userId });
        if (!event) {
            throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
        }
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        const sharePercentage = event.sharePercentage;
        const totalPrice = event.pricePerOwnership * dto.amountOwnership;
        const totalPriceText = await this.arabicNumberToText(totalPrice);

        const register = this.registerRepository.create({
            amountOwnership: dto.amountOwnership,
            totalPrice: totalPrice,
            totalPriceText: totalPriceText,
            sharePercentage: sharePercentage,
            status: Register.Status.Uncomplete,
            dueDate: date.toISOString()
        })

        register.event = event;
        register.user = user;
        const savedRegister = await this.registerRepository.save(register);
        if (savedRegister) {
            console.log(`Create register success id : ${savedRegister.id}`);
        }
        return savedRegister;

    }

    async getByUserId(userId: number): Promise<any> {
        try {
            let registerData = [];
            const isUser = await this.userRepository.findOneBy({ id: userId });
            if (!isUser) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }

            const register = await this.registerRepository.find({
                relations: ['user', 'event', 'registerPayment'],
                where: {
                    user: {
                        id: isUser.id
                    }
                }
            });

            if (register.length > 0) {
                for (const it of register) {
                    if (it.status == Register.Status.Uncomplete && it.registerPayment.length == 0) {
                        if (new Date() > new Date(it.dueDate)) {
                            it.status = Register.Status.Expired
                        }
                    }

                    const item = {
                        id: it.id,
                        createdAt: it.createdAt,
                        updatedAt: it.updatedAt,
                        amountOwnership: it.amountOwnership,
                        totalPrice: it.totalPrice,
                        status: it.status,
                        dueDate: it.dueDate,
                        event: it.event
                    }

                    registerData.push(item)
                }
            }

            await this.registerRepository.save(register);
            const result = {
                data: registerData,
                user: register[0].user
            }

            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getContractByUserId(userId: number): Promise<any> {
        try {
            let registerData = [];
            const isUser = await this.userRepository.findOneBy({ id: userId });
            if (!isUser) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }

            const register = await this.registerRepository.find({
                relations: ['user', 'event', 'document'],
                where: {
                    user: {
                        id: isUser.id
                    }
                }
            });

            if (register.length > 0) {
                for (const it of register) {

                    let item = {
                        id: it.id,
                        createdAt: it.createdAt,
                        updatedAt: it.updatedAt,
                        amountOwnership: it.amountOwnership,
                        totalPrice: it.totalPrice,
                        status: it.status,
                        dueDate: it.dueDate,
                        event: it.event,
                        // document: {
                        //     id: it.document[0].id,
                        //     fileData: docContentBase64,
                        //     createdAt: it.document[0].createdAt,
                        //     editNo: it.document[0].editNo
                        // }
                    }

                    if (it.document.length > 0) {
                        const document = {
                            id: it.document[0].id,
                            createdAt: it.document[0].createdAt,
                            editNo: it.document[0].editNo
                        }
                        if (fs.existsSync(path.join(process.cwd(), `/frontend/assets/documents/${it.document[0].fileName}`))) {
                            const docContentBase64 = fs.readFileSync(path.join(process.cwd(), `/frontend/assets/documents/${it.document[0].fileName}`), { encoding: 'base64' });
                            document["fileData"] = docContentBase64
                        } else {
                            document["fileData"] = ""
                        }

                        item["document"] = document
                    }


                    registerData.push(item)
                }

                const result = {
                    data: registerData,
                    user: register[0].user
                }

                return result;

            }

            const result = {
                data: registerData,
                user: {}
            }

            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async toBase64(data: string): Promise<any> {
        return Buffer.from(data).toString('base64');
    }

    async checkNumber(Number) {
        var decimal = false;
        Number = Number.toString();
        Number = Number.replace(/ |,|บาท|฿/gi, '');
        for (var i = 0; i < Number.length; i++) {
            if (Number[i] == '.') {
                decimal = true;
            }
        }
        if (decimal == false) {
            Number = Number + '.00';
        }
        return Number
    }

    async arabicNumberToText(num): Promise<any> {
        var Number = await this.checkNumber(num);
        var NumberArray = new Array("ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ");
        var DigitArray = new Array("", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน");
        var BahtText = "";
        var DecimalLen;

        if (isNaN(Number)) {
            return "ข้อมูลนำเข้าไม่ถูกต้อง";
        } else {
            if ((Number - 0) > 9999999.9999) {
                return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
            } else {
                Number = Number.split(".");
                if (Number[1].length > 0) {
                    Number[1] = Number[1].substring(0, 2);
                }
                var NumberLen = Number[0].length - 0;
                for (var i = 0; i < NumberLen; i++) {
                    var tmp = Number[0].substring(i, i + 1) - 0;
                    if (tmp != 0) {
                        if ((i == (NumberLen - 1)) && (tmp == 1)) {
                            BahtText += "เอ็ด";
                        } else
                            if ((i == (NumberLen - 2)) && (tmp == 2)) {
                                BahtText += "ยี่";
                            } else
                                if ((i == (NumberLen - 2)) && (tmp == 1)) {
                                    BahtText += "";
                                } else {
                                    BahtText += NumberArray[tmp];
                                }
                        BahtText += DigitArray[NumberLen - i - 1];
                    }
                }
                BahtText += "บาท";
                if ((Number[1] == "0") || (Number[1] == "00")) {
                    BahtText += "ถ้วน";
                } else {
                    DecimalLen = Number[1].length - 0;
                    for (var i = 0; i < DecimalLen; i++) {
                        var tmp = Number[1].substring(i, i + 1) - 0;
                        if (tmp != 0) {
                            if ((i == (DecimalLen - 1)) && (tmp == 1)) {
                                BahtText += "เอ็ด";
                            } else
                                if ((i == (DecimalLen - 2)) && (tmp == 2)) {
                                    BahtText += "ยี่";
                                } else
                                    if ((i == (DecimalLen - 2)) && (tmp == 1)) {
                                        BahtText += "";
                                    } else {
                                        BahtText += NumberArray[tmp];
                                    }
                            BahtText += DigitArray[DecimalLen - i - 1];
                        }
                    }
                    BahtText += "สตางค์";
                }
                return BahtText;
            }
        }
    }
}
