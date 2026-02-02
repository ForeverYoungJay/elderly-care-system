import { Controller, Get, Post } from '@nestjs/common';

@Controller('external')
export class ExternalController {
  @Get('report-jobs')
  listJobs() {
    return [];
  }

  @Post('report-jobs')
  createJob() {
    return { success: true };
  }

  @Post('report-jobs/:id/retry')
  retryJob() {
    return { success: true };
  }
}
