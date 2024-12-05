"use client";

import React from "react";
const Banner = () => {
    return (
        <div className="relative text-center bg-blue-800 text-white p-6 border-b-4 border-white">
            <h1 className="text-2xl md:text-4xl uppercase font-bold drop-shadow-md">
                Belajar Itu Hak,
            </h1>
            <h1 className="text-2xl md:text-4xl uppercase font-bold drop-shadow-md">
                Bukan Pilihan!
            </h1>
            <button className="bg-white text-blue-800 font-bold py-2 px-4 rounded">
                Mulai Belajar
            </button>
        </div>
    )
}

export default Banner;