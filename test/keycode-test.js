import test from 'ava';
import keycode from '../src/keycode';

test('matches', t => {
  t.plan(1);

  const EventMatcher = keycode('Enter');
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler({ code: 'Enter' });
});

test('does not match', t => {
  t.plan(0);

  const EventMatcher = keycode('Enter');
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler({ code: 'Escape' });
});
