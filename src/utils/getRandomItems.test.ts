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

describe("getRandomItems edge cases", () => {
    it("should return an empty array when toSelect is 0", () => {
        const arr = [1, 2, 3];
        const result = getRandomItems(arr, 0);
        expect(result).toEqual([]);
    });

    it("should return the entire array when toSelect equals the array length", () => {
        const arr = [1, 2, 3];
        const result = getRandomItems(arr, 3);
        expect(result.sort()).toEqual(arr.sort());
    });

    it("should handle an empty input array gracefully", () => {
        const arr: number[] = [];
        expect(() => getRandomItems(arr, 1)).toThrow(Error);
    });
});

describe("getRandomItems with objects", () => {
    it("should return elements from the original array of objects", () => {
        const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const result = getRandomItems(arr, 2);
        result.forEach((obj) => {
            expect(arr).toContainEqual(obj);
        });
    });
});
