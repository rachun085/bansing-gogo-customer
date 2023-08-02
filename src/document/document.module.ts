import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document, Documents } from 'src/entities/document.entity';
import { Register } from 'src/entities/register.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Register, Documents]),
        forwardRef(() => UserModule)
    ],
    exports: [TypeOrmModule],
    providers: [DocumentService, UserService],
    controllers: [DocumentController]
})
export class DocumentModule {}
