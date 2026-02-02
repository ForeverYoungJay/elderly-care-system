import { Controller, Get, Post } from '@nestjs/common';

@Controller('medical')
export class MedicalController {
  @Get('health-records')
  listHealthRecords() {
    return [];
  }

  @Post('health-records')
  createHealthRecord() {
    return { success: true };
  }

  @Get('evaluations')
  listEvaluations() {
    return [];
  }

  @Post('evaluations')
  createEvaluation() {
    return { success: true };
  }

  @Get('vitals')
  listVitals() {
    return [];
  }

  @Post('vitals')
  createVitals() {
    return { success: true };
  }

  @Get('chronic-plans')
  listChronicPlans() {
    return [];
  }

  @Post('chronic-plans')
  createChronicPlan() {
    return { success: true };
  }

  @Get('monthly-checks')
  listMonthlyChecks() {
    return [];
  }

  @Post('monthly-checks')
  createMonthlyCheck() {
    return { success: true };
  }

  @Post('semiannual-reports/generate')
  generateSemiAnnual() {
    return { success: true };
  }
}
