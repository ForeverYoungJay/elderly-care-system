import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('security')
export class SecurityController {
  @Get('plans')
  listPlans() {
    return [];
  }

  @Post('plans')
  createPlan() {
    return { success: true };
  }

  @Post('plans/:id/generate-tasks')
  generateTasks() {
    return { success: true };
  }

  @Get('tasks')
  listTasks() {
    return [];
  }

  @Patch('tasks/:id/complete')
  completeTask() {
    return { success: true };
  }

  @Post('tasks/:id/incidents')
  createIncident() {
    return { success: true };
  }

  @Get('incidents')
  listIncidents() {
    return [];
  }

  @Patch('incidents/:id/close')
  closeIncident() {
    return { success: true };
  }

  @Post('incidents/:id/work-orders')
  createWorkOrder() {
    return { success: true };
  }

  @Patch('work-orders/:id/close')
  closeWorkOrder() {
    return { success: true };
  }
}
