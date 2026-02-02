import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Staff } from '../common/entities/staff.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Staff) private readonly staffRepo: Repository<Staff>,
    private readonly jwtService: JwtService
  ) {}

  async login(username: string, password: string) {
    const staff = await this.staffRepo.findOne({ where: { username } });
    if (!staff) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const ok = await bcrypt.compare(password, staff.passwordHash);
    if (!ok) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: staff.id, username: staff.username, roles: staff.roles?.map((r) => r.name) || [] };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      refreshToken: '',
      user: {
        id: staff.id,
        name: staff.name,
        roles: payload.roles
      }
    };
  }
}
