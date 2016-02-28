/**
 * Compose matchers to build more complex functionality. All specified matchers
 * must match for the composed matcher to match.
 */
export const all = (...fns) => fns.reduce((g, f) => (x) => g(f(x)));

/**
 * Combine matchers to build more complex functionality. Any specified matcher
 * can match for the composed matcher to match.
 */
export const any = (...fns) => fns.reduce((a, b) => (x) => (...args) => b(x)(...args) || a(x)(...args));
