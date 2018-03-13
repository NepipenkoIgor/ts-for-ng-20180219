/*
*  Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
   цифры и специальные символы должны остаться на месте
      s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
      s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
      s1tar3t 2   low5  ->  t1rat3s 2   wol5
*/

export function isLetter(letter: string): boolean {
	return /[a-zA-Z]/i.test(letter);
}

export function reverseWord(word: string): string {
	const wordLettersArray: string[] = word.split('').filter((letter) => isLetter(letter));
	const result: string[] = word.split('').map((letter) => {
		if (isLetter(letter)) {
			return wordLettersArray.length && wordLettersArray.pop() || '';
		}
		return letter;
	});
	return result.join('');
}

export function reverseSentence(text: string): string {
	const words: string[] = text.split(' ');
	const reversedWords: string[] = words.map((word) => reverseWord(word));
	return reversedWords.join(' ');
}
