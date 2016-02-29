/**
 * Handle an event on a target (or parent) with a specified CSS selector.
 */
export default (...selectors) => handler => (event, ...args) => {
  if (event && event.target) {
    const matchedElement = event.target.closest(selectors.join(','));
    if (matchedElement) {
      handler.call(matchedElement, event, ...args);
      return true;
    }
  }
};
