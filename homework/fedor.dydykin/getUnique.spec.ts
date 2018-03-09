import {expect} from "chai";
import {getUnique} from "./getUnique";

describe("getUnique", () => {
    it("getUnique('err', 'err', 'xxx', 'err', 12, 5, 5, 5, 12, 5, 4) = [ 'err', 'xxx', 12, 5, 4]", () => {
        const target = JSON.stringify(getUnique("err", "err", "xxx", "err", 12, 5, 5, 5, 12, 5, 4));
        const value = JSON.stringify([ "err", "xxx", 12, 5, 4]);
        expect(target).equals(value);
    });
});
