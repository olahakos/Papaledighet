import { getBoard, isMatch } from "./gameLogic";

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

describe("isMatch", () => {
    it("should return true for matching cards", () => {
        const card1 = "image1-0";
        const card2 = "image1-1";
        expect(isMatch(card1, card2)).toBe(true);
    });

    it("should return false for non-matching cards", () => {
        const card1 = "image1-0";
        const card2 = "image2-1";
        expect(isMatch(card1, card2)).toBe(false);
    });

    it("should return true for matching cards with different positions", () => {
        const card1 = "image3-5";
        const card2 = "image3-8";
        expect(isMatch(card1, card2)).toBe(true);
    });

    it("should return false for cards with completely different identifiers", () => {
        const card1 = "image4-0";
        const card2 = "image5-1";
        expect(isMatch(card1, card2)).toBe(false);
    });

    it("should handle edge cases with empty strings", () => {
        const card1 = "";
        const card2 = "";
        expect(isMatch(card1, card2)).toBe(true); // Both are empty, so they "match"
    });

    it("should handle edge cases with one empty string", () => {
        const card1 = "image6-0";
        const card2 = "";
        expect(isMatch(card1, card2)).toBe(false);
    });

    it("should handle cards without a position suffix", () => {
        const card1 = "image7";
        const card2 = "image7";
        expect(isMatch(card1, card2)).toBe(true);
    });

    it("should return false for cards with mismatched formats", () => {
        const card1 = "image8-0";
        const card2 = "image9";
        expect(isMatch(card1, card2)).toBe(false);
    });
});
