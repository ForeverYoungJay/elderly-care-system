# Product Requirements Document (PRD)

## 1. Overview
The elderly care system provides end-to-end management for residential care facilities, including resident lifecycle, safety, medical, diet, nursing services, staff scheduling and attendance, administration (RBAC), external reporting, and analytics.

### Goals
- Standardize daily operations with clear workflows and closed-loop task handling.
- Improve resident safety and medical compliance.
- Provide traceable records for audits and external reporting.
- Enable multi-facility management under a unified system.

### Success Metrics (KPIs)
- 95%+ task completion within SLA for safety and nursing tasks.
- 100% traceability for medical evaluations and reports.
- 0 unresolved high-priority safety incidents beyond 24 hours.
- 30% reduction in manual reporting time to external agencies.

### Stakeholders
- Facility director
- Nursing department lead
- Medical staff
- Dietitian / kitchen manager
- Security / safety lead
- Administrative office
- External agencies (civil affairs, medical insurance)

## 2. Personas and Roles
- Admin: System configuration, role management, org structure.
- Facility Director: Dashboards, approvals, compliance reports.
- Nursing Lead: Scheduling, task assignment, quality audits.
- Nurse / Caregiver: Daily service tasks, check-ins, incident reports.
- Medical Staff: Health records, evaluations, chronic disease tracking.
- Dietitian: Meal planning, special diet issuance.
- Safety Officer: Inspection planning and incident handling.
- External Reporter: Data submission and receipt management.

## 3. Scope
### In Scope (v1)
- Multi-tenant organization tree (campus/building/floor/department).
- Resident lifecycle (admission, profile, bed assignment, discharge).
- Safety service workflow (inspection plan -> task -> incident/work order -> closure).
- Medical service workflow (health records, periodic evaluation, chronic disease tracking, vitals, monthly check, semi-annual report).
- Diet management (menu, meal plans, special diet orders and dispatch).
- Nursing services and attendance (service items, records, check-in, leave, audits).
- RBAC: pre-defined roles and permissions + custom roles.
- External agency reporting with receipt and retry.
- Reporting dashboard and exports.

### Out of Scope (v1)
- Full finance/accounting ledger.
- Advanced IoT device management (only hooks/ingestion API).
- Third-party pharmacy order fulfillment.

## 4. User Journeys (summary)
1) Safety inspection: create plan -> generate tasks -> staff executes -> incident created if failed -> work order -> verification -> closed.
2) Monthly medical check: schedule -> record vitals -> update chronic disease tracking -> generate monthly report -> resident review.
3) Diet dispatch: dietitian defines menu -> resident special diet order -> kitchen production -> meal delivery record -> exception handling.
4) Nursing shift: nurse checks in -> picks assigned tasks -> records service -> supervisor audit -> attendance summary.

## 5. Functional Requirements (high-level)
- R1: System must support multi-facility with data isolation and shared admin roles.
- R2: All tasks must have status, assignee, SLA, and audit trail.
- R3: Safety, medical, diet, and nursing modules must share resident data.
- R4: External data submission must be idempotent with retry policies.
- R5: Reporting must support CSV/Excel export and role-based dashboards.

## 6. Data and Compliance
- Data retention: minimum 5 years for medical and incident records.
- Access logging: all sensitive record access logged.
- PII: encryption at rest, masked views for non-privileged roles.

## 7. Risks and Mitigations
- Risk: Inconsistent data across modules -> Mitigation: shared core entities and strict validation rules.
- Risk: Low staff adoption -> Mitigation: mobile-friendly UI and simplified task flows.
- Risk: External reporting failures -> Mitigation: queue + retry + manual re-submit tools.
