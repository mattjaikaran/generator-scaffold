import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class JwtUtilService {
  constructor(private readonly jwtService: JwtService) {}

  signJwt(user: User): string {
    return `Bearer ${this.jwtService.sign({
      sub: user.id,
      email: user.email,
    })}`;
  }
}
