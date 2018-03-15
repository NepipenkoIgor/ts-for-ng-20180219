import {expect} from 'chai';
import {getUnique} from './getUnique';
import {isInArray} from './isInArray';
import {reverseString} from './reverseSting';
import {summator} from './summator';

describe('getUnique', () => {
    it('should return ["a","b","c",1,2,3] getUnique("a","a","b","b","c",1,1,2,2,3,3)', () => {
        const result = getUnique('a', 'a', 'b', 'b', 'c', 'c', 1, 1, 2, 2, 3, 3);
        expect(result)
            .to
            .deep
            .equal(['a', 'b', 'c', 1, 2, 3]);
    });
});

describe('isInArray', () => {
    it('should return false isInArray(1,2,3,4) compare to (4,5,6)', () => {
        const result = isInArray([1, 2, 3], 4, 5, 6);
        expect(result)
            .to
            .equal(false);
    });
    it('should return true isInArray(1,2,3,4) compare to (1,2,3)', () => {
        const result = isInArray([1, 2, 3], 1, 2, 3);
        expect(result)
            .to
            .equal(true);
    });
});

describe('reverseString', () => {
    it('should return "t1rat3s 2 wolleh" from reverseString(s1tar3t 2 hellow)', () => {
        const result = reverseString('s1tar3t 2 hellow');
        expect(result)
            .to
            .equal('t1rat3s 2 wolleh');
    });
    it('should return "t1ra$%t3s 2 wol^leh" from reverseString(s1ta$%r3t 2 hel^low)', () => {
        const result = reverseString('s1ta$%r3t 2 hel^low');
        expect(result)
            .to
            .equal('t1ra$%t3s 2 wol^leh');
    });
    it('should return "t1rat3s 2   wol5" from reverseString(s1tar3t 2   low5)', () => {
        const result = reverseString('s1tar3t 2   low5');
        expect(result)
            .to
            .equal('t1rat3s 2   wol5');
    });
});

describe('summator', () => {
    it('should return 106 from summator(1,2,"1","2",100)', () => {
        const result = summator(1, 2, '1', '2', 100);
        expect(result)
            .to
            .equal(106);
    });
});
