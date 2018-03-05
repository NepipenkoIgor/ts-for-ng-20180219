import { expect } from 'chai';
import { getUnique, isInArray, reverseWords, summator } from './homework1';

describe('isInArray', () => {
    it('should return true isInArray([1,"aaa", 2,3, "ww"],3,4,"aaa")', () => {
        const result = isInArray([1, 'aaa', 2, 3, 4, 'ww'], 3, 4, 'aaa');
        expect(result)
            .to
            .equal(true);
    });
});

describe('isInArray', () => {
    it('should return false isInArray([1,"aaa", 2,3, "ww"], 3 ,5, "aaa")', () => {
        const result = isInArray([1, 'aaa', 2, 3, 4, 'ww'], 3, 5, 'aaa');
        expect(result)
            .to
            .equal(false);
    });
});

describe('reverseWords', () => {
    it('should reverse "s1Tar3t 2 hellow" -> "t1raT3s 2 wolleh"', () => {
        const result = reverseWords('s1Tar3t 2 hellow');
        expect(result)
            .to
            .equal('t1raT3s 2 wolleh');
    });
});

describe('reverseWords', () => {
    it('should reverse "s1ta$%r3t 2 hel^loW" -> "t1ra$%t3s 2 Wol^leh"', () => {
        const result = reverseWords('s1ta$%r3t 2 hel^loW');
        expect(result)
            .to
            .equal('t1ra$%t3s 2 Wol^leh');
    });
});

describe('summator', () => {
    it('should return 27 summator(10, "qw", "-22", "6", 25, 8)', () => {
        const result = summator([10, 'qw', '-22', '6', 25, 8]);
        expect(result)
            .to
            .equal(27);
    });
});

describe('getUnique', () => {
    it('should return [10, "qw", "-22", 8] of [10, "qw", "-22", 8, "qw", 10, "-22", 8] ', () => {
        const result = getUnique(10, 'qw', '-22', 8, 'qw', 10, '-22', 8);
        const ar: (string | number)[] = [10, 'qw', '-22', 8];
        expect(result)
            .to.deep
            .equal(ar);
    });
});
