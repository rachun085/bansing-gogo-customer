import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { User } from 'src/entities/user.entity';
import { Users } from 'src/user/users.decorator';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService){}

    @UseGuards(RolesGuard)
    @Roles('ROLE_ADMIN','ROLE_SUP')
    @Get('all')
    async all(@Users() user: User)  {
        console.log(`GET all roles`);
        return  await this.roleService.findAll(user);
    }
}
