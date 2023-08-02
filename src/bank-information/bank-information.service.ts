import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankInformation } from 'src/entities/bank.information.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankInformationService {
    constructor(
        @InjectRepository(BankInformation) private bankInformationRepository: Repository<BankInformation>
    ) {}

    async get(): Promise<BankInformation[]> {
        try {
            const bankInformation = await this.bankInformationRepository.find({
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
}
