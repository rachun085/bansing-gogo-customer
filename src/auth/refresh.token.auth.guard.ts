import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from "jsonwebtoken";

@Injectable()
export class RefreshTokenGuard extends AuthGuard('jwt-refresh') {
    handleRequest(err, user, info: Error) {
        if(info instanceof jwt.TokenExpiredError) throw new ForbiddenException('Access Denied'); 
        return user;
      }
}