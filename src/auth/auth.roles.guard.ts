import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Header } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor( private reflector: Reflector, private usersService: UserService) {
  }
  
  protected async getContextUser(context: ExecutionContext): Promise<User> {
    const request = context.switchToHttp().getRequest();
    // const authorizationHeader = request.headers.authorization;
    return request.user;
  }

  protected async getUserRoles(context: ExecutionContext): Promise<string[]> {
    const contextUser = await this.getContextUser(context);

    if (!contextUser) {
      throw new UnauthorizedException();
    }
    
    const dbUser = await this.usersService.get(contextUser.id); // for a case of not clearing session but user is removed from DB
    if(!dbUser) {
      throw new UnauthorizedException();
    }
    
    const roles : string[] = contextUser.roles.map(role => {
      return role.name
    })
    return roles;
  }

  protected async authorized(context: ExecutionContext, allowedRoles: string[], userRoles: string[]): Promise<boolean> {
    const hasRoles = userRoles.some((val) => allowedRoles.indexOf(val) !== -1);  
    return hasRoles;
  }
  
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const userRoles = await this.getUserRoles(context);
    return await this.authorized(context, roles, userRoles);
  }
}
