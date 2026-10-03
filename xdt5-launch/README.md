# XDT5 Launch v0.1

XDT5 owns launch/commissioning contracts, evidence, and launch-state decisions only.

Pipeline:

`XDT4 PASS -> AUTHORITY/PREFLIGHT -> TYPE-SPECIFIC COMMISSIONING -> HEALTH/ROUTING PROOF -> READY`

This bootstrap never deploys or mutates a real downstream product. The validator evaluates machine-readable commissioning records and synthetic fixtures only.

## Run

`node xdt5-launch/tests/commissioning.test.mjs`

## Verdicts

- `READY`: all QC, authority, gate, action, and proof requirements pass.
- `BLOCKED`: fail closed; no launch is authorized.

Artifact types: `bot_worker`, `service_backend`, `web_app`, `local_worker`, `other`.
