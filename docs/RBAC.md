# RBAC and Permission Matrix

## Role Definitions
- ADMIN: system config, full access
- DIRECTOR: dashboards, approvals, reports
- NURSE_LEAD: nursing scheduling, audits
- NURSE: service tasks, attendance
- DOCTOR: medical records, evaluations
- DIETITIAN: menus, special diets
- SAFETY_OFFICER: safety plans, incidents
- EXTERNAL_REPORTER: external submissions

## Permission Codes (examples)
- ORG_READ, ORG_WRITE
- STAFF_READ, STAFF_WRITE
- RESIDENT_READ, RESIDENT_WRITE
- BED_READ, BED_WRITE
- SAFETY_READ, SAFETY_WRITE
- MEDICAL_READ, MEDICAL_WRITE
- DIET_READ, DIET_WRITE
- NURSING_READ, NURSING_WRITE
- REPORT_READ, REPORT_EXPORT
- EXTERNAL_REPORT_WRITE
- ADMIN_ROLE_WRITE

## Default Matrix (summary)
- ADMIN: all permissions
- DIRECTOR: *_READ, REPORT_EXPORT
- NURSE_LEAD: NURSING_READ/WRITE, STAFF_READ, RESIDENT_READ
- NURSE: NURSING_READ/WRITE (own tasks), RESIDENT_READ
- DOCTOR: MEDICAL_READ/WRITE, RESIDENT_READ
- DIETITIAN: DIET_READ/WRITE, RESIDENT_READ
- SAFETY_OFFICER: SAFETY_READ/WRITE, RESIDENT_READ
- EXTERNAL_REPORTER: EXTERNAL_REPORT_WRITE, REPORT_READ

## Data Scope
- Scope defaults to orgId; cross-org only for ADMIN or DIRECTOR
- Record-level filtering by org tree
