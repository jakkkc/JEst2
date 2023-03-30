const romanToDecimal = require("./romantoDecimal");
describe("romanToDecimal", () => {
  test("converts valid roman numerals to decimal", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("IV")).toBe(4);
    expect(romanToDecimal("IX")).toBe(9);
    expect(romanToDecimal("XIV")).toBe(14);
    expect(romanToDecimal("XXVII")).toBe(27);
    expect(romanToDecimal("XL")).toBe(40);
    expect(romanToDecimal("XCIX")).toBe(99);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("CDXCIX")).toBe(499);
    expect(romanToDecimal("D")).toBe(500);
    expect(romanToDecimal("CMXCIX")).toBe(999);
    expect(romanToDecimal("M")).toBe(1000);
    expect(romanToDecimal("MMMCMXCIX")).toBe(3999);
  });

  test("returns -1 for invalid roman numerals", () => {
    // expect(romanToDecimal("IIII")).toBe(-1);
    expect(romanToDecimal("IL")).toBe(-1);
    expect(romanToDecimal("IC")).toBe(-1);
    expect(romanToDecimal("ID")).toBe(-1);
    expect(romanToDecimal("IM")).toBe(-1);
    expect(romanToDecimal("XD")).toBe(-1);
    expect(romanToDecimal("XM")).toBe(-1);
    // expect(romanToDecimal("")).toBe(-1);
  });
});
