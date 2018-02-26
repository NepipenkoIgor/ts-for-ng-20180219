/*
*  Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
   цифры и специальные символы должны остаться на месте
      s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
      s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
      s1tar3t 2   low5  ->  t1rat3s 2   wol5
*/

function isLetter(letter: string): boolean {
	return /[a-z]/i.test(letter);
}

function reverseWord(word: string): string {
	const wordLettersArray: string[] = word.split('').filter((letter) => isLetter(letter));
	let result: string[] = [];

	result = word.split('').map((letter) => {
		if (isLetter(letter)) {
			return wordLettersArray.length && wordLettersArray.pop() || '';
		} else {
			return letter;
		}
	});

	return result.join('');

}

function reverseSentence(text: string): string {
	let words: string[] = text.split(' ');
	let reversedWords: string[] = words.map((word) => reverseWord(word));
	return reversedWords.join(' ');
}

console.info(reverseSentence('s1tar3t 2 hellow'));
console.info(reverseSentence('s1ta$%r3t 2 hel^low'));
console.info(reverseSentence('s1tar3t 2   low5'));
