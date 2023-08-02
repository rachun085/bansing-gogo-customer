import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetPasswordToken } from 'src/entities/reset.password.token.entity';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([Role, User, ResetPasswordToken])
  ],
  exports: [TypeOrmModule],
  providers: [RoleService, UserService],
  controllers: [RoleController]
})
export class RoleModule {}
