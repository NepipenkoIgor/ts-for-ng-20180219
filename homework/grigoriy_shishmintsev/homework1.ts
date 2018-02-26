(function() {

    // 1)
    //   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    //   Возвращает true, если все аргументы, кроме первого входят в первый.
    //   Первым всегда должен быть массив.

    const isInArray = (arr: any[], ...items: any[]): Boolean => {
    
        return items.every(item => {
            return Boolean(arr.indexOf(item) !== -1);
        });
    }
    
    const res1 = isInArray([1, 2], 1, 2, 5);
    const res2 = isInArray([1, 2], 1, 2);
    const res3 = isInArray([1, 2], 2);
    
    console.log('isInArray', res1, res2, res3);

})();

(function() {
    
    // 2)
    //  писать функцию summator(), которая сумирует переданые ей аргументы.
    //  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
    
    const summator = (...args: (number | string)[]) : number => {

        const parsed : number[] = args.map(item => {
            if (typeof item === 'string') {
                return parseInt(item);
            } else {
                return item;
            }
        });
    
        return parsed.reduce( (acc, curr) => acc += curr, 0);    
    }
    
    const res1 = summator(1, '2');
    const res2 = summator('3', 2);
    
    console.log('summator', res1, res2);
    
})();
    
(function() {
    
    // 3)
    //   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    //   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    //   Порядок элементов результирующего массива должен совпадать с порядком,
    //   в котором они встречаются в оригинальной структуре.
    
    
    const getUnique = (...arr: any[]): any[] => {

        const unique: any[] = [];
    
        arr.forEach(item => {
            if (unique.indexOf(item) === -1) {
                unique.push(item);
            }
        });
    
        return unique;
    } 
    
    const res1 = getUnique(1, 1, 2, 3, 3, 4);
    
    console.log('getUnique', res1);
    
})();
    
(function() {
    // 4)
    //    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
    //    цифры и специальные символы должны остаться на месте
    //       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
    //       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
    //       s1tar3t 2   low5  ->  t1rat3s 2   wol5
    
    const magicReverse = (input: string): string => {
        
        let words: string[] = input.split(' ');
    
        const revertWord = (word: string): string => {
            
            const symbols = [];
    
            const letters = word.split('');
    
            let i = letters.length;
    
            while (i--) {
    
                if (/[a-zA-Z]/i.test(letters[i]) === false) {
                    const symbol = letters.splice(i, 1)[0];
                    symbols.push({
                        value: symbol,
                        index: i
                    });
                }
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
    
    const res1 = magicReverse('s1tar3t 2 hellow') === 't1rat3s 2 wolleh';
    const res2 = magicReverse('s1ta$%r3t 2 hel^low') === 't1ra$%t3s 2 wol^leh';
    const res3 = magicReverse('s1tar3t 2   low5') === 't1rat3s 2   wol5';
    
    console.log('magicReverse', res1, res2, res3);
})();
    
    