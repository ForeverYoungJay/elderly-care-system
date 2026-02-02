# External Integrations

## Agencies
- Civil Affairs Bureau
- Medical Insurance Bureau

## Integration Principles
- Outbox + retry
- Idempotent submission by jobId
- Signed payloads (HMAC)

## Report Types
- Resident roster
- Incident report
- Monthly medical summary
- Facility staffing summary

## Payload Example
```json
{
  "jobId": "uuid",
  "orgId": "uuid",
  "period": "2026-01",
  "reportType": "INCIDENT_SUMMARY",
  "payload": { "count": 3, "items": [] }
}
```

## Receipt Handling
- Store receipt code and message
- Mark job status: SENT -> RECEIVED -> CONFIRMED

## Retry Policy
- Exponential backoff: 5m, 30m, 2h, 6h, 24h
- Max attempts: 5
- Manual retry available for admins
