import { Module } from '@nestjs/common';
import { DietController } from './diet.controller';

@Module({
  controllers: [DietController]
})
export class DietModule {}
