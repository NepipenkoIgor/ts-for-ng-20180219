// interface IAccount {
//   firstname: string;
//   age: number;
// }
//
// let acoount = IAccount;

// let person = {
//   age: 32,
//   firstname: "Igor",
// };
//
// let myPerson: typeof person;
//
// myPerson = {
//   age: 12,
//   firstname: "Vlad",
// };
//
// class A {}
//
// let a: A;

// let a: string;
// let b: string = "str";
//
// let c = "str";
//
// c = 1;
//

// let a = 1;
// a = null;

// function a(): void {
//
// }

// let b: void;
// b = undefined;

// let a: any;
// a = true;
//
// let b: any;
// b.c = 1;

// let acc: {
//   readonly age: number,
//   readonly firstName?: string
// } = {
//   age:4,
// }
//
// //acc.age = 2;
//
// let stat: [string,string] = ['1','2'];
// stat[5] = '2'
// let c: ReadonlyArray<string> = ['1','2']
// c[4] = '2';

// let fun:  new (a: string) => boolean ;

// type Acc = {
//   readonly age: number,
//   readonly firstName?: string
// }
//
// let acc: Acc
//
// let acc1: Acc
//
// type g = { x?: g }
//
// let a: g = {x: {x: x:}}

//
// interface Acc {
//   age: number,
//   readonly firstName?: string
// }
//
// class A implements Acc {
//
//
// }

// interface Name {
//   firstName: string
//   getStatus: () => { isMale: boolean }
// }
//
// interface Age {
//   age: number
//   getStatus: () => { isOld: boolean }
// }
//
// interface Acc extends Name, Age {
//   getStatus: () => { isMale: boolean, isOld: boolean }
// }
//
// let a: Acc = {
//   firstName: 's',
//   age: 1,
//   getStatus: () => ({
//     isMale: true,
//     isOld: true
//   })
// }


// interface Name {
//   age: number
// }
//
// let a: Name = {
//   age: 2,
//   firstName: 2
// }
//
//
// interface Name {
//   firstName: number
// }

type Acc<U, T> = {
  id: U,
  firstName: T
}
let a: Acc<number, string>
let b: Acc<string, number>

interface A<T extends { id: number, name: string }> {}

let c: A<{ id: number, name: string, female: boolean }>

function isString(a:number | string): a is string{
  return typeof c === 'string'
}

function average(...a: (number | string)[]): number {
  for (let c of a) {
    if(isString(c)){
      parseInt(c);
    }else{
      c
    }

  }
  return 1;
}

average(1, 3, 4)