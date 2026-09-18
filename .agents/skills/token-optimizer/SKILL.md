---
name: token-optimizer
description: Use this skill to optimize token usage, minimize context bloat, prune redundant conversations, and perform surgical code edits without dumping large files.
---

# Token Optimizer Skill

This skill guides the agent in maintaining peak token efficiency and minimal context waste.

## Protocols for Token Minimization

1. **Surgical Read & Write**:
   - Never view full files unless strictly necessary (< 100 lines).
   - Use `StartLine` and `EndLine` with `view_file` to read only the target function/block.
   - Use `replace_file_content` for surgical replacements instead of rewriting entire files.

2. **Grep Before Read**:
   - Always run targeted `grep_search` to pinpoint the exact line numbers of a symbol or function before opening a file.

3. **High-Signal Output**:
   - Avoid conversational boilerplate ("Sure, I can help with that!", "Here is what I am doing...").
   - Jump straight to action and provide concise, well-structured summaries.
   - Summarize diffs instead of printing unchanged blocks of code.
