import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from 'src/entities/register.entity';
import { RegisterPayment } from 'src/entities/register.payment.entity';
import { Repository } from 'typeorm';
import { CreateRegisterPaymentDto } from './dto/create.register.payment.dto';
import { UpdateRegisterPaymentDto } from './dto/update.register.payment.dto';
var path = require('path')
const fs = require('fs');

@Injectable()
export class RegisterPaymentService {
    constructor(
        @InjectRepository(RegisterPayment) private registerPaymentRepository: Repository<RegisterPayment>,
        @InjectRepository(Register) private registerRepository: Repository<Register>
    ) { }


    async getByRegisterId(registerId: number): Promise<RegisterPayment> {
        try {
            const register = await this.registerRepository.findOneBy({ id: registerId });
            if (!register) {
                throw new HttpException('Register not found', HttpStatus.NOT_FOUND);
            }
            const registerPayment = await this.registerPaymentRepository.findOne({
                relations: {
                    register: true
                },
                where: {
                    register: {
                        id: register.id
                    }
                },

            });

            return registerPayment;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createRegisterPayment(dto: CreateRegisterPaymentDto, file: Express.Multer.File): Promise<RegisterPayment> {
        const register = await this.registerRepository.findOneBy({ id: dto.registerId });
        if (!register) {
            throw new HttpException('Register not found', HttpStatus.NOT_FOUND);
        }
        console.log("file : ", file);
        
        const registerPayment = this.registerPaymentRepository.create({
            register: register,
            bankId: dto.bankId,
            price: dto.price,
            status: RegisterPayment.Status.WaitForConfirm,
            slipSrc: `${file.destination}/resized/${file.filename}`,
            paymentDate: dto.paymentDate
        })

        const saved = await this.registerPaymentRepository.save(registerPayment);
        if(saved){
            fs.stat(file.path, (err, stats) => {
                console.log("stats file to remove: ", stats);
             
                if (err) {
                    return console.error(err);
                }
             
                fs.unlink(file.path,(err) => {
                     if(err) return console.log(err);
                     console.log('old img file deleted successfully');
                });  
             });
        }
        
        return saved;

    }

    async updateRegisterPayment(dto: UpdateRegisterPaymentDto): Promise<RegisterPayment> {
        console.log("body ==> ", dto);
        
        const registerPayment = await this.registerPaymentRepository.findOne({
            where: {
                id: dto.registerPaymentId 
            },
            relations:{
                register: {
                    event: true,
                    user: true
                }
            }
        });
        if (!registerPayment) {
            throw new HttpException('Register not found', HttpStatus.NOT_FOUND);
        }

        registerPayment.status = dto.status == "Confirmed" ? RegisterPayment.Status.Confirmed : dto.status == "WaitForConfirm" ? RegisterPayment.Status.WaitForConfirm : RegisterPayment.Status.WaitForConfirm
        registerPayment.register.status = dto.status == "Confirmed" ? Register.Status.Complete : dto.status == "WaitForConfirm" ? Register.Status.Uncomplete : Register.Status.Uncomplete

        const saved = await this.registerPaymentRepository.save(registerPayment);
        const savedRegister = await this.registerRepository.save(registerPayment.register);
        return saved;

    }
}
