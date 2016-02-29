import test from 'ava';
import conditional from '../src/conditional';
import all from '../src/all';

const AlwaysMatch = conditional(true);
const NeverMatch = conditional(false);

test('matches', t => {
  t.plan(1);

  const EventMatcher = all(AlwaysMatch, AlwaysMatch);
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler();
});

test('partial match', t => {
  t.plan(0);

  const EventMatcher = all(AlwaysMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler();
});

test('does not match', t => {
  t.plan(0);

  const EventMatcher = all(NeverMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler();
});
