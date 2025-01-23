"use client";

import React, { useEffect, useState } from "react";
import TopicCard from "@/fragments/TopicCard";
import { fetchLandingPageCategories, fetchCategories } from "@/utils/api";
import Link from "next/link";
import Loading from "../animation/loading/page";
import { Category } from "@/utils/interface/type";

const Topic: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const landingData = await fetchLandingPageCategories();
        const detailedCategories = await fetchCategories();

        const mergedCategories = detailedCategories.map(
          (category: Category) => {
            const matchedLanding = landingData.find(
              (landing: { category_name: string }) =>
                landing.category_name === category.category_name
            );

            return {
              ...category,
              image_url:
                matchedLanding?.image_url ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            };
          }
        );

        setCategories(mergedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError("Gagal memuat kategori");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="topic-container p-6 max-w-6xl mx-auto">
      <div className="text-left mb-6">
        <h2 className="text-2xl md:text-4xl mb-6 font-bold text-gray-500 text-center">
          Topik Pilihan
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link
              key={category.id}
              href={`/course?categoryid=${category.id}`}
              className="block"
            >
              <TopicCard
                category_name={category.category_name}
                image_url={category.image_url}
              />
            </Link>
          ))
        ) : (
          <p>Tidak ada kategori yang tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default Topic;
