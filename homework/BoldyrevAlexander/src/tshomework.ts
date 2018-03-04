type AllTypes = string | number | boolean
type StringNumber = string | number
// isInArray
export function isInArray(arr: AllTypes[], ...rest: AllTypes[]): boolean {
  const checkErrors: boolean = rest.some((item: AllTypes) => {
      return !arr.includes(item)
  })
  return !checkErrors
}
// test isInArray
const testArr = [1, 2, 3]
console.log("isInArray", isInArray(testArr, 3, 2, 3, 3)) // true
// end isInArray

// summator
export function summator(...rest: StringNumber []): number {
  const result: number = rest.reduce<number>((acc: number, item: AllTypes) => {
    item = +item
    if (!Number.isNaN(item) && typeof(item) === "number") {return acc + item}
    return acc
  }, 0)
  return result
}
// test summator
console.log("summator", summator(1, "2", 0, "something")) // 3
// end summator

// getUnique
export function getUnique(arr: AllTypes[]): AllTypes[] {
  return arr.filter((v: AllTypes, i: number, a: AllTypes[]) => a.indexOf(v) === i)
}

// test getUnique
console.log("getUnique", getUnique([1, 2, 1, "test", "1", "test"])) // [ 1, 2, "test", '1' ]
// end getUnique

// reversLetters
export function reversLetters(str: string): string {
  const regExp: RegExp = /[A-zА-яЁё]/
  let wordArr: string[] = str.split(" ")
  wordArr = wordArr.map((word: string) => {
    const symbolArr: string[] = word.split("")
    const notSymbolArr: string[] = []
    const symbolArrFilter: string[] = symbolArr.filter((letter: string, index: number) => {
      if (!regExp.test(letter)) {
        notSymbolArr[index] = letter
      }
      return regExp.test(letter)
    }).reverse()
    notSymbolArr.forEach((notChart: string, index: number) => {
      if (notChart !== undefined) {
        symbolArrFilter.splice(index, 0, notChart)
      }
    })
    return symbolArrFilter.join("")
  })
  return wordArr.join(" ")
}

// test reversLetters
console.log("reversLetters", reversLetters("s1tar3t 2 hellow")) // t1rat3s 2 wolleh
console.log("reversLetters", reversLetters("s1ta$%r3t 2 hel^low")) // t1ra$%t3s 2 wol^leh
console.log("reversLetters", reversLetters("s1tar3t 2   low5")) // t1rat3s 2   wol5
// end reversLetters
