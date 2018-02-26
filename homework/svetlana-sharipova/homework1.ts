//1
function isInArray(a: any[], ...args: any[]) {
    if (args.length == 0)
      return false;
  
    return args.every((arg) => {
      return a.indexOf(arg) >=0;
    });
  }

  
  //2
function summator(...args: (number | string)[]) {

    var r: number = 0;
  
    for (let a of args) {
      typeof a === 'string' ? r += parseToInt(a) : r += a;
    }
    return r;
  
  }
  
  function parseToInt(a: string) {
  
    var r = parseInt(a);
    return isNaN(r) ? 0 : r;
  
  }

  //3
function getUnique(...args: any[]) {
    var res: any[] = [];
  
    for (let a of args) {
      if (res.indexOf(a) ==-1)
        res.push(a);
    }
  
    return res;
  
  }

 