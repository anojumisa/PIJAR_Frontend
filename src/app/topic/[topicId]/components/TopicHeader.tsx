"use client";
import React, { useState } from "react";

interface TopicHeaderProps {
    title: string;
    short_description: string;
    rating: number;
};

const TopicHeader: React.FC<TopicHeaderProps> = ({ title, short_description, rating }) => {
    return(
        <div className="p-4 bg-neutral-300 shadow border border-neutral-200">
            <h1 className="font-bold font-caveat text-2xl">{title}</h1>
            <p className="text-sm font-bold text-gray-600">{short_description}</p>
            <div className="text-sm font-bold text-yellow-600">
                {[...Array(5)].map((star, index) => {
                    const decimalRating = rating;
                    const fullStar = index + 1;
                    const isFullStar = decimalRating >= fullStar;
                    const isPartialStar = decimalRating > index && decimalRating < fullStar;
                    
                    return (
                    <span key={index} className="relative inline-block">
                        {isFullStar && <span className="text-yellow-500">★</span>}
                        {isPartialStar && (
                        <div className="absolute top-0 left-0 overflow-hidden" style={{width: `${(decimalRating - index) * 100}%`}}>
                            <span className="text-yellow-500">Ratings: </span>
                        </div>
                        )}
                        {!isFullStar && !isPartialStar && <span className="text-gray-300">★</span>}
                    </span>
                    );
                })}
                <span className="ml-2">({rating}/5)</span>
            </div>
        </div>
    )
}

export default TopicHeader;