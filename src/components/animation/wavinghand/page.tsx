import React from "react";

const WavingHand: React.FC = () => {
    return (
        <span
            role="img"
            aria-label="Waving Hand"
            className="inline-block text-sm md:text-lg xl:text-3xl  animate-wave" 
        >
            👋
        </span>
    );
};

export default WavingHand;