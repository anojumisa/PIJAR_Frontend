"use client";

import React from "react";

const Banner = () => {
    const categoryId = "all"; 

    return (
        <div className="h-[800px] max-w-screen-2xl mx-auto flex flex-col justify-center items-center mt-20 lg:mt-28">
            <a href={`/course?categoryid=${categoryId}`}><img src="banner.png" alt="" /></a>
        </div>
    )
}

export default Banner;