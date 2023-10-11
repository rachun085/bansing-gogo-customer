import { User } from "src/entities/user.entity";

export class CreateUserDto {
    titleName: User.TitleName;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    addressNo: string;
    soi: string;
    moo: string;
    street: string;
    tumbon: string;
    amphoe: string;
    province: string;
    zipCode: string;  
    cardId: string;
    status: User.Status;
    role?: string;
}
