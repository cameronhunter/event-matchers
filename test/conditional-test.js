import test from 'ava';
import conditional from '../src/conditional';

test('matches', t => {
  t.plan(1);

  const EventMatcher = conditional(true);
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler();
});

test('does not match', t => {
  t.plan(0);

  const EventMatcher = conditional(false);
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler();
});
