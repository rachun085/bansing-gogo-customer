import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private rolesRepository: Repository<Role>
    ) { }

    async findAll(user: User) {
        const roles = await this.rolesRepository.find();
        return { roles: roles };
    }

}
