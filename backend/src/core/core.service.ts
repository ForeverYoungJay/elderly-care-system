import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from '../common/entities/organization.entity';
import { Resident } from '../common/entities/resident.entity';
import { Staff } from '../common/entities/staff.entity';
import { Bed, BedStatus } from '../common/entities/bed.entity';

@Injectable()
export class CoreService {
  constructor(
    @InjectRepository(Organization) private readonly orgRepo: Repository<Organization>,
    @InjectRepository(Resident) private readonly residentRepo: Repository<Resident>,
    @InjectRepository(Staff) private readonly staffRepo: Repository<Staff>,
    @InjectRepository(Bed) private readonly bedRepo: Repository<Bed>
  ) {}

  listOrgs() {
    return this.orgRepo.find();
  }

  createOrg(data: Partial<Organization>) {
    const org = this.orgRepo.create(data);
    return this.orgRepo.save(org);
  }

  async updateOrg(id: string, data: Partial<Organization>) {
    const org = await this.orgRepo.findOne({ where: { id } });
    if (!org) throw new NotFoundException('Organization not found');
    Object.assign(org, data);
    return this.orgRepo.save(org);
  }

  async deleteOrg(id: string) {
    const org = await this.orgRepo.findOne({ where: { id } });
    if (!org) throw new NotFoundException('Organization not found');
    await this.orgRepo.remove(org);
    return { success: true };
  }

  listStaff() {
    return this.staffRepo.find({ relations: ['roles', 'organization'] });
  }

  async createStaff(data: Partial<Staff>) {
    const staff = this.staffRepo.create(data);
    return this.staffRepo.save(staff);
  }

  async updateStaff(id: string, data: Partial<Staff>) {
    const staff = await this.staffRepo.findOne({ where: { id } });
    if (!staff) throw new NotFoundException('Staff not found');
    Object.assign(staff, data);
    return this.staffRepo.save(staff);
  }

  listResidents() {
    return this.residentRepo.find({ relations: ['organization'] });
  }

  async getResident(id: string) {
    const resident = await this.residentRepo.findOne({ where: { id }, relations: ['organization'] });
    if (!resident) throw new NotFoundException('Resident not found');
    return resident;
  }

  async createResident(data: Partial<Resident>) {
    const resident = this.residentRepo.create(data);
    return this.residentRepo.save(resident);
  }

  async updateResident(id: string, data: Partial<Resident>) {
    const resident = await this.residentRepo.findOne({ where: { id } });
    if (!resident) throw new NotFoundException('Resident not found');
    Object.assign(resident, data);
    return this.residentRepo.save(resident);
  }

  async assignBed(residentId: string, bedId: string) {
    const resident = await this.residentRepo.findOne({ where: { id: residentId } });
    if (!resident) throw new NotFoundException('Resident not found');
    const bed = await this.bedRepo.findOne({ where: { id: bedId } });
    if (!bed) throw new NotFoundException('Bed not found');
    bed.status = BedStatus.OCCUPIED;
    resident.bedId = bed.id;
    await this.bedRepo.save(bed);
    return this.residentRepo.save(resident);
  }

  async dischargeResident(residentId: string) {
    const resident = await this.residentRepo.findOne({ where: { id: residentId } });
    if (!resident) throw new NotFoundException('Resident not found');
    resident.bedId = null;
    return this.residentRepo.save(resident);
  }

  listBeds() {
    return this.bedRepo.find();
  }

  createBed(data: Partial<Bed>) {
    const bed = this.bedRepo.create(data);
    return this.bedRepo.save(bed);
  }

  async updateBed(id: string, data: Partial<Bed>) {
    const bed = await this.bedRepo.findOne({ where: { id } });
    if (!bed) throw new NotFoundException('Bed not found');
    Object.assign(bed, data);
    return this.bedRepo.save(bed);
  }
}
