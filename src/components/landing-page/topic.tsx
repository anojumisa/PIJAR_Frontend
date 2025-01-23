"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TopicCard from "@/fragments/TopicCard";
import { fetchLandingPageCategories } from "@/utils/api";

type Categories = {
    category_name: string;
    image_url: string;
}
const Topic: React.FC = () => {
    const [topicCategories, setTopicCategories] = useState<Categories[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await fetchLandingPageCategories();
                setTopicCategories(data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
                setError("Gagal memuat kategori");
            } finally {
                setLoading(false);
        };
        }

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    
    return (
        <div className="topic-container p-6 max-w-6xl mx-auto">
            <div className="text-left mb-6">
			<h2 className="text-2xl md:text-4xl mb-6 font-bold text-gray-500 text-center">
                    Topik Pilihan
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {topicCategories.length > 0 ? (
                topicCategories.map((category, index) => (
                    <TopicCard
                        key={index}
                        category_name={category.category_name}
                        image_url={category.image_url}
                    />
                ))
            ) : (
                <p>Tidak ada kategori yang tersedia.</p>
            )}
            </div>
        </div>
    );
};

export default Topic;
