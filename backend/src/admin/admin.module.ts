import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Role } from '../common/entities/role.entity';
import { Permission } from '../common/entities/permission.entity';
import { Staff } from '../common/entities/staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission, Staff])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
