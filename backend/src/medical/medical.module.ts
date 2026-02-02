import { Module } from '@nestjs/common';
import { MedicalController } from './medical.controller';

@Module({
  controllers: [MedicalController]
})
export class MedicalModule {}
