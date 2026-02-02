# API Specification

Base URL: `/api`

## Conventions
- Auth: `Authorization: Bearer <token>`
- Pagination: `page`, `pageSize`, `total`
- Errors:
  - 400 VALIDATION_ERROR
  - 401 UNAUTHORIZED
  - 403 FORBIDDEN
  - 404 NOT_FOUND
  - 409 CONFLICT
  - 500 INTERNAL_ERROR

## Auth
### POST /auth/login
Request:
```json
{ "username": "admin", "password": "admin123" }
```
Response:
```json
{ "accessToken": "...", "refreshToken": "...", "user": { "id": "", "name": "", "roles": [] } }
```

### POST /auth/refresh
### POST /auth/logout

## Admin/RBAC
### GET /admin/roles
### POST /admin/roles
### POST /admin/roles/assign
### GET /admin/permissions

## Organization
### GET /orgs
### POST /orgs
### PATCH /orgs/:id
### DELETE /orgs/:id

## Staff
### GET /staff
### POST /staff
### PATCH /staff/:id
### POST /staff/:id/reset-password

## Residents
### GET /residents
Query: name, orgId, status
### POST /residents
### GET /residents/:id
### PATCH /residents/:id
### POST /residents/:id/assign-bed
### POST /residents/:id/discharge

## Beds
### GET /beds
### POST /beds
### PATCH /beds/:id

## Safety
### GET /security/plans
### POST /security/plans
### POST /security/plans/:id/generate-tasks
### GET /security/tasks
### PATCH /security/tasks/:id/complete
### POST /security/tasks/:id/incidents
### GET /security/incidents
### PATCH /security/incidents/:id/close
### POST /security/incidents/:id/work-orders
### PATCH /security/work-orders/:id/close

## Medical
### GET /medical/health-records
### POST /medical/health-records
### GET /medical/evaluations
### POST /medical/evaluations
### GET /medical/vitals
### POST /medical/vitals
### GET /medical/chronic-plans
### POST /medical/chronic-plans
### GET /medical/monthly-checks
### POST /medical/monthly-checks
### POST /medical/semiannual-reports/generate

## Diet
### GET /diet/menus
### POST /diet/menus
### GET /diet/special-orders
### POST /diet/special-orders
### POST /diet/dispatch

## Nursing
### GET /nursing/service-items
### POST /nursing/service-items
### GET /nursing/tasks
### POST /nursing/tasks
### PATCH /nursing/tasks/:id/complete
### POST /nursing/records
### GET /nursing/attendance
### POST /nursing/attendance/check-in
### POST /nursing/attendance/check-out
### POST /nursing/leave-requests
### PATCH /nursing/leave-requests/:id/approve
### POST /nursing/audits

## External
### GET /external/report-jobs
### POST /external/report-jobs
### POST /external/report-jobs/:id/retry

## Reporting
### GET /reports/overview
### GET /reports/safety
### GET /reports/medical
### GET /reports/nursing
### POST /reports/exports
