import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Company } from 'src/entities/company.entity';
import { CompanyImage } from 'src/entities/company.image.entity';
import { Events } from 'src/entities/event.entity';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Company, Events, CompanyImage]),
        forwardRef(() => UserModule)
    ],
    exports: [TypeOrmModule],
    providers: [CompanyService, UserService],
    controllers: [CompanyController]
})
export class CompanyModule {}
