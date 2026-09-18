# Antigravity Universal Agent Guidelines

This project and all associated workspaces follow strict guidelines for **Token Efficiency**, **Engineering Craft**, and **Self-Improvement**.

---

## 1. Token Economy Protocols (Save 60-80% Tokens)
- **Surgical Inspection**: Never read an entire file if only inspecting a function or section. Always use line ranges (StartLine/EndLine).
- **Targeted Search**: Use precise ripgrep patterns (`grep_search`) with glob filters (`Includes`) rather than broad recursive directory listings.
- **Concise & Dense Responses**: Keep explanations brief, high-signal, and markdown-formatted. Never re-print full files in responses; output only precise diffs or code snippets.
- **Surgical Modifications**: Use single or multi-line replacement tools (`replace_file_content`) instead of full file rewrites whenever modifying existing code.
- **Context Pruning**: Avoid redundant chit-chat, restating identical instructions, or echoing user inputs back to the user.

---

## 2. Engineering & Aesthetic Craft (High-Grade Output)
- **Visual Excellence**:
  - Use curated color palettes (HSL-based, deep dark modes, glassmorphism, accent glows).
  - Modern typography (Inter, Outfit, Roboto Mono) with clear visual hierarchy.
  - Smooth micro-animations, transitions, and hover states to make interfaces feel alive.
  - Zero-placeholder policy: Never leave TODOs, dummy strings, or broken placeholder links. Generate real assets or write complete logic.
- **Robust Code Architecture**:
  - Write modular, strictly-typed code with clean separation of concerns.
  - Graceful error handling for all asynchronous and network boundaries.
  - Avoid introducing heavy unnecessary npm dependencies when vanilla or lightweight solutions suffice.

---

## 3. Verification Protocol (Zero Silent Breakages)
- After every code modification, automatically verify syntax, build integrity, and tests:
  - Run build checks (e.g. `npm run build` or `npx tsc --noEmit`).
  - Run linters and tests if configured.
- Never declare a task complete without checking build logs or terminal output for errors.

---

## 4. Self-Learning & Memory (Task Observer Pattern)
- When a bug is solved or the user provides a specific stylistic preference, adopt it immediately.
- Use the `/learn` slash command or update `.agents/rules/` to persist learned behaviors across future sessions.
