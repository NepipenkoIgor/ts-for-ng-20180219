type StringNumber = string | number

export function isInArray(arr:(StringNumber | boolean)[], ...args:(StringNumber | boolean)[]):boolean | void {
    const isInArr = (arr:(StringNumber | boolean)[], _item:(StringNumber | boolean)):boolean => Boolean(arr.indexOf(_item) + 1);
    return args.every((_item):any => isInArr(arr, _item))
}

export function summator(...args:(StringNumber)[]):number {
    const reduceCallback = (previousValue:number, currentValue:StringNumber):number => {
        return previousValue + Number(currentValue)
    };
    return args.reduce(reduceCallback)
}

export function getUnique(...arr:(StringNumber | boolean)[]):(StringNumber | boolean)[] {
    const isIncludes = (arr:(StringNumber | boolean)[], item:StringNumber | boolean):boolean => !arr.includes(item);
    const isItemUnique = (arr:(StringNumber | boolean)[], item:StringNumber | boolean):(StringNumber | boolean)[] => {
        if (isIncludes(arr, item)) {
            arr.push(item)
        }
        return arr
    };

    return arr.reduce(isItemUnique, [])
}

interface MyObj {
    position:number;
    letter:string
}

export function smartReverse(str:string = 'hellow world'):string {
    const splitedStr:string[] = str.split(' ');
    const resArr:string[] = [];

    splitedStr.forEach((word:string)=> {
        const fixedArr:MyObj[] = [];
        const regExp:RegExp = /[a-zA-Z]/i;
        const isReversSymbol = (symbol:string):boolean => regExp.test(symbol);

        const wordArr:string[] = word
            .split('')
            .filter((symbol, index)=> {
                const obj:MyObj = {position: index, letter: symbol};
                const isSymbol = isReversSymbol(symbol);
                if (isSymbol) {
                    return symbol
                }
                fixedArr.push(obj)
            })
            .reverse();

        fixedArr.forEach(({position, letter})=> wordArr.splice(position, 0, letter));

        resArr.push(wordArr.join(''))
    })

    return resArr.join(' ')
}