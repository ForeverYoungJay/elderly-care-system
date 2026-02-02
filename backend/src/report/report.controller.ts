import { Controller, Get, Post } from '@nestjs/common';

@Controller('reports')
export class ReportController {
  @Get('overview')
  overview() {
    return { safety: 0, nursing: 0, medical: 0 };
  }

  @Get('safety')
  safety() {
    return [];
  }

  @Get('medical')
  medical() {
    return [];
  }

  @Get('nursing')
  nursing() {
    return [];
  }

  @Post('exports')
  export() {
    return { success: true };
  }
}
