const leap_year = require("./leap_year");

describe("Not divisible by 4 (not a leap year)", () => {
    test("The year 1999 is NOT divisible by 4", () => {
        expect(leap_year.isDivisibleBy4(1999)).not.toBe(0);
    });

    test("The year 1999 is NOT a leap year", () => {
        expect(leap_year.isLeapYear(1999)).toBeFalsy();
    });
});

describe("Divisible by 4 but NOT 100", () => {
    test("The year 2004 is divisible by 4", () => {
        expect(leap_year.isDivisibleBy4(2004)).toBe(0);
    });

    test("The year 2004 is NOT divisible by 100", () => {
        expect(leap_year.isDivisibleBy100(2004)).not.toBe(0);
    });

    test("The year 2004 is a leap year", () => {
        expect(leap_year.isLeapYear(2004)).toBeTruthy();
    });

});

describe("Divisible by 400", () => {
    test("The year 2000 is divisible by 400", () => {
        expect(leap_year.isDivisibleBy400(2000)).toBe(0);
    });

    test("The year 2000 is a leap year", () => {
        expect(leap_year.isLeapYear(2000)).toBeTruthy();
    });  
});

describe("Divisible by 100 but not 400 (not a leap year)", () => {
    test("The year 1900 is divisible by 100", () => {
        expect(leap_year.isDivisibleBy100(1900)).toBe(0);
    });

    test("The year 1900 is not divisible by 400", () => {
        expect(leap_year.isDivisibleBy400(1900)).not.toBe(0);
    });

    test("The year 1900 is not a leap year", () => {
        expect(leap_year.isLeapYear(1900)).toBeFalsy();
    });
});
























