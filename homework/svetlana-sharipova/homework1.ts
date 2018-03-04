//1
function isInArray(a: any[], ...args: any[]) {
  if (args.length == 0) {
    return false;
  }

  return args.every((arg) => {
    return a.indexOf(arg) >= 0;
  });
}


//2
function summator(...args: (number | string)[]) {

  var r: number = 0;

  for (let a of args) {
    typeof a === 'string'
      ? r += parseToInt(a)
      : r += a;
  }
  return r;

}

function parseToInt(a: string) {

  var r = parseInt(a);
  return Number.isNaN(r)
    ? 0
    : r;

}

//3
function getUnique(...args: any[]) {
  var res: any[] = [];

  for (let a of args) {
    if (res.indexOf(a) == -1) {
      res.push(a);
    }
  }

  return res;

}

//4
function reverseWords(input: string): string {
  let res: string = "";

  let input_split: string[] = input.split(' ');

  for (let s in input_split) {
    let charArray = s.split('');

    //перевернутая строка без символов
    let nosymbols = charArray.filter(c => isLetter(c))
      .reverse();

    let tmp = nosymbols.join("");
    for (let i = 0; i < charArray.length; i++) {
      if (!isLetter(charArray[i])) {
        tmp = [tmp.slice(0, i), charArray[i], tmp.slice(i)].join('');
      }
    }

    res += tmp + " ";
  }

  return res.trim();
}

function isLetter(str: string) {
  return str.length === 1 && str.match(/[a-z]/i);
}


console.log(reverseWords("s1tar3t 2 hellow"));