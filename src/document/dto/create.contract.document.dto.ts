import { Events } from "src/entities/event.entity";
import { Register } from "src/entities/register.entity";
import { User } from "src/entities/user.entity";

export class CreateContractDocumentDto {
    user?: User;
    event?: Events;
    register?: Register;
}