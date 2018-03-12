import { expect } from 'chai';
import { isInArray } from './isInArray';

describe('isInArray', () => {

	describe('works with numbers', () => {

		it('should return false isInArray([1, 2, 3], 1, 2, 5)', () => {
			const result = isInArray([1, 2, 3], 1, 2, 5);
			expect(result)
				.to
				.equal(false);
		});

		it('should return true isInArray([1, 2, 3], 1, 2)', () => {
			const result = isInArray([1, 2, 3], 1, 2);
			expect(result)
				.to
				.equal(true);
		});

	});

	describe('works with strings', () => {

		it('should return false isInArray([\'1\', \'2\', \'3\'], \'1\', \'2\', \'5\')', () => {
			const result = isInArray(['1', '2', '3'], '1', '2', '5');
			expect(result)
				.to
				.equal(false);
		});

		it('should return true isInArray([\'1\', \'2\', \'3\'], \'1\', \'2\')', () => {
			const result = isInArray(['1', '2', '3'], '1', '2');
			expect(result)
				.to
				.equal(true);
		});

	});

});
