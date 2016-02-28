/**
 * Handle an event that matches a predicate.
 */
export default predicate => handler => (event, ...args) => {
  if (predicate(event, ...args)) {
    handler.call(event.target, event, ...args);
    return true;
  }
};
