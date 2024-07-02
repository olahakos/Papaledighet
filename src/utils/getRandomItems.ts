/**
 * Returns a randomly selected array of elements from the input array.
 * Throws an error if the number of elements to select exceeds the array length.
 *
 * @param allImages - The array from which to select elements.
 * @param toSelect - The number of elements to select.
 * @returns An array containing `toSelect` randomly selected elements from `allImages`.
 * @throws Error if `x` is greater than the length of `allImages`.
 */

const getRandomItems = <T>(allImages: T[], toSelect: number): T[] => {
    if (toSelect > allImages.length) {
        throw new Error("The number of elements to select cannot exceed the array length.");
    }

    // Create a shallow copy of the array to avoid modifying the original array
    const shuffled = shuffleArray(allImages);

    // Return the first x elements of the shuffled array
    return shuffled.slice(0, toSelect);
};

const shuffleArray = <T>(arr: T[]): T[] => {
    // Create a shallow copy of the array to avoid modifying the original array
    const shuffled = [...arr];

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export { getRandomItems, shuffleArray };
