function reverseString(text: string): string {
    const reg = /[a-zA-Z]/;
    let newString: string = text.split(' ')
        .map(word => {
            let anySymbolsArr: string[] = word.split('');
            let lettersArr: string[] = anySymbolsArr.filter(letter => reg.test(letter));
            let reverseArr: string[] = anySymbolsArr.map(str => reg.test(str) ? lettersArr.pop() : str);

            return reverseArr.join('');
        }).join(' ');

    return newString;
}

console.log(reverseString('s1tar3t 2 hellow'));//t1rat3s 2 wolleh
console.log(reverseString('s1ta$%r3t 2 hel^low'));//t1ra$%t3s 2 wol^leh
console.log(reverseString('s1tar3t 2   low5'));//t1rat3s 2   wol5