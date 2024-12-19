"use client";

import React from "react";

interface UpcomingSessionCardProps {
    mentor_session_title: string;
	short_description: string;
	schedule: string;
}

const UpcomingSessionCard: React.FC<UpcomingSessionCardProps> = ({
    mentor_session_title,
    short_description,
    schedule,
}) => {
    return (
        <div className="max-w-sm p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg border border-gray-200">
            <div className="text-center mb-4">
                <p className="text-xl font-bold text-gray-900">
                    {schedule.split(" ")[0]} 
                </p>
                <p className="text-sm text-blue-950 font-bold">
                    {schedule.split(" ")[1]} 
                </p>
            </div>

            <div>
                <h1 className="text-lg font-semibold text-gray-800">{mentor_session_title}</h1>
                <p className="text-sm text-gray-900 mb-2">{short_description}</p>
                <p className="text-sm text-gray-900 font-medium">
                    <span className="font-bold">Schedule:</span> {schedule}
                </p>
            </div>
        </div>
    );
};

export default UpcomingSessionCard;