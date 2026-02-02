import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../common/entities/role.entity';
import { Permission } from '../common/entities/permission.entity';
import { Staff } from '../common/entities/staff.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
    @InjectRepository(Permission) private readonly permRepo: Repository<Permission>,
    @InjectRepository(Staff) private readonly staffRepo: Repository<Staff>
  ) {}

  async getRoles() {
    return this.roleRepo.find({ relations: ['permissions'] });
  }

  async createRole(name: string, description: string) {
    const role = this.roleRepo.create({ name, description });
    return this.roleRepo.save(role);
  }

  async assignRole(staffId: string, roleId: string) {
    const staff = await this.staffRepo.findOne({ where: { id: staffId }, relations: ['roles'] });
    if (!staff) throw new NotFoundException('Staff not found');
    const role = await this.roleRepo.findOne({ where: { id: roleId } });
    if (!role) throw new NotFoundException('Role not found');
    staff.roles = Array.from(new Set([...(staff.roles || []), role]));
    return this.staffRepo.save(staff);
  }

  async getPermissions() {
    return this.permRepo.find();
  }
}
