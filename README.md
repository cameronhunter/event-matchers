# Event Matchers

[![Build Status](https://travis-ci.org/cameronhunter/event-matchers.svg?branch=master)](https://travis-ci.org/cameronhunter/event-matchers) [![NPM Version](https://img.shields.io/npm/v/event-matchers.svg)](https://npmjs.org/package/event-matchers) [![License](https://img.shields.io/npm/l/event-matchers.svg)](https://github.com/cameronhunter/event-matchers/blob/master/LICENSE.md)

Composable functions for handling event callbacks in Vanilla JS. Build complex
event handlers by composing simple event matchers. Separate event handling logic
from the behavior logic that the event triggers.

## Example

```javascript
import { all, any, delegate, keycode } from 'event-matchers';

const up = keycode('ArrowUp');
const down = keycode('ArrowDown');
const left = keycode('ArrowLeft');
const right = keycode('ArrowRight');

const matcher = all(
  any(up, down, left, right),
  delegate('.controls')
);

document.addEventListener('keydown', matcher(function(e) {
  // Only triggered when arrow keys occur on the .controls element
}));
```
