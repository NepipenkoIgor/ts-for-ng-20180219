function isLetter(symbol: string) {
    return symbol.match(/[A-Za-zА-Яа-яё]+/gi);
}

function revers(word: string): string {
    let result = word;
    const lettersArray = [];
    for (const symbol of word) {
        if (isLetter(symbol)) {
            lettersArray.push(symbol);
        }
    }
    for (let i = 0, j = lettersArray.length; i < word.length; i++) {
        const symbol = word[i];
        if (isLetter(symbol)) {
            j--;
            result = result.substr(0, i) + lettersArray[j] + result.substr(i + 1);
        }
    }
    return result;
}

/**
 * Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 * цифры и специальные символы должны остаться на месте
 * s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 * s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 * s1tar3t 2   low5  ->  t1rat3s 2   wol5
 * @param sentence
 * @returns {string}
 */
export function revertSentence(sentence: string): string {
    let result: string = "";
    for (const word of sentence.split(" ")) {
        result += revers(word) + " ";
    }
    return result.slice(0, result.length - 1);
}
