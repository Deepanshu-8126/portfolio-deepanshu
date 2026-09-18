# Rule: Token Efficiency and Context Hygiene

Always prioritize context economy to ensure fast execution and reduce token consumption:

1. **Information Density**: Deliver direct answers and actionable solutions. Eliminate conversational filler, redundant introductions, and generic disclaimers.
2. **Selective File Reading**: When viewing code files, calculate the approximate line range first and only read the relevant lines (`StartLine` and `EndLine`).
3. **No Redundant Re-Reading**: Reuse information already present in the active conversation context whenever possible instead of repeatedly re-reading identical files.
4. **Surgical Diff Application**: Never rewrite an entire 500-line file when changing 5 lines. Always target precise character sequences using surgical replacement tools.
5. **Clean Command Output**: When running terminal commands with verbose logs, limit output using head/tail, filters, or specific flags (e.g. `--silent`, `-q`, `head -n 20`).
