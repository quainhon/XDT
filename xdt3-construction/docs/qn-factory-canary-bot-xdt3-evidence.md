# QN Factory Canary Bot — XDT3 Construction Evidence

Job: `QN-FACTORY-CANARY-BOT-XDT3-CONSTRUCTION-001`  
Owner: `XDT3-CONSTRUCTION`  
Execution Lane: `XDT_BUILD` (**Đang Đóng Tàu** / conversation `f079bc35-c211-40ba-b96d-8886843b251d`)  
Target Repository: `quainhon/qn-factory-canary-bot`  
Target Branch: `main`  
Target Commit: `2e8385b15d0b928c61b16e54e8ef5a0ebed951ee`  

---

## 1. Authoritative Precedents & Authorization
- **Predecessor Stage:** `QN-FACTORY-CANARY-BOT-XDT2-ARCHITECT-001` verified `DONE`.
- **Build Plan Reference:** `quainhon/XDT:xdt2-architect/plans/qn-factory-canary-bot.build-plan.json` (Commit `9ce1d2d70bbd226971fdecfb1268665c64a95398`).
- **Material Contract Reference:** `quainhon/XDT:xdt1-material/contracts/qn-factory-canary-bot.v0.1.json` (Blob `234d6cc4efd6617be1e22cb4a6b62fb2279544d9`).
- **Human Provenance:** Direct HUMAN instruction explicitly authorized XDT3 Construction continuation for this canary target, delegating execution to the shared `XDT_BUILD` / `Đang Đóng Tàu` lane while XDT3 retains department ownership.

---

## 2. Product Implementation
All product code was implemented strictly within `quainhon/qn-factory-canary-bot`:
1. `app.py`: Stateless HTTP service using Python standard library `http.server`:
   - `GET /health` -> HTTP 200 `application/json` with `{"status": "ok"}`.
   - `POST /echo` -> HTTP 200 `application/json` preserving exact `message` string.
   - Validation: returns HTTP 400 on missing or non-string message or invalid body.
   - Unmatched paths return HTTP 404.
2. `test_app.py`: Standard library `unittest` test suite running against local loopback ephemeral port.
3. `.gitignore`: Ignores `__pycache__` and bytecode.
4. `README.md`: Documents service, endpoints, and local execution commands.

### Invariant & Exclusion Checklist:
- [x] Zero external package dependencies (standard library only).
- [x] No database or persistence.
- [x] No authentication.
- [x] No queues or schedulers.
- [x] No external API integrations.
- [x] No business workflows or deployment behavior.
- [x] No extra endpoints.
- [x] No TTQN1 ownership assignment.

---

## 3. Automated Test Verification Evidence
Tests executed locally via `python -m unittest -v test_app.py`:
```text
test_01_get_health_returns_200_and_status_ok (test_app.TestCanaryBotService.test_01_get_health_returns_200_and_status_ok) ... ok
test_02_post_echo_string_returns_200_exact_preservation (test_app.TestCanaryBotService.test_02_post_echo_string_returns_200_exact_preservation) ... ok
test_03_post_echo_missing_message_returns_400 (test_app.TestCanaryBotService.test_03_post_echo_missing_message_returns_400) ... ok
test_04_post_echo_non_string_message_returns_400 (test_app.TestCanaryBotService.test_04_post_echo_non_string_message_returns_400) ... ok
test_05_unmatched_routes_return_404 (test_app.TestCanaryBotService.test_05_unmatched_routes_return_404) ... ok

----------------------------------------------------------------------
Ran 5 tests in 0.791s

OK
```

All 4 required acceptance test cases + routing safety test passed cleanly.

---

## 4. Construction Record
Machine-readable construction record committed to:
`xdt3-construction/evidence/qn-factory-canary-bot.construction-record.json`
- Schema: `xdt.construction-record.v0.1`
- Status: `evidence_ready_for_xdt4`
- Claims are verification: `false` (Awaits authoritative XDT4 Quality Control review).
- Target commit: `2e8385b15d0b928c61b16e54e8ef5a0ebed951ee`
