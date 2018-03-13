// 4)
//    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5

export const magicReverse = (input: string): string => {

	let words: string[] = input.split(' ');

	const revertWord = (word: string): string => {

		interface ICharInfo {
			index: number;
			value: string;
		}

		const chars: ICharInfo[] = [];

		const letters: string[] = word.split('');

		let i: number = letters.length;

		while (i--) {

			if (/[a-zA-Z]/i.test(letters[i]) !== false) {
				continue;
			}

			const char: string = letters.splice(i, 1)[0];

			chars.push({
				index: i,
				value: char,
			});
		}

		letters.reverse();

		i = chars.length;

		while (i--) {

			letters.splice(chars[i].index, 0, chars[i].value);
		}

		const out: string = letters.join('');

		return out;

	};

	words = words.map((word) => revertWord(word));

	return words.join(' ');
};
