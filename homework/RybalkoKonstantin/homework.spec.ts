import { expect } from 'chai'
import { isInArray, summator, getUnique, smartReverse } from '../RybalkoKonstantin/index.ts'

describe('testing func-s', ()=> {
    it('isInArray', ()=> {
        expect(isInArray([1, 2, 'lalal'], 1, 2)).to.equal(true);
        expect(isInArray([1, 2, 'lalal'], 1, 2, 'bla-bla')).to.equal(false);
    });

    it('summator', ()=> {
        expect(summator(1, 2, 7)).to.equal(10);
        expect(summator(1, '12', 7)).to.equal(20);
    });

    it('getUnique', ()=> {
        expect(getUnique(1, '2', true, '3', 2, 1, true)).to.have.members([1, '2', true, '3', 2]);
        expect(getUnique(1, '2', true, '3', 2, 1, true)).to.have.length(5);
    });

    it('smartReverse', ()=> {
        const testingVariants = [{str: 's1tar3t 2 hellow', res: 't1rat3s 2 wolleh'},
            {str: 's1ta$%r3t 2 hel^low', res: 't1ra$%t3s 2 wol^leh'},
            {str: 's1tar3t 2   low5', res: 't1rat3s 2   wol5'}]

        testingVariants.forEach(({str, res}:any) => {
            const myRes = smartReverse(str);

            expect(myRes).to.equal(res)
        })
    })
})