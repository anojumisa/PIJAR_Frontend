"use client";

import React from "react";

interface UpcomingSessionCardProps {
    image_url: string;
    title: string;
    short_description: string;
    schedule: string; 
    link: string;
}

const UpcomingSessionCard: React.FC<UpcomingSessionCardProps> = ({
    image_url,
    title,
    short_description,
    schedule,
    link,
}) => {
    return (
        <div className="max-w-sm p-4 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="text-center mb-4">
                <p className="text-xl font-bold text-gray-800">
                    {schedule.split(" ")[0]} 
                </p>
                <p className="text-sm text-blue-500">
                    {schedule.split(" ")[1]} 
                </p>
            </div>

            <div>
                <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                <p className="text-sm text-gray-500 mb-2">{short_description}</p>
                <p className="text-sm text-gray-600 font-medium">
                    <span className="font-bold">Schedule:</span> {schedule}
                </p>
            </div>

            <div className="mt-4">
                <img
                    src={image_url}
                    alt={title}
                    className="h-20 w-full object-cover rounded-lg"
                />
            </div>

            <div className="mt-4">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded hover:bg-blue-600 transition duration-300"
                >
                    Join Now
                </a>
            </div>
        </div>
    );
};

export default UpcomingSessionCard;
