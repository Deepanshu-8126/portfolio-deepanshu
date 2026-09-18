# Rule: High-Grade Engineering and Design Standards

Enforce high visual and structural quality across all code:

1. **Aesthetic Excellence**:
   - Modern, cohesive color system (dark surfaces with rich accents).
   - Glassmorphism, subtle borders (`rgba(255, 255, 255, 0.08)`), and soft shadows.
   - Smooth transitions (`transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`).
   - Dynamic micro-interactions on hover, focus, and active states.
2. **Production Code Rigor**:
   - Clean modular architecture: Keep files focused on a single responsibility.
   - TypeScript strict mode compliance: Avoid `any`, use explicit interfaces and types.
   - Robust defensive programming: Always handle edge cases, null/undefined, and async rejections.
3. **Automated Verification**:
   - Test or build verify after non-trivial changes to guarantee zero syntax or build regressions.
