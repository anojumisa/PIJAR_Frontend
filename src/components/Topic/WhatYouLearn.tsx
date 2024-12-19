"use client";
import React, { useState } from "react";

interface WhatYouLearnProps {
    details: string;
};
  
const WhatYouLearn: React.FC<WhatYouLearnProps> = ({ details }) => {

    return (
        <div className="mt-6 bg-neutral-300 p-4 shadow border border-neutral-200">
            <h1 className="font-bold font-caveat text-2xl md:text-base lg:text-lg">Apa yang akan dipelajari:</h1>
            <p className="text-sm">{details}</p>
        </div>
    );
};

export default WhatYouLearn;