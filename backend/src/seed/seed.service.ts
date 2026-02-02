import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../common/entities/role.entity';
import { Permission } from '../common/entities/permission.entity';
import { Staff } from '../common/entities/staff.entity';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
    @InjectRepository(Permission) private readonly permRepo: Repository<Permission>,
    @InjectRepository(Staff) private readonly staffRepo: Repository<Staff>
  ) {}

  async onModuleInit() {
    await this.seedRolesPermissions();
    await this.seedAdmin();
  }

  private async seedRolesPermissions() {
    const roleNames = [
      { name: 'ADMIN', description: 'System administrator' },
      { name: 'DIRECTOR', description: 'Facility director' },
      { name: 'NURSE_LEAD', description: 'Nursing lead' },
      { name: 'NURSE', description: 'Nurse' },
      { name: 'DOCTOR', description: 'Doctor' },
      { name: 'DIETITIAN', description: 'Dietitian' },
      { name: 'SAFETY_OFFICER', description: 'Safety officer' },
      { name: 'EXTERNAL_REPORTER', description: 'External reporter' }
    ];

    for (const r of roleNames) {
      const exists = await this.roleRepo.findOne({ where: { name: r.name } });
      if (!exists) {
        await this.roleRepo.save(this.roleRepo.create(r));
      }
    }

    const perms = [
      'ORG_READ', 'ORG_WRITE',
      'STAFF_READ', 'STAFF_WRITE',
      'RESIDENT_READ', 'RESIDENT_WRITE',
      'BED_READ', 'BED_WRITE',
      'SAFETY_READ', 'SAFETY_WRITE',
      'MEDICAL_READ', 'MEDICAL_WRITE',
      'DIET_READ', 'DIET_WRITE',
      'NURSING_READ', 'NURSING_WRITE',
      'REPORT_READ', 'REPORT_EXPORT',
      'EXTERNAL_REPORT_WRITE',
      'ADMIN_ROLE_WRITE'
    ];

    for (const code of perms) {
      const exists = await this.permRepo.findOne({ where: { code } });
      if (!exists) {
        await this.permRepo.save(this.permRepo.create({ code, description: code }));
      }
    }
  }

  private async seedAdmin() {
    const admin = await this.staffRepo.findOne({ where: { username: 'admin' }, relations: ['roles'] });
    if (admin) return;

    const adminRole = await this.roleRepo.findOne({ where: { name: 'ADMIN' } });
    const passwordHash = await bcrypt.hash('admin123', 10);

    const staff = this.staffRepo.create({
      username: 'admin',
      name: 'Administrator',
      passwordHash,
      roles: adminRole ? [adminRole] : []
    });

    await this.staffRepo.save(staff);
  }
}
