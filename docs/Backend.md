# Backend Specification

## Tech
- NestJS + TypeORM + PostgreSQL
- Validation: class-validator + class-transformer
- Auth: JWT + refresh tokens
- Queue: BullMQ or RabbitMQ for async jobs

## Module Structure
- auth
- admin (roles, permissions)
- core (org, staff, resident, bed)
- safety
- medical
- diet
- nursing
- external
- report
- audit

## Cross-cutting Concerns
- Guards: AuthGuard, RolesGuard
- Interceptors: Logging, ResponseTransform
- Pipes: ValidationPipe with whitelist
- Filters: HttpExceptionFilter

## Conventions
- DTOs for input validation
- Services are transaction-aware
- Soft delete for safety/medical records
- Audit log on all create/update/delete

## Data Access
- Repository pattern via TypeORM
- Migrations in production; synchronize for dev only

## Seed Data
- Default roles and permissions
- Admin user
- Sample org structure

## Example Service Rules
- Resident discharge sets status=DISCHARGED and closes open tasks
- Safety incident close requires work order verified
- Medical reports locked after signed by doctor

## Error Handling
- Domain errors mapped to 4xx
- Idempotent requests for external reporting
