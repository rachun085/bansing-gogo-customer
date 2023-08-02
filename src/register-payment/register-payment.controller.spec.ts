import { Test, TestingModule } from '@nestjs/testing';
import { RegisterPaymentController } from './register-payment.controller';

describe('RegisterPaymentController', () => {
  let controller: RegisterPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterPaymentController],
    }).compile();

    controller = module.get<RegisterPaymentController>(RegisterPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
