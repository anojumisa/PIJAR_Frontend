"use client";
import React, { useState } from "react";

interface WhatYouLearnProps {
    detail: string;
};
  
const WhatYouLearn: React.FC<WhatYouLearnProps> = ({ detail }) => {

    return (
        <div className="p-4 bg-neutral-800 shadow border border-neutral-400 rounded-2xl">
            <h2 className="text-4xl text-neutral-300 font-semibold">Apa yang akan dipelajari:</h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-sm text-white">{detail}</p>
        </div>
    );
};

export default WhatYouLearn;