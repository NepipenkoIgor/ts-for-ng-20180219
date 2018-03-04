function isInArray(arrayToCompare: any[], ...anyArguments: any[]): boolean {
  if (Array.isArray(arrayToCompare) && arrayToCompare.length && Array.isArray(anyArguments) && anyArguments.length) {
    for (let arg of anyArguments) {
      return arrayToCompare.indexOf(arg) > -1;
    }
  } else {
    console.error('Check the arguments');
  }
}

function isInArrayTest() {
  let arg1 = [1, 2, 3];
  let arg2 = '1234431';
  let arg3 = {
    a: 11,
    b: 22,
    c: 33
  };
  let arg4 = function () {
    return true
  };
  let arg5 = 123431;
  let arrToCompare = [arg1, arg2, arg3];
  console.log('isInArray Result :' + isInArray(arrToCompare, arg1)); // true
  console.log('isInArray Result :' + isInArray(arrToCompare, arg1, arg2)); // true
  console.log('isInArray Result :' + isInArray(arrToCompare, arg1, arg2, arg3)); // true
  console.log('isInArray Result :' + isInArray(arrToCompare, arg1, arg2, arg3, arg4)); // false
  console.log('isInArray Result :' + isInArray(arrToCompare, arg1, arg2, arg3, arg4, arg5)); // false
}

isInArrayTest();