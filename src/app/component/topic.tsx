"use client";

import React, { useState } from "react";
import Image from "next/image";

type Categories = {
    category_name: string;
    image_url: string;
}
const Topic: React.FC = () => {
    const [topicCategory, setTopicCategory] = useState<Categories[]>([]);

    const Categories: Categories [] = [
        {
            category_name: "Coding",
            image_url: "",
        },
        {
            category_name: "Trading",
            image_url: "",
        },
        {
            category_name: "Graphic Design",
            image_url: "",
        },
        {
            category_name: "Fashion Design",
            image_url: "",
        },
        {
            category_name: "Architecture",
            image_url: "",
        },
        {
            category_name: "Applied Mathematics",
            image_url: "",
        },
    ]
    return (
        <div className="relative text-center bg-blue-800 text-white p-6 border-b-4 border-white">
            <div className="text-right mb-6">
                <h2 className="text-2xl md:text-4xl uppercase font-bold drop-shadow-md">
                    Topik Pilihan
                </h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {Categories.map((category, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={category.image_url}
                            alt={category.category_name}
                            width={500}
                            height={500}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
                            <h3 className="text-white text-lg font-bold">{category.category_name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Topic;