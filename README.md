# XDT1 Material

File-based Material System v0.1 owned by **XDT1-MATERIAL / Kiểm Tra Nguyên Liệu**.

Purpose: inventory approved/observed materials and contracts, declare ownership and dependencies, record material decisions, accept a deterministic Material Request, and return an auditable Material Plan.

Authority boundary: this repository answers **WHAT materials/contracts should be used**. AI Orchestrator remains Rule Keeper and answers **WHO may do WHAT under which rules**. A Material Plan never grants downstream mutation authority.

## Layout
- `registry/materials.json` — discovered/reusable material inventory
- `registry/entities-contracts.json` — entity/contract inventory
- `registry/relationships.json` — producer/consumer/dependency relationships
- `decisions/` — material governance decisions
- `schemas/` — Material Request / Material Plan JSON Schemas
- `requests/` — auditable requests
- `plans/` — generated/approved plans
- `docs/` — inspection and validation evidence

v0.1 deliberately has no database, service, UI, router, or deployment.
