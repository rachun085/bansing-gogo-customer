import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankInformation } from 'src/entities/bank.information.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { BankInformationController } from './bank-information.controller';
import { BankInformationService } from './bank-information.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BankInformation]),
    forwardRef(() => UserModule)
  ],
  exports: [TypeOrmModule],
  controllers: [BankInformationController],
  providers: [BankInformationService, UserService]
})
export class BankInformationModule {}
