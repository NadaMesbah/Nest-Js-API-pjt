import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  //   async signIn(email: string, password: string): Promise<any> {
  //     const user = await this.usersService.findOne(email);
  //     if (!user) {
  //       throw new UnauthorizedException();
  //     }

  //     const isMatch = await bcrypt.compare(password, user.password);
  //     if (!isMatch) {
  //       throw new UnauthorizedException();
  //     }

  //     const { password: _, ...result } = user;
  //     // TODO: Generate a JWT and return it here
  //     // instead of the user object
  //     return result;
}
