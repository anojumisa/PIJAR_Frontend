"use client";

import React, { useState} from "react";

interface UpcomingSessionCardProps {
    title: string;
    short_description: string;
    schedule: string;
    link: string;
}

const UpcomingSessionCard: React.FC<UpcomingSessionCardProps> = ({ title, short_description, schedule, link }) => {
    return (
        <div>Hello World</div>
    );    
};