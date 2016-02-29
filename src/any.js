/**
 * Combine matchers to build more complex functionality. Any specified matcher
 * can match for the composed matcher to match.
 */
export default (...fns) => fns.reduce((a, b) => (x) => (...args) => b(x)(...args) || a(x)(...args));
