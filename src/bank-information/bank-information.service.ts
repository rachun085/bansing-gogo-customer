import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankInformation } from 'src/entities/bank.information.entity';
import { Not, Repository } from 'typeorm';
import CreateBankInformationDto from './dto/create.bank.information.dto';
import UpdateBankInformationDto from './dto/update.bank.information.dto';

@Injectable()
export class BankInformationService {
    constructor(
        @InjectRepository(BankInformation) private bankInformationRepository: Repository<BankInformation>
    ) {}

    async getAllForCustomer(): Promise<BankInformation> {
        try {
            const bankInformation = await this.bankInformationRepository.findOne({
                where: {
                    status: BankInformation.Status.Enabled
                }
            });

            return bankInformation;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getAll(): Promise<BankInformation[]> {
        try {
            const bankInformation = await this.bankInformationRepository.find();

            if(!bankInformation){
                throw new HttpException('Bank not found', HttpStatus.NOT_FOUND);
            }

            return bankInformation;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getById(id: number): Promise<BankInformation> {
        try {
            const bankInformation = await this.bankInformationRepository.findOneBy({id: id});

            if(!bankInformation){
                throw new HttpException('Bank not found', HttpStatus.NOT_FOUND);
            }

            return bankInformation;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async create(dto: CreateBankInformationDto): Promise<BankInformation>{
        const bank = await this.bankInformationRepository.create({
            accountName: dto.accountName,
            bankName: dto.bankName,
            accountNo: dto.accountNo,
            accountType: "1",
            status: dto.status == "ENABLED" ? BankInformation.Status.Enabled : dto.status == "DISABLED" ? BankInformation.Status.Disabled : BankInformation.Status.Enabled
        });

        const saved = await this.bankInformationRepository.save(bank);
        if(saved.status == BankInformation.Status.Enabled){
            const anotherBank =  await this.bankInformationRepository.findBy({
                id: Not(saved.id)
            });
            
            if(anotherBank){
                for (const it of anotherBank) {
                    it.status = BankInformation.Status.Disabled
                }

                await this.bankInformationRepository.save(anotherBank);
                console.log("set another bank => DISABLED");
            }
        }
        return saved;
    }
    
    async update(dto: UpdateBankInformationDto): Promise<BankInformation>{
        const found = await this.bankInformationRepository.findOneBy({id: dto.bankId});
        if(!found){
            throw new HttpException('Bank not found', HttpStatus.NOT_FOUND);
        }

        found.accountName = dto.accountName;
        found.bankName = dto.bankName;
        found.accountNo = dto.accountNo;
        found.status = dto.status == "ENABLED" ? BankInformation.Status.Enabled : dto.status == "DISABLED" ? BankInformation.Status.Disabled : BankInformation.Status.Enabled;

        const saved = await this.bankInformationRepository.save(found);
        if(saved.status == BankInformation.Status.Enabled){
            const anotherBank =  await this.bankInformationRepository.findBy({
                id: Not(saved.id)
            });
            
            if(anotherBank){
                for (const it of anotherBank) {
                    it.status = BankInformation.Status.Disabled
                }

                await this.bankInformationRepository.save(anotherBank);
                console.log("set another bank => DISABLED");
            }
        }
        return saved;
    }

    async delete(id: number): Promise<BankInformation> {
        const bank = await this.bankInformationRepository.findOne({
            where: {
                id: id
            }
        });
        if (!bank) {
            throw new HttpException('Bank not found', HttpStatus.NOT_FOUND);
        }

        return await this.bankInformationRepository.remove(bank);
    }
}
