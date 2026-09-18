---
name: task-observer
description: Use this skill to observe workflows, identify recurring patterns, record user corrections, and turn them into permanent self-improving guidelines and skills.
---

# Task Observer & Self-Learning Skill

This skill allows the agent to continuously learn from user preferences, corrections, and recurring project patterns.

## When to Activate

- When the user corrects a mistake or clarifies an architectural pattern.
- When a complex debugging session yields a non-obvious solution.
- When completing a multi-step feature and extracting generalizable rules.

## Procedures

1. **Observe and Log**:
   - Identify the root cause of any user correction or failure.
   - Note the preferred convention (e.g. naming, CSS tokens, library choices).

2. **Persist Knowledge**:
   - Update `.agents/rules/` with a concise bullet point capturing the rule.
   - Recommend the user run `/learn` to cement the learning into Antigravity's Knowledge Items (KI).

3. **Prevent Regression**:
   - Check existing project rules before proposing changes to ensure previously corrected patterns are not reintroduced.
