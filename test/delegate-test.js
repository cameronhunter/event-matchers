import test from 'ava';
import delegate from '../src/delegate';

test('matches', t => {
  t.plan(1);

  const EventMatcher = delegate('.Test');
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler({ target: { closest() { return true; } } });
});

test('does not match', t => {
  t.plan(0);

  const EventMatcher = delegate('.Test');
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler({ target: { closest() { return false; } } });
});
