import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller('residents')
export class ResidentController {
  constructor(private readonly coreService: CoreService) {}

  @Get()
  list() {
    return this.coreService.listResidents();
  }

  @Post()
  create(@Body() body: any) {
    return this.coreService.createResident(body);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.coreService.getResident(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.coreService.updateResident(id, body);
  }

  @Post(':id/assign-bed')
  assignBed(@Param('id') id: string, @Body() body: { bedId: string }) {
    return this.coreService.assignBed(id, body.bedId);
  }

  @Post(':id/discharge')
  discharge(@Param('id') id: string) {
    return this.coreService.dischargeResident(id);
  }
}
