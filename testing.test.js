const {test, expect} = require("@jest/globals");
const testing = require("./testing");
test("gradefinder(9, [A+, B+, A], [3, 3, 3]) should be 4", () => {
    expect(testing.gradefinder(9, [
        "A+", "B+", "A"
    ], [3, 3, 3])).toBe(4);
});
test("gradefinder(10, [A+, B+, A, B], [3, 3, 2, 2]) should be 3.8", () => {
    expect(testing.gradefinder(10, [
        "A+", "B+", "A", "B"
    ], [3, 3, 2, 2])).toBe(3.8);
});
test(
    "gradefinder(16, [A+, B+, C+, B, A, C], [3, 3, 3, 3, 2, 2]) should be 3.28125",
    () => {
        expect(testing.gradefinder(16, [
            "A+",
            "B+",
            "C+",
            "B",
            "A",
            "C"
        ], [
            3,
            3,
            3,
            3,
            2,
            2
        ])).toBe(3.28125);
    }
);
test(
    "gradefinder(24, [A, B+, B, C+, C, A, B+, B, C+, D+], [3, 3, 3, 3, 2, 2, 2, 2, " +
            "2, 2]) should be 3",
    () => {
        expect(testing.gradefinder(24, [
            "A",
            "B+",
            "B",
            "C+",
            "C",
            "A",
            "B+",
            "B",
            "C+",
            "D+"
        ], [
            3,
            3,
            3,
            3,
            2,
            2,
            2,
            2,
            2,
            2
        ])).toBe(3);
    }
);
test(
    "gradefinder(30, [A+, A, B+, B, C+, C, A+, A, B+, B, C+, C], [3, 3, 3, 3, 3, 3," +
            " 2, 2, 2, 2, 2, 2]) should be 3.25",
    () => {
        expect(testing.gradefinder(30, [
            "A+",
            "A",
            "B+",
            "B",
            "C+",
            "C",
            "A+",
            "A",
            "B+",
            "B",
            "C+",
            "C"
        ], [
            3,
            3,
            3,
            3,
            3,
            3,
            2,
            2,
            2,
            2,
            2,
            2
        ])).toBe(3.25);
    }
);
test(
    "gradefinder(32, [A+, A, B+, B, C+, C, A+, A, B+, B, C+, C, D], [3, 3, 3, 3, 3," +
            " 3, 2, 2, 2, 2, 2, 2, 2]) should be 3.109375",
    () => {
        expect(testing.gradefinder(32, [
            "A+",
            "A",
            "B+",
            "B",
            "C+",
            "C",
            "A+",
            "A",
            "B+",
            "B",
            "C+",
            "C",
            "D"
        ], [
            3,
            3,
            3,
            3,
            3,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ])).toBe(3.109375);
    }
);
test(
    "gradefinder(40, [A+, A, B+, B, C+, C, D, F, A+, A+, A, B+, B, C+, C, D+], [3, " +
            "3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2]) should be 2.8125",
    () => {
        expect(testing.gradefinder(40, [
            "A+",
            "A",
            "B+",
            "B",
            "C+",
            "C",
            "D",
            "F",
            "A+",
            "A+",
            "A",
            "B+",
            "B",
            "C+",
            "C",
            "D+"
        ], [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ])).toBe(2.8125);
    }
);
