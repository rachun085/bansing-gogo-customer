import { Test, TestingModule } from '@nestjs/testing';
import { BankInformationService } from './bank-information.service';

describe('BankInformationService', () => {
  let service: BankInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankInformationService],
    }).compile();

    service = module.get<BankInformationService>(BankInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
