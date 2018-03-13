import {expect} from "chai";
import {isInArray} from "./isInArray";

describe("isInArray", () => {
    it("Empty array does not contain anything", () => {
        return expect(isInArray([], "uuu")).equals(false);
    });
    it("Array [1, 2, 2, '567567567', 'dsfsdg', 1] contains 2", () => {
        return expect(isInArray([1, 2, 2, "567567567", "dsfsdg", 1], 2)).equals(true);
    });
    it("Array [1, 2, 2, '567567567', 'dsfsdg', 1] contains 'dsfsdg'", () => {
        return expect(isInArray([1, 2, 2, "567567567", "dsfsdg", 1], "dsfsdg")).equals(true);
    });
    it("Array [1, 2, 2, '567567567', 'dsfsdg', 1] does not contains 5", () => {
        return expect(isInArray([1, 2, 2, "567567567", "dsfsdg", 5], "x")).equals(false);
    });
    it("Array [1, 2, 2, '567567567', 'dsfsdg', 1] does not contains 'x'", () => {
        return expect(isInArray([1, 2, 2, "567567567", "dsfsdg", 1], "x")).equals(false);
    });
});
