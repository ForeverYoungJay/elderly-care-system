# Elderly Care System - Documentation Index

This folder contains the full product and technical specification for the elderly care system. The content is written to be implementation-ready for engineering teams.

## Start here
- PRD: `docs/PRD.md`
- Architecture: `docs/Architecture.md`
- Module requirements and workflows: `docs/Modules.md`
- Data dictionary: `docs/DataDictionary.md`
- API specification: `docs/API.md`
- RBAC and permissions: `docs/RBAC.md`
- Frontend specification: `docs/Frontend.md`
- Backend specification: `docs/Backend.md`
- External integrations: `docs/Integration.md`
- Non-functional requirements: `docs/NonFunctional.md`
- Testing strategy: `docs/Testing.md`
- Implementation plan and milestones: `docs/ImplementationPlan.md`

## Conventions
- IDs are UUIDv4.
- Timestamps are UTC ISO-8601 strings.
- Pagination: `page`, `pageSize`, `total`.
- Audit: all create/update/delete actions must be audited.
- Multi-tenant: all data is scoped by `orgId` unless stated otherwise.
