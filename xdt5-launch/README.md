# XDT5 Launch v0.1 (RETIRED ARCHIVE)

> **RETIREMENT NOTICE:** Per trusted human directive, XDT5 Launch is retired from the active standard workflow. The active XDT build workflow is four stages (XDT1-XDT4) with XDT4 Quality Control as the terminal stage. This directory is preserved strictly as a read-only historical archive. See `RETIRED.md` for details.

XDT5 previously owned launch/commissioning contracts, evidence, and launch-state decisions only.

Pipeline:

`XDT4 PASS -> AUTHORITY/PREFLIGHT -> TYPE-SPECIFIC COMMISSIONING -> HEALTH/ROUTING PROOF -> READY`

This bootstrap never deploys or mutates a real downstream product. The validator evaluates machine-readable commissioning records and synthetic fixtures only.

## Run

`node xdt5-launch/tests/commissioning.test.mjs`

## Verdicts

- `READY`: all QC, authority, gate, action, and proof requirements pass.
- `BLOCKED`: fail closed; no launch is authorized.

Artifact types: `bot_worker`, `service_backend`, `web_app`, `local_worker`, `other`.
