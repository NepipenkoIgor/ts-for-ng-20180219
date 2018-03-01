function isInArray(arr:(boolean | number | string)[], ...args:(boolean | number | string)[]):boolean | void {
    for (let _item of args) {
        const isInArr = arr.indexOf(_item) + 1
        console.log(`массив ${JSON.stringify(arr)}, есть ли аргумент ${_item}? Ответ: ${JSON.stringify(!!isInArr)}`)
        if (!isInArr) {
            console.error('Что-то пошло не так, все пропало!')
            return undefined
        }
    }
    console.log('Все аргументы вошли в массив!!!')
    return true
}

isInArray([1, 2, 'lalal'], 1, 2)
isInArray([1, 2, 'lalal'], 1, 2, 'blablabla')

/*----------*/

function summator(...args:(string | number)[]):number {
    let sum = 0
    args.forEach((item)=> {
        if (typeof item === 'string') {
            sum += +item
        } else {
            sum += item
        }
    })
    console.log(`Сумма массива ${JSON.stringify(args)} = ${sum}`)
    return sum
}

summator(1, 2, 7)
summator(1, '12', 7)

/*----------*/

function getUnique(...args:any[]):any[] {
    console.log(`возвращаем ${JSON.stringify(args)}`)

    return args
}

getUnique(1, '2', true, {a: 'a'})

/*----------*/

interface MyObj {
    position:string;
    letter:string
}
function smartReverse(str:string = 'hellow world'):string {
    const splitedStr:string[] = str.split(' ')
    const resArr:string[] = []

    splitedStr.forEach((word:any)=> {
        const wordArr:string[] = []
        const fixedArr:any[] = []

        // const isLetter = (_letter) => regExp.test(_letter) - не понял как оформить
        function isLetter(_letter:string):boolean {
            const regExp:any = /[a-zA-Z]/i
            return regExp.test(_letter)
        }

        for (let letter in word) {
            const index:string = letter
            const symbol:string = word[index]

            if (isLetter(symbol)) {
                wordArr.unshift(symbol)
            } else {
                const obj:MyObj = {position: index, letter: symbol}
                fixedArr.push(obj)
            }
        }
        fixedArr.forEach(({position, letter})=> {
            wordArr.splice(position, 0, letter)
        })
        resArr.push(wordArr.join(''))
    })

    return resArr.join(' ')
}

[{str: 's1tar3t 2 hellow', res: 't1rat3s 2 wolleh'},
    {str: 's1ta$%r3t 2 hel^low', res: 't1ra$%t3s 2 wol^leh'},
    {str: 's1tar3t 2   low5', res: 't1rat3s 2   wol5'}].forEach(({str, res}:any) => {
    const myRes = smartReverse(str) // str подчеркнул
    console.log(`из ${str} -> ${res}, получили ${myRes}. Итого ${res} === ${myRes} = ${res == myRes}`) // === линтер не понял
})