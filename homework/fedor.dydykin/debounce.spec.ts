import {expect} from "chai";
import {debounce} from "./debounce";

class Test {
    @debounce(1000)
    public testme(testData?: string): string | undefined {
        console.log("started testme", testData, new Date());
        return testData;
    }
}

console.log(new Test().testme("1111"), new Date());
console.log(new Test().testme("2222"), new Date());
console.log(new Test().testme("3333"), new Date());
setTimeout( () => {
    console.log(new Test().testme("x1111"), new Date());
    setTimeout( () => {
        console.log(new Test().testme("x2222"), new Date());
        console.log(new Test().testme("x3333"), new Date());
    }, 3000);
}, 3000);

describe("debounce", () => {
    it("вызывает функцию не чаще чем раз в ms миллисекунд", () => {
        expect("x").equals("x");
    });

    it("сохраняет контекст вызова", () => {
        expect("x").equals("x");
    });

    it("сохраняет все аргументы", () => {
        expect("x").equals("x");
    });

});
