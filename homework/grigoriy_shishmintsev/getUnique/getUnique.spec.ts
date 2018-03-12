import { expect } from 'chai';
import { getUnique } from './getUnique';

describe('getUnique', () => {

	it('should return [1, 2, 3, 4] getUnique(1, 1, 2, 3, 3, 4)', () => {
		const result = getUnique(1, 1, 2, 3, 3, 4);
		expect(JSON.stringify(result))
			.to
			.equal(JSON.stringify([1, 2, 3, 4]));
	});

	it('should return [\'1\', \'2\', \'3\', \'4\'] getUnique(\'1\', \'1\', \'2\', \'3\', \'3\', \'4\')', () => {
		const result = getUnique('1', '1', '2', '3', '3', '4');
		expect(JSON.stringify(result))
			.to
			.equal(JSON.stringify(['1', '2', '3', '4']));
	});

});
