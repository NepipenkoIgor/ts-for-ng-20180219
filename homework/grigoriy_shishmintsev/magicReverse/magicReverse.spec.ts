import { expect } from 'chai';
import { magicReverse } from './magicReverse';

describe('magicReverse', () => {

	it('s1tar3t 2 hellow  ->  t1rat3s 2 wolleh', () => {
		const result = magicReverse('s1tar3t 2 hellow');

		expect(result)
			.to
			.equal('t1rat3s 2 wolleh');
	});

	it('s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh', () => {
		const result = magicReverse('s1ta$%r3t 2 hel^low');

		expect(result)
			.to
			.equal('t1ra$%t3s 2 wol^leh');
	});

	it('s1tar3t 2   low5  ->  t1rat3s 2   wol5', () => {
		const result = magicReverse('s1tar3t 2   low5');

		expect(result)
			.to
			.equal('t1rat3s 2   wol5');
	});

});
