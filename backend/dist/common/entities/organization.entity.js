"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const resident_entity_1 = require("./resident.entity");
const staff_entity_1 = require("./staff.entity");
let Organization = class Organization extends base_entity_1.BaseEntity {
};
exports.Organization = Organization;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Organization.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", Object)
], Organization.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resident_entity_1.Resident, (r) => r.organization),
    __metadata("design:type", Array)
], Organization.prototype, "residents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => staff_entity_1.Staff, (s) => s.organization),
    __metadata("design:type", Array)
], Organization.prototype, "staff", void 0);
exports.Organization = Organization = __decorate([
    (0, typeorm_1.Entity)('organizations')
], Organization);
//# sourceMappingURL=organization.entity.js.map