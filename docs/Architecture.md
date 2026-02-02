# Architecture

## 1. System Context
- Web client (admin portal, staff console)
- Mobile web (caregiver tasks and check-in)
- Backend API (REST)
- PostgreSQL primary database
- Object storage for documents (reports, scanned forms)
- Message queue for async jobs (external reporting, notifications)
- Optional device ingestion API (vitals, alarms)

## 2. High-Level Components
1) Identity and Access
   - Auth (JWT, refresh tokens)
   - RBAC with roles and permissions

2) Core Domain
   - Organization (multi-tenant)
   - Resident and Bed management
   - Staff and shift scheduling

3) Service Domains
   - Safety services
   - Medical services
   - Diet services
   - Nursing services

4) Administration
   - Role management
   - Dictionaries and master data
   - Audit logs

5) External Integration
   - Reporting to agencies
   - Receipts and retry

6) Analytics
   - Operational dashboards
   - Export center

## 3. Logical Architecture (module map)
- core: organization, resident, staff, bed, dictionary
- auth: login, password reset, MFA hooks
- rbac: roles, permissions, assignments
- safety: plans, tasks, incidents, work orders
- medical: health record, evaluations, vitals, chronic management
- diet: menus, meal plans, special diets, dispatch
- nursing: service items, service records, attendance, leave, audits
- external: report jobs, payloads, receipts
- report: KPIs, charts, exports

## 4. Data Flow (example)
Safety inspection
- plan -> task generation -> execution record -> incident -> work order -> verification -> closed
- each step writes to audit log and triggers notifications

## 5. Deployment Architecture
- Backend: NestJS API service, stateless, 2+ replicas
- DB: Postgres with daily backups and PITR
- Queue: Redis or RabbitMQ (for async external jobs)
- Object storage: S3 compatible
- Observability: metrics (Prometheus), logs (ELK/Cloud), tracing (OpenTelemetry)

## 6. Environment Variables
- DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME
- JWT_SECRET, JWT_EXPIRY, REFRESH_TOKEN_EXPIRY
- STORAGE_ENDPOINT, STORAGE_KEY, STORAGE_SECRET, STORAGE_BUCKET
- QUEUE_URL
- EXTERNAL_REPORT_ENDPOINT, EXTERNAL_REPORT_API_KEY

## 7. Key Design Decisions
- REST API, JSON
- Multi-tenant by orgId column
- Soft delete for critical records
- Event outbox for external reporting

## 8. Non-Functional Targets (summary)
- 99.5% availability
- p95 API latency < 300ms for core queries
- Audit logs for all sensitive operations
