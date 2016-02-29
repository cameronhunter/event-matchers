import test from 'ava';
import conditional from '../src/conditional';
import any from '../src/any';

const AlwaysMatch = conditional(true);
const NeverMatch = conditional(false);

test('matches', t => {
  t.plan(1);

  const EventMatcher = any(AlwaysMatch, AlwaysMatch);
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler();
});

test('partial match', t => {
  t.plan(1);

  const EventMatcher = any(AlwaysMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler();
});

test('does not match', t => {
  t.plan(0);

  const EventMatcher = any(NeverMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler();
});
