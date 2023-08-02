import { CompanyImage } from "src/entities/company.image.entity";
import { Events } from "src/entities/event.entity";

export class CreateCompanyDto {
    name: string;
    urlName: string;
    description: string;
    event?: Events[];
}
