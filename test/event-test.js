import test from 'ava';
import event from '../src/event';

test('predicate matches', t => {
  t.plan(1);

  const EventMatcher = event(e => e.type === 'click');
  const EventHandler = EventMatcher(() => t.pass());

  EventHandler({ type: 'click' });
});

test('predicate does not match', t => {
  t.plan(0);

  const EventMatcher = event(e => e.type === 'click');
  const EventHandler = EventMatcher(() => t.fail());

  EventHandler({ type: 'keydown' });
});
