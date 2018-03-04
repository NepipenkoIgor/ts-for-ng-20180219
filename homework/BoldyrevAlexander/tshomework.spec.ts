import { expect } from 'chai';
import { isInArray } from './tshomework';

describe('isInArray', () => {
  it('should return false isInArray([1,2,3],3,4,5)', () => {
    const result = isInArray([1, 2, 3], 3, 4, 5);
    expect(result)
      .to
      .equal(false);
  });
});
