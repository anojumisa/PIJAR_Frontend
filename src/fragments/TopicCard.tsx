"use client";
import React, { useState, useEffect } from "react";

interface TopicCardProps {
    category_name: string;
    image_url?: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ category_name, image_url }) => {
    return (
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
            src={image_url}
            alt={category_name}
            className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 hover:bg-opacity-70">
            <span className="text-white text-xl font-semibold">{category_name}</span>
        </div>

        </div>
    );
}

export default TopicCard;