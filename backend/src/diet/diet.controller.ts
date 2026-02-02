import { Controller, Get, Post } from '@nestjs/common';

@Controller('diet')
export class DietController {
  @Get('menus')
  listMenus() {
    return [];
  }

  @Post('menus')
  createMenu() {
    return { success: true };
  }

  @Get('special-orders')
  listSpecialOrders() {
    return [];
  }

  @Post('special-orders')
  createSpecialOrder() {
    return { success: true };
  }

  @Post('dispatch')
  dispatch() {
    return { success: true };
  }
}
