import React, { useState } from "react";
import style from "../style/Card.module.css";

const Card: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`relative w-64 h-40 bg-gray-200 rounded-lg shadow-md ${style.card}`}
            onClick={handleCardClick}
        >
            <div
                className={`absolute inset-0 transform ${
                    isFlipped ? `${style.flip180}` : `${style.flip0}`
                } transition-transform duration-500 ease-in-out`}
                style={{ backfaceVisibility: "hidden" }} // Ensure backface visibility is set inline
            >
                <div className="absolute inset-0 p-4 text-white bg-blue-500 rounded-lg backface-hidden">
                    <p>This is the front of the card</p>
                </div>
            </div>
            <div
                className={`absolute inset-0 transform ${
                    isFlipped ? `${style.flip0}` : `${style.flip180}`
                } transition-transform duration-500 ease-in-out`}
                style={{ backfaceVisibility: "hidden" }} // Ensure backface visibility is set inline
            >
                <div className="absolute inset-0 p-4 text-white bg-green-500 rounded-lg backface-hidden">
                    <p>This is the back of the card</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
