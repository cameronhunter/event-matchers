import test from 'ava';
import delegate from '../src/delegate';
import event from '../src/event';
import { all, any } from '../src/combinators';

/**
 * all
 */

test('all – matches', t => {
  t.plan(1);

  const EventMatcher = all(event(e => e.type === 'click'), delegate('.Test'));
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler({ type: 'click', target: { closest() { return true; } } });
});

test('all – partial match', t => {
  t.plan(0);

  const EventMatcher = all(event(e => e.type === 'click'), delegate('.Test'));
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler({ type: 'click', target: { closest() { return false; } } });
});

test('all – does not match', t => {
  t.plan(0);

  const EventMatcher = all(event(e => e.type === 'click'), delegate('.Test'));
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler({ type: 'keydown', target: { closest() { return false; } } });
});

/**
 * any
 */

test('any – matches', t => {
  t.plan(1);

  const EventMatcher = any(event(e => e.type === 'click'), delegate('.Test'));
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler({ type: 'click', target: { closest() { return true; } } });
});

test('any – partial match', t => {
  t.plan(1);

  const EventMatcher = any(event(e => e.type === 'click'), delegate('.Test'));
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler({ type: 'click', target: { closest() { return false; } } });
});

test('any – does not match', t => {
  t.plan(0);

  const EventMatcher = any(event(e => e.type === 'click'), delegate('.Test'));
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler({ type: 'keydown', target: { closest() { return false; } } });
});
