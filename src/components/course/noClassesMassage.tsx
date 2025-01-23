import React from "react";
import { Category } from "@/utils/interface/type";

interface NoClassesMessageProps {
  selectedCategory: number | null;
  categories: Category[];
}

export default function NoClassesMessage({
  selectedCategory,
  categories,
}: NoClassesMessageProps) {
  if (selectedCategory === null) return null;

  const categoryName = categories.find((c) => c.id === selectedCategory)?.category_name;

  return (
    <div className="text-center text-gray-500 mt-6">
      <p>
        Belum ada kelas dengan kategori{" "}
        <span className="font-bold text-blue-500">{categoryName}</span>.
      </p>
    </div>
  );
}
