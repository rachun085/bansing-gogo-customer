import { Test, TestingModule } from '@nestjs/testing';
import { RegisterPaymentService } from './register-payment.service';

describe('RegisterPaymentService', () => {
  let service: RegisterPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterPaymentService],
    }).compile();

    service = module.get<RegisterPaymentService>(RegisterPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
