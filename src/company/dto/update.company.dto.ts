import { CompanyImage } from "src/entities/company.image.entity";
import { Events } from "src/entities/event.entity";

export class UpdateCompanyDto {
    id: number;
    name: string;
    urlName: string;
    events?: Events[];
    description: string;
}
