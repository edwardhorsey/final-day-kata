import { whichContain } from './which-contain.js';

test("Check whichContain returns an array containing only items which include the passed in argument", () => {
  const expected =  [123, 127, 415, 13];
  expect(whichContain([123, 4556, 127, 415, 8, 42, 88, 888, 13], 1)).toEqual(expected);
});

test("Works for strings", () => {
  const expected =  ['congratulations'];
  expect(whichContain([ 'the', 'end', 'of', 'the', 'course', 'congratulations', 'everybody',], 'a')).toEqual(expected);
});
