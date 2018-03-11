import { isInArray } from './isInArray';
import { summator } from './summator';
import { getUnique } from './getUnique';
import { magicReverse } from './magicReverse';

(function () {

  const res1 = isInArray([1, 2], 1, 2, 5);
  const res2 = isInArray([1, 2], 1, 2);
  const res3 = isInArray([1, 2], 2);

  console.log('isInArray', res1, res2, res3);

})();

(function () {


  const res1 = summator(1, '2');
  const res2 = summator('3', 2);

  console.log('summator', res1, res2);

})();

(function () {

  const res1 = getUnique(1, 1, 2, 3, 3, 4);

  console.log('getUnique', res1);

})();

(function () {


  const res1 = magicReverse('s1tar3t 2 hellow') === 't1rat3s 2 wolleh';
  const res2 = magicReverse('s1ta$%r3t 2 hel^low') === 't1ra$%t3s 2 wol^leh';
  const res3 = magicReverse('s1tar3t 2   low5') === 't1rat3s 2   wol5';

  console.log('magicReverse', res1, res2, res3);
})();