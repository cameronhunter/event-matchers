import event from './event';

/**
 * Handle an event with a specified keycode.
 */
export default (...codes) => event(e => codes.indexOf(e.code) >= 0);
