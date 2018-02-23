// Require modules
const test = require('ava');
const numsum = require('./');

test('1 + 2 + 3 === 6', t => {
  t.is(numsum.sum(1, 2, 3), 6);
});

test('[4, 5, 6, [7, 8]] === 6', t => {
  t.is(numsum.sum([4, 5, 6, [7, 8]]), 30);
});

test('sum of range 1..6 is 12', t => {
  t.is(numsum.range(1, 6), 21);
});

test('mi of -2:0,5 & 0:0.2 & 2:0.2 & 4:0.1 === -0.19999999999999996', t => {
  t.is(numsum.mi([
    {x: -2, p: 0.5},
    {x: 0,  p: 0.2},
    {x: 2,  p: 0.2},
    {x: 4,  p: 0.1}
  ]), -0.19999999999999996);
});

test('variance of -2:0,5 & 0:0.2 & 2:0.2 & 4:0.1 === 4.36', t => {
  t.is(numsum.variance([
    {x: -2, p: 0.5},
    {x: 0,  p: 0.2},
    {x: 2,  p: 0.2},
    {x: 4,  p: 0.1}
  ]), 4.36);
});
