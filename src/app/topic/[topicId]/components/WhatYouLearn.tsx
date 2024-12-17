"use client";
import React, { useState } from "react";

interface WhatYouLearnProps {
    details: string;
};
  
const WhatYouLearn: React.FC<WhatYouLearnProps> = ({ details }) => {

    return (
        <div className="text-xs md:text-sm lg:text-lg ">
            <h1 className="font-bold font-caveat text-sm md:text-base lg:text-lg">Apa yang akan dipelajari:</h1>
            <p className="text-2xl font-bold">{details}</p>
        </div>
    );
};

export default WhatYouLearn;