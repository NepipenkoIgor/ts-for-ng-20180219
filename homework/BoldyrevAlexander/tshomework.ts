//isInArray
function isInArray(arr:Array<any>, ...rest:Array<any>):boolean{
    let checkErrors = false
    rest.forEach(item => {
        if(arr.indexOf(item) === -1) checkErrors = true
    })
    return !checkErrors
}
//test isInArray
const testArr = [1,2,3]
console.log("isInArray", isInArray(testArr, 3, 4, 3, 3)) //false
//end isInArray

//summator
function summator(...rest:Array<number | string>): number {
    let result = 0;
    rest.forEach((item) => {
        item = +item
        if(item) result += item
    })
    return result
}
//test summator
console.log("summator", summator(1, '2', 0, "something")) // 3
//end summator

//getUnique
function getUnique(arr:Array<any>):Array<any>{
    return arr.filter((v, i, a) => a.indexOf(v) === i)
}
//test getUnique
console.log("getUnique", getUnique([1, 2, 1, "test", "1", "test"])) //[ 1, 2, 'test', '1' ]
//end getUnique

//reversLetters
function reversLetters(str:string):string{
    const reqExp = /[A-zА-яЁё]/
    let wordArr = str.split(" ")
    wordArr = wordArr.map(word => {
        const sybolArr = word.split("")
        const notSymbolArr:string[] = []
        const symbolArrFilter = sybolArr.filter((letter, index) => {
            if(!reqExp.test(letter)) notSymbolArr[index] = letter
            return reqExp.test(letter)
        }).reverse()
        notSymbolArr.forEach((notChart, index) => {
            if(notChart !== undefined){
                symbolArrFilter.splice(index, 0, notChart)
            }
        })
        return symbolArrFilter.join("")
    })
    return wordArr.join(" ")
}
//test reversLetters
console.log("reversLetters", reversLetters("s1tar3t 2 hellow")) //t1rat3s 2 wolleh
console.log("reversLetters", reversLetters("s1ta$%r3t 2 hel^low")) //t1ra$%t3s 2 wol^leh
console.log("reversLetters", reversLetters("s1tar3t 2   low5")) //t1rat3s 2   wol5
//end reversLetters