import { getRandomItems, shuffleArray } from "./getRandomItems";

const getBoard = (allImages: string[], numberOfCards: number) => {
    if (numberOfCards % 2 !== 0) throw new Error("Number of cards needs to be an even number");
    const selectedImages = getRandomItems(allImages, numberOfCards / 2);

    // Copy the selected images array, but adding it 2x,
    // so all images will show up 2x in the list
    const finalArr = [...selectedImages, ...selectedImages];
    return shuffleArray(finalArr);
};

/**
 * Checks if two cards match.
 *
 * @param card1 - The first card.
 * @param card2 - The second card.
 * @returns True if the cards match, false otherwise.
 */
const isMatch = (card1: string, card2: string) => {
    return card1.split("-")[0] === card2.split("-")[0];
};

export { getBoard, isMatch };
