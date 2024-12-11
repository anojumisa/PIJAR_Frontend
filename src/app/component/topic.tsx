"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopicCard from "../fragment/TopicCard";

type Categories = {
    category_name: string;
    image_url: string;
}
const Topic: React.FC = () => {
    const [topicCategory, setTopicCategory] = useState<Categories[]>([]);

    const Categories: Categories [] = [
        {
            category_name: "Coding",
            image_url: "https://www.mtu.edu/cs/undergraduate/software/what/images/software-engineering-banner1600.jpg",
        },
        {
            category_name: "Trading",
            image_url: "https://cdn.corporatefinanceinstitute.com/assets/trade-execution-1024x576.jpeg",
        },
        {
            category_name: "Graphic Design",
            image_url: "https://community.wacom.com/us/wp-content/uploads/2019/02/How-to-paint-with-Wacom-and-Painter-small.jpg",
        },
        {
            category_name: "Fashion Design",
            image_url: "https://www.hongkongda.com/wp-content/uploads/2024/05/aim_18730_1.jpg",
        },
        {
            category_name: "Architecture",
            image_url: "https://i0.wp.com/www.designhausarchitecture.co.uk/wp-content/uploads/2021/11/DesignHausBlog.png?w=1000&ssl=1",
        },
        {
            category_name: "Applied Mathematics",
            image_url: "https://studentresearch.engineering.columbia.edu/sites/default/files/styles/cu_crop/public/2017-01/math4.jpg?itok=u1bkQxYE",
        },
        {
            category_name: "Data Science",
            image_url: "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/data-science.jpg",
        },
    ]
    return (
        <div className="topic-container p-6 max-w-6xl mx-auto">
            <div className="text-left mb-6">
                <h2 className="text-2xl md:text-4xl uppercase font-bold drop-shadow-md">
                    Topik Pilihan
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Categories.map((category, index) => (
                <TopicCard
                    key={index}
                    category_name={category.category_name}
                    image_url={category.image_url}
                />
                ))}
            </div>
        </div>
    );
};

export default Topic;