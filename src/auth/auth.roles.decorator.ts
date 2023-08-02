import { SetMetadata, applyDecorators, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';

export const Roles = (...roles: string[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseInterceptors(ClassSerializerInterceptor)
  );
}
