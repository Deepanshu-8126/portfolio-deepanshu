// src/lib/security.ts
export const securityUtils = {
  // Sanitize user input
  sanitizeInput: (input: string): string => {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  },

  // Validate email format
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Check for malicious content
  hasMaliciousContent: (content: string): boolean => {
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /onload=/i,
      /onerror=/i,
      /eval\(/i,
      /document\.cookie/i,
    ];

    return maliciousPatterns.some((pattern) => pattern.test(content));
  },

  // Generate secure random token
  generateToken: (length: number = 32): string => {
    return Array.from({ length }, () =>
      Math.floor(Math.random() * 16).toString(16),
    ).join("");
  },
};
