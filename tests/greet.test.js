import { greet } from '../src/greet.js';

test('greet returns correct message', () => {
  expect(greet('Lis')).toBe('Hello, Lis!');
});
