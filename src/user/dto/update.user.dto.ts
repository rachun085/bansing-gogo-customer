import { Role } from "src/entities/role.entity";
import { User } from "src/entities/user.entity";

export class UpdateUserDto {
    id: number;
    refreshToken: string;
}
