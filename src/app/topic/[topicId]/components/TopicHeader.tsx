"use client";
import React, { useState } from "react";

interface TopicHeaderProps {
    title: string;
    short_description: string;
    rating: number;
};

const TopicHeader: React.FC<TopicHeaderProps> = ({ title, short_description, rating }) => {
    return(
        <div className="mt-6 bg-neutral-300  p-4 rounded-lg shadow border border-neutral-200">
            <h1 className="font-bold font-caveat text-sm md:text-base lg:text-lg">{title}</h1>
            <p className="text-2xl font-bold text-gray-600">{short_description}</p>
            <p className="text-2xl font-bold text-gray-600">Rating: {rating}/5</p>
        </div>
    )
}

export default TopicHeader;