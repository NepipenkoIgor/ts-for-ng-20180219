function summator(...params: (string | number)[]): number {
  let sum: number = 0;
  for (let i of params) {
    if (typeof i === 'string') {
      let stringToNumber: number = parseFloat(i);
      if (isNaN(stringToNumber) === false || isFinite(stringToNumber) === false) {
        sum += stringToNumber;
      }
    } else if (typeof i === 'number') {
      sum += i;
    } else {
      console.error('entered param is not number or string');
    }
  }
  return sum;
}

console.log('summator = 106  -> ' + summator(1, 2, '1', '2', 100)); //106