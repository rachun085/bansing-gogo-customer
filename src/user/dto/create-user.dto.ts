import { Role } from "src/entities/role.entity";
import { User } from "src/entities/user.entity";

export class CreateUserDto {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;    
    status: User.Status;
    role?: string;
}
