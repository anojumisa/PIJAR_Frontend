"use client";
import React, { useState } from "react";

interface ImageButtonProps {
    image_url: string,
    title: string,
}

const ImageButton: React.FC<ImageButtonProps> = ({ image_url, title }) => {
    return(
        <div className="p-4 bg-neutral-800 shadow border border-neutral-400 rounded-2xl">
            <img
                src={image_url}
                alt={title}
                className="h-60 w-full object-cover rounded-lg"
            />
        </div>
    )
};

export default ImageButton;