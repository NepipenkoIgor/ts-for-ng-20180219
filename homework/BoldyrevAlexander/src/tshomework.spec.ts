import { expect } from "chai"
import { getUnique, isInArray, reversLetters, summator } from "./tshomework"

describe("isInArray", () => {
  it("should return false isInArray([1,2,3],3,4,5)", () => {
    const result = isInArray([1, 2, 3], 3, 4, 5)
    expect(result)
      .to
      .equal(false)
  })
  it("should return true isInArray([1,2,3],3,2,1)", () => {
    const result = isInArray([1, 2, 3], 3, 2, 1)
    expect(result)
      .to
      .equal(true)
  })
})

describe("summator", () => {
  it("should return 3  summator(1, '2', 0, 'something')", () => {
    const result = summator(1, "2", 0, "something")
    expect(result)
    .to
    .equal(3)
  })
})

describe ("getUnique", () => {
  it("should return [ 1, 2, 'test', '1' ] getUnique([1, 2, 1, 'test', '1', 'test']", () => {
    const result = getUnique([1, 2, 1, "test", "1", "test"])
    expect(result)
    .to
    .eql([ 1, 2, "test", "1" ])
  })
})

describe("reversLetters", () => {
  it("should return 't1rat3s 2 wolleh' reversLetters('s1tar3t 2 hellow')", () => {
    const result = reversLetters("s1tar3t 2 hellow")
    expect(result)
    .to
    .equal("t1rat3s 2 wolleh")
  })

  it("should return 't1ra$%t3s 2 wol^leh' reversLetters('s1ta$%r3t 2 hel^low')", () => {
    const result = reversLetters("s1ta$%r3t 2 hel^low")
    expect(result)
    .to
    .equal("t1ra$%t3s 2 wol^leh")
  })

  it("should return 't1rat3s 2   wol5' reversLetters('s1tar3t 2   low5')", () => {
    const result = reversLetters("s1tar3t 2   low5")
    expect(result)
    .to
    .equal("t1rat3s 2   wol5")
  })
})
