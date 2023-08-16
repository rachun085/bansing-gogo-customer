import { forwardRef, Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerImage } from 'src/entities/banner.image.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([BannerImage]),
    forwardRef(() => UserModule)
  ],
  exports: [TypeOrmModule],
  providers: [SettingService, UserService],
  controllers: [SettingController]
})
export class SettingModule {}
