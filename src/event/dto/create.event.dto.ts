import { EventImage } from "src/entities/event.image.entity";

export class CreateEventDto {
    companyId: number;
    name: string;
    eventDate: Date;
    targetPrice: number;
    ownership: number;
    pricePerOwnership: number;
    shortDescription: string;    
    description: string;
    urlName: string;
    
}
