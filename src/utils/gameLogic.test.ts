import { getBoard } from "./gameLogic";

describe("getBoard", () => {
    it("should throw an error if the number of cards are uneven", () => {
        expect(() => getBoard(["a", "b", "c"], 5)).toThrow(Error);
    });
    it("should return an array of the correct length", () => {
        const arr = ["a", "b", "c", "d", "e"];
        const result = getBoard(arr, 4);
        expect(result.length).toBe(4);
    });
    it("should return elements from the original array", () => {
        const arr = ["a", "b", "c", "d", "e"];
        const result = getBoard(arr, 4);
        result.forEach((str) => {
            expect(arr.includes(str)).toBe(true);
        });
    });
    it("should contain all elements 2x", () => {
        const arr = ["a", "b", "c", "d", "e"];
        const result = getBoard(arr, 4);
        const countMap: { [key: string]: number } = {};

        result.forEach((str) => {
            const key = str;
            countMap[key] = (countMap[key] || 0) + 1;
        });
        expect(Object.values(countMap).every((count) => count === 2)).toBe(true);
    });
    it("should return different results on subsequent calls", () => {
        const arr = ["a", "b", "c", "d", "e"];
        const result1 = getBoard(arr, 4);
        const result2 = getBoard(arr, 4);
        expect(result1).not.toEqual(result2);
    });
});
