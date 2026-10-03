const TYPES = new Set(["bot_worker","service_backend","web_app","local_worker","other"]);

export function evaluateCommissioning(c) {
  const blockers = [];
  if (!c || c.schema_version !== "0.1") blockers.push("invalid_contract");
  if (!c?.artifact?.artifact_id || !c?.artifact?.build_id || !c?.artifact?.verification_id || !c?.artifact?.owner) blockers.push("missing_artifact_identity");
  if (!TYPES.has(c?.artifact?.type)) blockers.push("unsupported_artifact_type");
  if (c?.xdt4?.verdict !== "PASS" || !c?.xdt4?.evidence_ref) blockers.push("xdt4_pass_required");
  if (c?.authority?.authorized !== true) blockers.push("launch_authority_required");
  const gates = c?.authority?.human_gates || [];
  if (gates.some(g => g.required && (!g.approved || !g.evidence_ref))) blockers.push("human_gate_required");
  if (!c?.target?.environment) blockers.push("target_environment_required");
  if (!Array.isArray(c?.launch_actions) || c.launch_actions.length === 0 || c.launch_actions.some(a => a.status !== "DONE" || !a.evidence_ref)) blockers.push("launch_actions_incomplete");

  const e = c?.evidence || {}, b = c?.bindings || {};
  switch (c?.artifact?.type) {
    case "bot_worker":
      if (!b.registration_ref || !b.routing_ref || !b.rule_pack_ref) blockers.push("bot_bindings_required");
      if (!e.activation_ref || !e.connectivity_ref || !e.routing_ref) blockers.push("bot_operational_proof_required");
      break;
    case "service_backend":
      if (!e.deployment_ref || !e.health_ref || !b.registration_ref) blockers.push("service_operational_proof_required");
      break;
    case "web_app":
      if (!e.deployment_ref || !e.smoke_ref || !b.registration_ref) blockers.push("web_operational_proof_required");
      break;
    case "local_worker":
      if (!e.activation_ref || !e.connectivity_ref || !b.routing_ref) blockers.push("worker_operational_proof_required");
      break;
    case "other":
      if (!e.activation_ref && !e.deployment_ref) blockers.push("explicit_commissioning_proof_required");
      break;
  }
  if (Array.isArray(c?.blockers) && c.blockers.length) blockers.push("declared_blockers");
  return { verdict: blockers.length ? "BLOCKED" : "READY", state: blockers.length ? "NOT_LAUNCHED" : "COMMISSIONED", blockers: [...new Set(blockers)] };
}
