export class UpdateEventDto {
    eventId: number;
    name: string;
    eventDate: Date;
    targetPrice: number;
    ownership: number;
    sharePercentage: number;
    pricePerOwnership: number;
    shortDescription: string;    
    description: string;
    urlName: string;
    status: string;
}
