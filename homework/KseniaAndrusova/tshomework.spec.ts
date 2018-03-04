import { expect } from 'chai';

import { getUnique } from './src/getUnique';
import { pushIfUnique } from './src/getUnique';
import { isInArray } from './src/isInArray';
import { isLetter } from './src/reverseString';
import { reverseWord } from './src/reverseString';
import { reverseSentence } from './src/reverseString';
import { summator } from './src/summator';

describe('isInArray', () => {
	it('should return false isInArray([1, 2, 3], 3, 4, 5)', () => {
		const result = isInArray([1, 2, 3], 3, 4, 5);
		expect(result).to.be.false;
	});

	it('should return true isInArray([1, 8, 3, 5, \'apple\'], 1, \'apple\', 8)', () => {
		const result = isInArray([1, 8, 3, 5, 'apple'], 1, 'apple', 8);
		expect(result).to.be.true;
	});
});

describe('summator', () => {
	it('should accept numbers and string, return their sum and don\'t fail', () => {
		const result = summator(6, 10, '22', 13, '11.22', 'apple');
		expect(result).to.equal(62.22);
	});
});

describe('get unique', () => {
	describe('push if unique', () => {
		it('should push value if array doesn\'t contain it yet', () => {
			const result = pushIfUnique([1, 2, 3, 45], 4);
			expect(result).to.eql([1, 2, 3, 45, 4]);
		});

		it('should not push value if array already contain it', () => {
			const result = pushIfUnique([1, 2, 3, 45], 3);
			expect(result).to.eql([1, 2, 3, 45]);
		});
	});

	describe('get unique', () => {
		it('return array of unique elements from passed values', () => {
			const result = getUnique(25, 2, 3, 25, 'apple', 3, 'apple', 'lemon', 1);
			expect(result).to.eql([25, 2, 3, 'apple', 'lemon', 1]);
		});
	});
});

describe('reverse string', () => {
	it('isLetter() should return true if string is a letter', () => {
		expect(isLetter('a')).to.be.true;
		expect(isLetter('Z')).to.be.true;
	});

	it('isLetter() should return false if string is not a letter', () => {
		expect(isLetter('%')).to.be.false;
		expect(isLetter('1')).to.be.false;
	});

	it('reverseWord() should reverse letter in word, but keep numbers and special symbols on original places', () => {
		const result = reverseWord('s1ta$%r3t');
		expect(result).to.equal('t1ra$%t3s');
	});

	it('reverseSentence() should reverse letters in all words', () => {
		const result = reverseSentence('s1ta$%r3t 2 hel^low');
		expect(result).to.equal('t1ra$%t3s 2 wol^leh');
	});
});
