import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller('orgs')
export class OrgController {
  constructor(private readonly coreService: CoreService) {}

  @Get()
  list() {
    return this.coreService.listOrgs();
  }

  @Post()
  create(@Body() body: any) {
    return this.coreService.createOrg(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.coreService.updateOrg(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coreService.deleteOrg(id);
  }
}
