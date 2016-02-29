/**
 * Compose matchers to build more complex functionality. All specified matchers
 * must match for the composed matcher to match.
 */
export default (...fns) => fns.reduce((g, f) => (x) => g(f(x)));
