/* 

Write a function that takes in two arguments, an array of numbers and a number to search for.
The function should return a smaller number array where every item contains the search number within it. 
E.g. Inputs of [123, 4556, 127, 415, 8, 42, 88, 888, 13] and 1, would return this array:
[123, 127, 415, 13].
The returned array must consist of numbers. Extension: make it work for strings as well, and it should be case insensitive

*/

export const whichContain = (array, gem) => array.filter(item => String(item).toLowerCase().includes(String(gem).toLowerCase()));