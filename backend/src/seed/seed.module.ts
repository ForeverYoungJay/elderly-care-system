import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { Role } from '../common/entities/role.entity';
import { Permission } from '../common/entities/permission.entity';
import { Staff } from '../common/entities/staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission, Staff])],
  providers: [SeedService]
})
export class SeedModule {}
