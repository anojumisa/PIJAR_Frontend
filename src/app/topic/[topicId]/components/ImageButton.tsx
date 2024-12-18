"use client";
import React, { useState } from "react";

interface ImageButtonProps {
    image_url: string,
    title: string,
    link: string
}

const ImageButton: React.FC<ImageButtonProps> = ({ image_url, title, link }) => {
    return(
        <div className="mt-6 bg-neutral-300 p-4 shadow border border-neutral-200">
            <img
                src={image_url}
                alt={title}
                className="h-20 w-full object-cover rounded-lg"
            />
            <div className="mt-4">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium text-sm rounded hover:bg-blue-600 transition duration-300"
                >
                    Join Now
                </a>
            </div>
        </div>
    )
};

export default ImageButton;