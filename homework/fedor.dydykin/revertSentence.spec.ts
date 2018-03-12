import {expect} from "chai";
import {revertSentence} from "./revertSentence";

describe("revertSentence", () => {
    it("s1tar3t 2 hellow  ->  t1rat3s 2 wolleh", () => {
        expect(revertSentence("s1tar3t 2 hellow")).equals("t1rat3s 2 wolleh");
    });
    it("s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh", () => {
        expect(revertSentence("s1ta$%r3t 2 hel^low")).equals("t1ra$%t3s 2 wol^leh");
    });
    it("s1tar3t 2   low5  ->  t1rat3s 2   wol5", () => {
        expect(revertSentence("s1tar3t 2   low5")).equals("t1rat3s 2   wol5");
    });
});
