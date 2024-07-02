// utils/randomStrings.test.ts

import { getRandomItems } from "./getRandomItems";

describe("getRandomItems with strings", () => {
    it("should throw an error if the number of elements to select exceeds the array length", () => {
        expect(() => getRandomItems(["a", "b", "c"], 4)).toThrow(Error);
    });

    it("should return an array of the correct length", () => {
        const arr = ["a", "b", "c", "d", "e"];
        const result = getRandomItems(arr, 3);
        expect(result.length).toBe(3);
    });

    it("should return elements from the original array", () => {
        const arr = ["a", "b", "c", "d", "e"];
        const result = getRandomItems(arr, 3);
        result.forEach((str) => {
            expect(arr.includes(str)).toBe(true);
        });
    });

    it("should return different results on subsequent calls", () => {
        const arr = ["a", "b", "c", "d", "e"];
        const result1 = getRandomItems(arr, 3);
        const result2 = getRandomItems(arr, 3);
        expect(result1).not.toEqual(result2);
    });
});

describe("getRandomItems with numbers", () => {
    it("should throw an error if the number of elements to select exceeds the array length", () => {
        expect(() => getRandomItems([1, 2, 3], 4)).toThrow(Error);
    });

    it("should return an array of the correct length", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = getRandomItems(arr, 3);
        expect(result.length).toBe(3);
    });

    it("should return elements from the original array", () => {
        const arr = [1, 2, 3, 4, 5];
        const result = getRandomItems(arr, 3);
        result.forEach((num) => {
            expect(arr.includes(num)).toBe(true);
        });
    });

    it("should return different results on subsequent calls", () => {
        const arr = [1, 2, 3, 4, 5];
        const result1 = getRandomItems(arr, 3);
        const result2 = getRandomItems(arr, 3);
        expect(result1).not.toEqual(result2);
    });
});
