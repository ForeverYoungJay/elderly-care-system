import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { SecurityModule } from './security/security.module';
import { MedicalModule } from './medical/medical.module';
import { DietModule } from './diet/diet.module';
import { NursingModule } from './nursing/nursing.module';
import { ExternalModule } from './external/external.module';
import { ReportModule } from './report/report.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'elderly_care',
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule,
    AdminModule,
    CoreModule,
    SecurityModule,
    MedicalModule,
    DietModule,
    NursingModule,
    ExternalModule,
    ReportModule,
    SeedModule
  ]
})
export class AppModule {}
