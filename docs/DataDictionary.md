# Data Dictionary

All tables include: id (uuid), createdAt, updatedAt, orgId (uuid) unless noted.

## Core Tables
### organizations
- id, name, type, parentId, status
- Index: parentId

### staff
- id, username, passwordHash, name, phone, status, orgId
- Index: username, orgId

### staff_roles (join)
- staffId, roleId
- Index: staffId, roleId

### residents
- id, name, gender, birthday, roomNo, bedId, emergencyContact, emergencyPhone, chronicDiseases, allergies, dietTaboo, orgId
- Index: bedId, orgId

### beds
- id, roomNo, bedNo, status, orgId
- Unique: orgId + roomNo + bedNo

## RBAC
### roles
- id, name, description

### permissions
- id, code, description

### roles_permissions (join)
- roleId, permissionId

## Safety
### inspection_plans
- id, name, scope, frequency, checklist(jsonb), ownerId, orgId

### inspection_tasks
- id, planId, assigneeId, dueAt, status, result(jsonb)
- Index: assigneeId, status

### incidents
- id, taskId, severity, description, attachments(jsonb), status
- Index: status

### work_orders
- id, incidentId, ownerId, status, resolution, closedAt

## Medical
### health_records
- id, residentId, baselineVitals(jsonb), medicalHistory(text)

### evaluations
- id, residentId, type, score, notes, evaluatedAt

### vitals
- id, residentId, bp, temp, pulse, oxygen, capturedAt
- Index: residentId, capturedAt

### chronic_plans
- id, residentId, disease, plan, targetMetrics(jsonb)

### monthly_checks
- id, residentId, summary, physicianNotes, month

### semiannual_reports
- id, residentId, period, fileUrl, generatedAt

## Diet
### menus
- id, date, mealType, items(jsonb), orgId
- Unique: orgId + date + mealType

### special_diet_orders
- id, residentId, condition, restriction, startAt, endAt, status

### meal_dispatches
- id, menuId, residentId, status, deliveredAt

## Nursing
### service_items
- id, name, category, durationMinutes, defaultSlaMinutes

### service_tasks
- id, itemId, residentId, assigneeId, status, dueAt

### service_records
- id, taskId, notes, attachments(jsonb)

### attendance
- id, staffId, checkIn, checkOut, location

### leave_requests
- id, staffId, type, reason, status, startAt, endAt

### audits
- id, recordId, auditorId, score, notes, auditedAt

## External
### report_jobs
- id, agency, period, status, payload(jsonb), attempts

### report_receipts
- id, jobId, code, message, receivedAt

## Reporting
### export_jobs
- id, type, filters(jsonb), status, fileUrl, requestedBy

## Audit
### audit_logs
- id, actorId, action, entityType, entityId, before(jsonb), after(jsonb), ip, userAgent, createdAt
