import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('roles')
  async getRoles() {
    return this.adminService.getRoles();
  }

  @Post('roles')
  async createRole(@Body() body: { name: string; description?: string }) {
    return this.adminService.createRole(body.name, body.description || '');
  }

  @Post('roles/assign')
  async assignRole(@Body() body: { staffId: string; roleId: string }) {
    return this.adminService.assignRole(body.staffId, body.roleId);
  }

  @Get('permissions')
  async getPermissions() {
    return this.adminService.getPermissions();
  }
}
