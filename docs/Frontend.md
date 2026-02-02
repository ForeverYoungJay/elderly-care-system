# Frontend Specification

## Tech
- React + Vite + Ant Design
- State: React Query or Redux Toolkit
- Routing: React Router
- Auth: JWT stored in memory + refresh token in httpOnly cookie

## Global Layout
- Left navigation by module
- Top bar: facility selector, user menu, notifications
- Main content: list -> detail -> action drawer pattern

## Key Pages
1) Login
2) Dashboard (KPIs + charts)
3) Organization/Staff/Resident management
4) Safety: Plans, Tasks, Incidents, Work Orders
5) Medical: Records, Evaluations, Vitals, Reports
6) Diet: Menus, Special Orders, Dispatch
7) Nursing: Tasks, Records, Attendance, Leave, Audits
8) External Reporting: Job list, details, retry
9) Reports and Export Center

## UI Requirements
- Tables with filters, saved views, CSV export
- Detail pages with timeline/audit log
- Form validation with required fields and inline errors
- Mobile-friendly task pages for nurses

## UX Flows
- Task completion: open task -> fill form -> attach photos -> submit -> status updates
- Incident handling: from failed task -> create incident -> create work order -> track status
- Medical evaluation: select resident -> fill evaluation -> generate report

## Permissions
- Hide routes and actions based on permissions
- Data scope enforced on backend; frontend still checks to avoid confusion

## Component Library
- Reusable: ResidentSelect, StaffSelect, OrgTreeSelect, StatusBadge, AuditTimeline
