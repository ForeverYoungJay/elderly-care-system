import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '../common/entities/organization.entity';
import { Resident } from '../common/entities/resident.entity';
import { Staff } from '../common/entities/staff.entity';
import { Bed } from '../common/entities/bed.entity';
import { OrgController } from './org.controller';
import { ResidentController } from './resident.controller';
import { StaffController } from './staff.controller';
import { BedController } from './bed.controller';
import { CoreService } from './core.service';

@Module({
  imports: [TypeOrmModule.forFeature([Organization, Resident, Staff, Bed])],
  controllers: [OrgController, ResidentController, StaffController, BedController],
  providers: [CoreService]
})
export class CoreModule {}
