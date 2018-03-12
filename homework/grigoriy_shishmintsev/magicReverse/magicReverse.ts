  // 4)
  //    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
  //    цифры и специальные символы должны остаться на месте
  //       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
  //       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
  //       s1tar3t 2   low5  ->  t1rat3s 2   wol5

  export const magicReverse = (input: string): string => {

    let words: string[] = input.split(' ');

    const revertWord = (word: string): string => {

      const symbols = [];

      const letters = word.split('');

      let i = letters.length;

      while (i--) {

        if (/[a-zA-Z]/i.test(letters[i]) !== false) {
          continue
        }
        const symbol = letters.splice(i, 1)[0];
        symbols.push({
          value: symbol,
          index: i
        });
      }

      letters.reverse();

      i = symbols.length;

      while (i--) {

        letters.splice(symbols[i].index, 0, symbols[i].value);
      }

      const out = letters.join('');

      return out;

    }

    words = words.map(word => revertWord(word));

    return words.join(' ');
  }