import assert from "node:assert/strict";
import fs from "node:fs";
import { evaluateCommissioning } from "../src/commission.mjs";
const load = n => JSON.parse(fs.readFileSync(new URL("../fixtures/" + n, import.meta.url)));

const noPass = evaluateCommissioning(load("no-xdt4-pass.json"));
assert.equal(noPass.verdict, "BLOCKED");
assert.ok(noPass.blockers.includes("xdt4_pass_required"));

const noHuman = evaluateCommissioning(load("missing-human-authority.json"));
assert.equal(noHuman.verdict, "BLOCKED");
assert.ok(noHuman.blockers.includes("human_gate_required"));

const valid = load("valid-synthetic-bot.json");
assert.equal(valid.provenance.synthetic, true);
assert.deepEqual(evaluateCommissioning(valid), { verdict:"READY", state:"COMMISSIONED", blockers:[] });

const missingAuthority = structuredClone(valid);
missingAuthority.authority.authorized = false;
assert.equal(evaluateCommissioning(missingAuthority).verdict, "BLOCKED");

const missingRouting = structuredClone(valid);
delete missingRouting.bindings.routing_ref;
assert.equal(evaluateCommissioning(missingRouting).verdict, "BLOCKED");

console.log("XDT5 commissioning tests: 5/5 passed");
