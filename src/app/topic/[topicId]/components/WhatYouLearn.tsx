"use client";
import React, { useState } from "react";

interface WhatYouLearnProps {
    details: string;
};
  
const WhatYouLearn: React.FC<WhatYouLearnProps> = ({ details }) => {
    useState ();

    return (
        <div className="flex flex-col">
            <p className="text-2xl font-bold">{details}</p>
        </div>
    );
};

export default WhatYouLearn;