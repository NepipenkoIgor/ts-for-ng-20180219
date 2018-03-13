import { expect } from 'chai';
import { summator } from './summator';

describe('summator', () => {

	it('should return 6 summator(1, 2, 3)', () => {
		const result = summator(1, 2, 3);
		expect(result)
			.to
			.equal(6);
	});

	it('should return 6 summator(\'1\', \'2\', \'3\')', () => {
		const result = summator('1', '2', '3');
		expect(result)
			.to
			.equal(6);
	});

});
