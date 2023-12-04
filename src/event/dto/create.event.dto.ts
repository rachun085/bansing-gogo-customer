import { EventImage } from "src/entities/event.image.entity";

export class CreateEventDto {
    companyName: string;
    name: string;
    eventDate: Date;
    targetPrice: number;
    ownership: number;
    sharePercentage: number;
    pricePerOwnership: number;
    shortDescription: string;    
    description: string;
    urlName: string;
    
}
