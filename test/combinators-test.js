import test from 'ava';
import conditional from '../src/conditional';
import { all, any } from '../src/combinators';

const AlwaysMatch = conditional(true);
const NeverMatch = conditional(false);

/**
 * all
 */

test('all – matches', t => {
  t.plan(1);

  const EventMatcher = all(AlwaysMatch, AlwaysMatch);
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler();
});

test('all – partial match', t => {
  t.plan(0);

  const EventMatcher = all(AlwaysMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler();
});

test('all – does not match', t => {
  t.plan(0);

  const EventMatcher = all(NeverMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler();
});

/**
 * any
 */

test('any – matches', t => {
  t.plan(1);

  const EventMatcher = any(AlwaysMatch, AlwaysMatch);
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler();
});

test('any – partial match', t => {
  t.plan(1);

  const EventMatcher = any(AlwaysMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler();
});

test('any – does not match', t => {
  t.plan(0);

  const EventMatcher = any(NeverMatch, NeverMatch);
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler();
});
