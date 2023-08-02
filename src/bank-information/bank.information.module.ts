import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankInformation } from 'src/entities/bank.information.entity';
import { BankInformationController } from './bank-information.controller';
import { BankInformationService } from './bank-information.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BankInformation])
  ],
  exports: [TypeOrmModule],
  controllers: [BankInformationController],
  providers: [BankInformationService]
})
export class BankInformationModule {}
