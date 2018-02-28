/**
 Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.
 * @param target
 * @param args
 * @returns {boolean}
 */
function isInArray(target : any[], ...args : any[]): boolean{
    if(!Array.isArray(target) || target.length == 0){
        return false;
    }
    for(let item of args){
        let checkIt = target.indexOf(item);
        if(checkIt < 0){
            return false;
        }
    }
    return true;
}

/**
 *  писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 * @param args
 * @returns {number}
 */
function summator(... args: (number | string)[]):number{
    let sum:number = 0;
    for (let arg of args){
        if(typeof arg === 'string'){
            sum += parseFloat(arg);
        } else {
            sum += arg;
        }
    }
    return sum;
}

/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.
 * @param args
 * @returns {any[]}
 */
function getUnique(...args:any[]):any[]{
    let result:any[] = [];
    for(let item of args){
        let i = result.indexOf(item);
        if(i == -1){
            result.push(item);
        }
    }
    return result;
}


function revers(word:string):string{
    let result = word;
    let lettersArray = [];
    for(let i=0; i<word.length; i++){
        let symbol = word[i];
        if(symbol.match(/[A-Za-zА-Яа-яё]+/gi)){
            lettersArray.push(symbol);
        }
    }
    for(let i=0, j = lettersArray.length; i<word.length; i++){
        let symbol = word[i];
        if(symbol.match(/[A-Za-zА-Яа-яё]+/i)){
            j--;
            result = result.substr(0,i) + lettersArray[j] + result.substr(i+1);
        }
    }
return result;
}

/**
 * Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 цифры и специальные символы должны остаться на месте
 s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 s1tar3t 2   low5  ->  t1rat3s 2   wol5
 * @param word
 * @returns {string}
 */
function reverSentence(sentence:string):string{
    let result:string = "";
    for(let word of sentence.split(" ")){
        result += revers(word) + " ";
    }
    return result;
}

let x = isInArray(undefined);
let x2 = isInArray(null);
let x3 = isInArray([]);
let x4 = isInArray([1, '3432', {x:12.5}], 1, '3432');
let x41 = isInArray([1, '3432', {x:12.5}], 2);
let newVar = {x:12.5};
let x5 = isInArray([1, '3432', newVar], newVar);
let x51 = isInArray([1, '3432', {x:12.5}], {x:12.5});


console.log(`x = ${x}`)
console.log(`x2 = ${x2}`)
console.log(`x3 = ${x3}`)
console.log(`x4 = ${x4}`)
console.log(`x41 = ${x41}`)
console.log(`x5 = ${x5}`)
console.log(`x51 = ${x51}`)

console.log('sum = '+summator(1, '10', 10.1, '100.2'));

console.log('umique = '+getUnique('err', 'err', 'xxx', 'err', 12, 5, newVar, 5, 5, 12, 5, {x:12.5}, 4));

console.log("revers: s1tar3t 2 hellow = "+reverSentence("s1tar3t 2 hellow"));
console.log("revers: s1ta$%r3t 2 hel^low = "+reverSentence("s1ta$%r3t 2 hel^low"));
console.log("revers: s1tar3t 2   low5 = "+reverSentence("s1tar3t 2   low5"));
