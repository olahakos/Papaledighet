import React, { useState } from "react";
import style from "../styles/Card.module.css";
import Image from "next/image";

interface CardPropos {
    src: string;
}

const Card: React.FC<CardPropos> = ({ src }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const baseUrl = `https://papaledig.s3.eu-north-1.amazonaws.com/`;

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    const CARD_SIZE = 200;

    return (
        <div
            className={`cursor-pointer relative w-40 h-40 bg-gray-200 rounded-lg shadow-md ${style.card}`}
            onClick={handleCardClick}
        >
            <div
                className={`absolute inset-0 transform ${
                    isFlipped ? `${style.flip180}` : `${style.flip0}`
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
                    isFlipped ? `${style.flip0}` : `${style.flip180}`
                } transition-transform duration-500 ease-in-out`}
                style={{ backfaceVisibility: "hidden" }} // Ensure backface visibility is set inline
            >
                <div
                    className={`shadow-md border absolute inset-0 w-full h-full object-cover object-center bg-green-500 rounded-lg backface-hidden overflow-hidden`}
                >
                    <Image
                        src={`${baseUrl}${src}`}
                        alt="Card Front"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
