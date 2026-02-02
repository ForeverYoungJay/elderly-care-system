# Testing Strategy

## Levels
- Unit tests for services and validators
- Integration tests for API endpoints
- E2E tests for core workflows (safety, nursing, medical)

## Key Scenarios
- Safety inspection failure -> incident -> work order -> closure
- Resident admission -> bed assignment -> discharge
- Nursing tasks generation and completion
- Medical evaluation and report generation
- External report submission with retry

## Data Fixtures
- Seed org tree, staff, residents, roles
- Fake vitals data generator

## Quality Gates
- Unit coverage > 70% on core modules
- All critical workflows have E2E tests
