"use client";

import React, { useState, useEffect } from "react";

import loader from "../../app/api/dataLoader";
import BTN from "../../components/btn";
import Card from "../../components/card";
import { getBoard, isMatch } from "@/utils/gameLogic";

const BOARD_SIZE = 12;

const ListPage: React.FC = () => {
    const [data, setData] = useState<string[] | null>(null);
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [flippedCards, setFlippedCards] = useState<string[]>([]);

    const handleCardClick = (card: string) => {
        setFlippedCards((prev) => {
            if (prev.includes(card)) {
                // If the card is already flipped, remove it (flip it back)
                return prev.filter((c) => c !== card);
            } else {
                // Otherwise, add it to the flipped cards
                return [...prev, card];
            }
        });
        setSelectedCards((prev) => {
            const newSelection = [...prev, card];
            if (newSelection.length === 2) {
                const [card1, card2] = newSelection;
                if (isMatch(card1, card2)) {
                    if (flippedCards.length === BOARD_SIZE - 1) {
                        console.log("You win!");
                        // This runns 2x, once for each card
                    }
                } else {
                    setTimeout(() => {
                        setFlippedCards((prev) => prev.filter((c) => c !== card1 && c !== card2));
                    }, 1000);
                }
                return [];
            }
            return newSelection;
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/list-files");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const board = getBoard(data.files, BOARD_SIZE);
                setData(board);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex">
                <h1>Hello List</h1>
                <BTN hrefParam="/">[Back to home]</BTN>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.map((src, i) => (
                    <Card
                        key={`${src}-${i}`}
                        src={src}
                        position={i}
                        canFlip={true}
                        onCardClick={handleCardClick}
                        flipped={flippedCards.includes(`${src}-${i}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListPage;
