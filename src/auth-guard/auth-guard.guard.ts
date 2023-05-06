import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  jwtService: any;
  usersService: any;
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const cookie = request.cookies['jwt'];

      const data = this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = this.usersService.findOne({ id: data['id'] });

      const { password, ...result } = user;

      return true;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
