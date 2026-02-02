# Non-Functional Requirements

## Security
- Passwords hashed with bcrypt (>=10 rounds)
- JWT rotation and revocation
- PII masked for non-privileged roles
- Access logs for read/write of medical data

## Compliance
- Data retention: 5 years minimum
- Audit logs immutable
- Export watermarking for sensitive data

## Performance
- p95 API latency < 300ms for common queries
- Batch endpoints for heavy exports

## Availability and Reliability
- 99.5% uptime
- Daily backups, 30-day retention
- DR recovery time objective: 4 hours

## Observability
- Structured logs with requestId
- Metrics for tasks SLA and incident resolution
- Alerting on external reporting failures

## Data Quality
- Required fields enforced at API level
- Reference integrity checks on org/resident/staff
