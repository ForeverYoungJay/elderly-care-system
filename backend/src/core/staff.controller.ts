import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller('staff')
export class StaffController {
  constructor(private readonly coreService: CoreService) {}

  @Get()
  list() {
    return this.coreService.listStaff();
  }

  @Post()
  create(@Body() body: any) {
    return this.coreService.createStaff(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.coreService.updateStaff(id, body);
  }

  @Post(':id/reset-password')
  resetPassword(@Param('id') id: string) {
    return { success: true, id };
  }
}
