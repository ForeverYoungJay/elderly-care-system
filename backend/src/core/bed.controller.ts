import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller('beds')
export class BedController {
  constructor(private readonly coreService: CoreService) {}

  @Get()
  list() {
    return this.coreService.listBeds();
  }

  @Post()
  create(@Body() body: any) {
    return this.coreService.createBed(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.coreService.updateBed(id, body);
  }
}
