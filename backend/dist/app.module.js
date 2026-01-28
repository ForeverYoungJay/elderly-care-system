"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const admin_module_1 = require("./admin/admin.module");
const security_module_1 = require("./security/security.module");
const medical_module_1 = require("./medical/medical.module");
const diet_module_1 = require("./diet/diet.module");
const nursing_module_1 = require("./nursing/nursing.module");
const external_module_1 = require("./external/external.module");
const report_module_1 = require("./report/report.module");
const seed_module_1 = require("./seed/seed.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: +(process.env.DB_PORT || 5432),
                username: process.env.DB_USER || 'postgres',
                password: process.env.DB_PASS || 'postgres',
                database: process.env.DB_NAME || 'elderly_care',
                autoLoadEntities: true,
                synchronize: true
            }),
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            security_module_1.SecurityModule,
            medical_module_1.MedicalModule,
            diet_module_1.DietModule,
            nursing_module_1.NursingModule,
            external_module_1.ExternalModule,
            report_module_1.ReportModule,
            seed_module_1.SeedModule
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map