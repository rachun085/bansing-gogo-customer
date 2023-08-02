import { Role } from "src/entities/role.entity";
import { User } from "src/entities/user.entity";

export class UpdateProfileDto {
    id: number;
    currentPassword?: string;
    newPassword?: string;
    confirmNewPassword?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;    
    role?: Role.Name;
    status?: User.Status;
    cardId: string;
}
