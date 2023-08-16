export class OrderSuccessDto {
  email: string;
  registId: number;
  amountOwnership: number;
  totalPrice: number;
  fullName: string;
  registDate: string;
  bankName?: string;
  accountNumber?: string;
  accountName?: string;
  eventName: string;
}
 
export default OrderSuccessDto;