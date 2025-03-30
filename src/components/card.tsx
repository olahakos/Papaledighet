import React from "react";
import style from "../styles/Card.module.css";
import Image from "next/image";

interface CardProps {
    src: string;
    onCardClick?: (term: string) => void;
    canFlip: boolean;
    flipped: boolean;
    position: number;
}

const Card: React.FC<CardProps> = ({ src, canFlip, onCardClick, flipped, position }) => {
    const baseUrl = `https://papaledig.s3.eu-north-1.amazonaws.com/`;

    const handleCardClick = () => {
        if (!canFlip) return; // Prevent flipping if canFlip is false
        if (onCardClick && !flipped) {
            onCardClick(`${src}-${position}`); // Call the onCardClick function if provided
        }
    };

    return (
        <div
            className={`cursor-pointer relative bg-gray-200 rounded-lg shadow-md ${style.card} w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40`}
            onClick={handleCardClick}
        >
            <div
                className={`absolute inset-0 transform ${
                    flipped ? `${style.flip180}` : `${style.flip0}`
                } transition-transform duration-500 ease-in-out`}
                style={{ backfaceVisibility: "hidden" }}
            >
                <div className="absolute inset-0 text-white bg-blue-500 rounded-lg overflow-hidden">
                    <Image
                        src="/card-back.jpeg"
                        alt="Card Back"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </div>
            <div
                className={`shadow-md border absolute inset-0 transform ${
                    flipped ? `${style.flip0}` : `${style.flip180}`
                } transition-transform duration-500 ease-in-out`}
                style={{ backfaceVisibility: "hidden" }}
            >
                <div className="shadow-md border absolute inset-0 w-full h-full object-cover object-center bg-green-500 rounded-lg overflow-hidden">
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
