"use client";

import React from "react";

const Banner = () => {
    const categoryId = "all"; 

    return (
        <div className="h-[150px] md:h-[600px] lg:h-[800px] max-w-screen-2xl mx-auto flex flex-col justify-center items-center mt-10 md:mt-16 lg:mt-28">
            <a href={`/course?categoryid=${categoryId}`}>
            <img 
                src="banner.png" 
                alt="Banner"
                className="w-full h-auto object-contain px-4 md:px-6 lg:px-8"
            />
            </a>
        </div>
    )
}

export default Banner;