const {binarySearch} = require('./binary-search.js');

describe('binarySearch', () => {
  // Valid case: Target number present in the array
  it('should return the correct index and steps for a valid number present in the array', () => {
    const array = [1, 3, 5, 7, 9];
    const num = 5;
    const result = binarySearch(array, num);
    expect(result.index).toBe(2);
    expect(result.steps).toBe(1);
  });

  // Valid case: Target number not present in the array
  it('should return -1 and steps for a valid number not present in the array', () => {
    const array = [1, 3, 5, 7, 9];
    const num = 6;
    const result = binarySearch(array, num);
    expect(result.index).toBe(-1);
    expect(result.steps).toBe(2);
  });

  // Boundary case: Empty array
  it('should return -1 and 0 steps for an empty array', () => {
    const array = [];
    const num = 5;
    const result = binarySearch(array, num);
    expect(result.index).toBe(-1);
    expect(result.steps).toBe(0);
  });

  // Boundary case: Single-element array with the target present
  it('should return the correct index and steps for a single-element array with the target present', () => {
    const array = [5];
    const num = 5;
    const result = binarySearch(array, num);
    expect(result.index).toBe(0);
    expect(result.steps).toBe(1);
  });

  // Boundary case: Single-element array with the target not present
  it('should return -1 and 1 step for a single-element array with the target not present', () => {
    const array = [5];
    const num = 3;
    const result = binarySearch(array, num);
    expect(result.index).toBe(-1);
    expect(result.steps).toBe(1);
  });

  // Edge case: Array with even number of elements
  it('should return the correct index and steps for an array with even number of elements', () => {
    const array = [1, 3, 5, 7];
    const num = 5;
    const result = binarySearch(array, num);
    expect(result.index).toBe(2);
    expect(result.steps).toBe(2);
  });

});
