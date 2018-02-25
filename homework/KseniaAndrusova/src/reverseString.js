"use strict";
/*
*  Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
   цифры и специальные символы должны остаться на месте
      s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
      s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
      s1tar3t 2   low5  ->  t1rat3s 2   wol5
*/
function isLetter(letter) {
    return /[a-z]/i.test(letter);
}
function reverseWord(word) {
    var wordLettersArray = word.split('').filter(function (letter) { return isLetter(letter); });
    var result = [];
    result = word.split('').map(function (letter) {
        if (isLetter(letter)) {
            return wordLettersArray.pop();
        }
        else {
            return letter;
        }
    });
    return result.join('');
}
function reverseSentence(text) {
    var words = text.split(' ');
    var reversedWords = words.map(function (word) { return reverseWord(word); });
    return reversedWords.join(' ');
}
console.info(reverseSentence('s1tar3t 2 hellow'));
console.info(reverseSentence('s1ta$%r3t 2 hel^low'));
console.info(reverseSentence('s1tar3t 2   low5'));
