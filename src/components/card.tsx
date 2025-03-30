import React, { useState } from "react";
import style from "../styles/Card.module.css";
import Image from "next/image";

interface CardPropos {
    src: string;
    onCardClick?: (term: string) => void;
    canFlip: boolean;
    flipped: boolean;
    position: number;
}

const Card: React.FC<CardPropos> = ({ src, canFlip, onCardClick, flipped, position }) => {
    const baseUrl = `https://papaledig.s3.eu-north-1.amazonaws.com/`;

    const handleCardClick = () => {
        if (!canFlip) return; // Prevent flipping if canFlip is false
        if (onCardClick && !flipped) {
            onCardClick(`${src}-${position}`); // Call the onCardClick function if provided
        }
    };

    const CARD_SIZE = 200;

    return (
        <div
            className={`cursor-pointer relative w-40 h-40 bg-gray-200 rounded-lg shadow-md ${style.card}`}
            onClick={handleCardClick}
        >
            <div
                className={`absolute inset-0 transform ${
                    flipped ? `${style.flip180}` : `${style.flip0}`
                } transition-transform duration-500 ease-in-out`}
                style={{ backfaceVisibility: "hidden" }} // Ensure backface visibility is set inline
            >
                <div
                    className={`absolute inset-0 text-white bg-blue-500 rounded-lg backface-hidden overflow-hidden w-${CARD_SIZE} h-${CARD_SIZE}`}
                >
                    <Image
                        src="/card-back.jpeg"
                        alt="Card Back"
                        width={CARD_SIZE}
                        height={CARD_SIZE}
                        priority
                    />
                </div>
            </div>
            <div
                className={`shadow-md border absolute inset-0 transform ${
                    flipped ? `${style.flip0}` : `${style.flip180}`
                } transition-transform duration-500 ease-in-out`}
                style={{ backfaceVisibility: "hidden" }} // Ensure backface visibility is set inline
            >
                <div
                    className={`shadow-md border absolute inset-0 w-full h-full object-cover object-center bg-green-500 rounded-lg backface-hidden overflow-hidden`}
                >
                    <Image
                        src={`${baseUrl}${src}`}
                        alt="Card Front"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
