// 1
export function isInArray(a: (number | string)[], ...args: (number | string)[]) {
  if (args.length === 0) {
    return false;
  }
  return args.every((arg) => {
    return a.indexOf(arg) >= 0;
  });
}

// 2
export function summator(arr: (number | string)[]) {
   return arr.reduce((a, b) => parseToInt(a) + parseToInt(b));
}

function parseToInt(a: string | number): number {
  if (typeof a === 'string') {
      const r: number = parseInt(a, 10);
      return isNaN(r) ? 0 : r;
  } else {return  a; }
}

// 3
export function getUnique(...args: (string | number)[]) {
  const res: (string | number)[] = [];

  for (const a of args) {
    if (!res.includes(a)) {
      res.push(a); }
  }

  return res;
}

// 4
export function reverseWords(input: string): string {
  let res: string = '';

  const inputSplit: string[] = input.split(' ');

  for (const s of inputSplit) {
    const charArray = s.split('');

    // перевернутая строка без символов
    const nosymbols = charArray.filter((c) => isLetter(c)).reverse();

    let tmp = nosymbols.join('');
    for (let i = 0; i < charArray.length; i++) {
      if (!isLetter(charArray[i])) {
        tmp = [tmp.slice(0, i), charArray[i], tmp.slice(i)].join('');
      }
    }

    res += `${tmp} `;
  }
  return res.trim();
}

function isLetter(str: string) {
  // case-insensitive
  return str.length === 1 && str.match(/[a-z]/i);
}
