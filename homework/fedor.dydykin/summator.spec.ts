import {expect} from "chai";
import {summator} from "./summator";

describe("summator", () => {
   it("summator(1, \"10\", 10.1, \"100.2\") === 121.3", () => {
       const value = Number(121.3).toFixed(2);
       expect(summator(1, "10", 10.1, "100.2").toFixed(2)).equals(value);
   });
   it("summator() === 0", () => {
        expect(summator()).equals(0);
    });
});
