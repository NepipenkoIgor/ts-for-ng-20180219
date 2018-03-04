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

// type Acc<U, T> = {
//   id: U,
//   firstName: T
// }
// let a: Acc<number, string>
// let b: Acc<string, number>
//
// interface A<T extends { id: number, name: string }> {}
//
// let c: A<{ id: number, name: string, female: boolean }>
//
// function isString(a:number | string): a is string{
//   return typeof c === 'string'
// }
//
// function average(...a: (number | string)[]): number {
//   for (let c of a) {
//     if(isString(c)){
//       parseInt(c);
//     }else{
//       c
//     }
//
//   }
//   return 1;
// }
//
// average(1, 3, 4)

// class Point {
//   // public x: number;
//   // public y: number;
//
//   constructor(public x: number, public  y: number) {
//     // this.x = x;
//     // this.y = y;
//   }
//
//   public add() {
//     return this.x + this.y;
//   }
//
// }
//
// const point: Point = new Point(1, 2);

// class A {
//   public x: number;
//   protected z: number;
//   private y: number;
// }
//
// class B extends A {
//   constructor() {
//     super();
//     this.z
//   }
// }
//
// let a = new A();
// let b = new A();
// b.

// class Singleton {
//   public static getInstance() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }
//
//   private static instance: Singleton;
//
//   private constructor() {}
// }
//
// let e = Singleton.getInstance();

// abstract class C {
//   public getName(): string {
//     return "_12_name";
//   }
//
//   public abstract getItem(): number;
// }
//
// class E extends C {
//   public getItem() {
//     return 2;
//   }
// }

class MathLib {

  @logMethod
  public areaOfCircle(r: number): number {
    return Math.PI * r ** 2;
  }
}

function logMethod(target: any, key: string, descriptor: any): any {
  return {
    ...descriptor,
    value: (...args: any[]) => {
      const argsString: string = args.map((value) => JSON.stringify(value))
        .join();
      const result: any = descriptor.value(args);
      const strResult: string = JSON.stringify(result);
      console.log(`Call: ${key} (${argsString}) => ${strResult}`);
      return result;
    },
  };
}

const math: MathLib = new MathLib();
math.areaOfCircle(10);
math.areaOfCircle(77);
