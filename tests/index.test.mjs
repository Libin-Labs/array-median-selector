import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('finds odd median', () => {
  assert.equal(api.median([7, 1, 4]), 4);
});
test('averages even centers', () => {
  assert.equal(api.median([1, 2, 3, 4]), 2.5);
});
test('handles negative values', () => {
  assert.equal(api.median([-5, -1, -3]), -3);
});
test('does not mutate input', () => {
  const x = [3, 1, 2];
  api.median(x);
  assert.deepEqual(x, [3, 1, 2]);
});
test('handles singleton', () => {
  assert.equal(api.median([8]), 8);
});
test('rejects empty array', () => {
  assert.throws(() => api.median([]), RangeError);
});
