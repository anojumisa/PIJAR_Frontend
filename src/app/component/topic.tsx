"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TopicCard from "@/fragments/TopicCard";

type Categories = {
    category_name: string;
    image_url: string;
}
const Topic: React.FC = () => {
    const [topicCategories, setTopicCategories] = useState<Categories[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/categories/featured');
                const data = await response.json();
                setTopicCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };

        fetchCategories();
    }, []);
    
    return (
        <div className="topic-container p-6 max-w-6xl mx-auto">
            <div className="text-left mb-6">
                <h2 className="text-2xl font-bold text-neutral-400 text-center mb-6">
                    Topik Pilihan
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicCategories.map((category, index) => (
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