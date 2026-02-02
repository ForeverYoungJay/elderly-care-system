import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('nursing')
export class NursingController {
  @Get('service-items')
  listServiceItems() {
    return [];
  }

  @Post('service-items')
  createServiceItem() {
    return { success: true };
  }

  @Get('tasks')
  listTasks() {
    return [];
  }

  @Post('tasks')
  createTask() {
    return { success: true };
  }

  @Patch('tasks/:id/complete')
  completeTask() {
    return { success: true };
  }

  @Post('records')
  createRecord() {
    return { success: true };
  }

  @Get('attendance')
  listAttendance() {
    return [];
  }

  @Post('attendance/check-in')
  checkIn() {
    return { success: true };
  }

  @Post('attendance/check-out')
  checkOut() {
    return { success: true };
  }

  @Post('leave-requests')
  createLeave() {
    return { success: true };
  }

  @Patch('leave-requests/:id/approve')
  approveLeave() {
    return { success: true };
  }

  @Post('audits')
  createAudit() {
    return { success: true };
  }
}
