import { Controller, Get, Req, Res } from '@nestjs/common';
import { BankInformationService } from './bank-information.service';

@Controller('bank-information')
export class BankInformationController {
    constructor(private bankInformationService: BankInformationService) {}

    @Get('')
    async getRegisterById(@Req() req, @Res() res): Promise<any> {
        console.log(`get bank information [GET] /bank-information`);
        const bankInformation = await this.bankInformationService.get();
        res.send(bankInformation);
        return bankInformation;
    }
}
