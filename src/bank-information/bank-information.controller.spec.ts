import { Test, TestingModule } from '@nestjs/testing';
import { BankInformationController } from './bank-information.controller';

describe('BankInformationController', () => {
  let controller: BankInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankInformationController],
    }).compile();

    controller = module.get<BankInformationController>(BankInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
