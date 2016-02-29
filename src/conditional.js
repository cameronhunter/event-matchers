/**
 * Handle an event only if the condition is truthy.
 */
export default condition => handler => (event = {}, ...args) => {
  if (condition) {
    handler.call(event.target, ...args);
    return true;
  }
};
