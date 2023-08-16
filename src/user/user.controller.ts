import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/auth.roles.decorator';
import { RolesGuard } from 'src/auth/auth.roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { User } from 'src/entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UserService } from './user.service';
import { Users } from './users.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @UseGuards(JwtAuthGuard)
  @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
  @Get(':id')
  async getUserById(@Param() param): Promise<any> {
    try {
      console.log(`fetching data from [GET] /user/${param.id}`);
      const user = await this.userService.get(param.id);
      return user;
    } catch (error) {
      const result = {
        status: "error",
        data: "User not found"
      }
      return result;
    }
    
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ROLE_SUP', 'ROLE_ADMIN')
  @Get('get/all')
  async getUserAll(@Param() param): Promise<any> {
    console.log(`fetching data from [GET] /user/all`);
    const users = await this.userService.findAll();
    return users;
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
  @Put('profile')
  async updateUserProfile(@Body() dto: UpdateProfileDto, @Res() res, @Req() req): Promise<any> {
    try {
      console.log(`updating profile with [PUT] /user/profile`);
      const user = await this.userService.updateProfile(dto);
      if(user){
        const response = {
          status: "success",
          data: user
        }
        res.send(response);
        return response;
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        message: error.message,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
      // const response = {
      //   status: "error",
      //   statusCode: error.status,
      //   data: error.message
      // }
      // res.send(response);
      // return response;
    }

  }


  @HttpCode(204)
  @Post('reset-password')
  async requestResetPassword(@Body('email') email, @Req() req): Promise<void> {
    await this.userService.requestResetPassword(email);
    return;
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Roles('ROLE_SUP', 'ROLE_ADMIN', 'ROLE_CUSTOMER')
  @Post('validate-contract-password')
  async validateContractPassword(@Body() dto, @Res() res, @Req() req): Promise<any> {
    try {
      console.log(`validate contract password [POST] /user/validate-contract-password`);
      const user = await this.userService.validateContractPassword(dto.password, dto.userId);
      if(user){
        res.send(user);
        return user;
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        message: error.message,
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }

  }

  


}
