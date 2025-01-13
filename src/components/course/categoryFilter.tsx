import React from "react";
import { Category } from "@/utils/interface/type";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onCategoryFilter: (categoryId: number | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryFilter,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 justify-center">
      <button
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          selectedCategory === null ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onCategoryFilter(null)}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedCategory === category.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onCategoryFilter(category.id)}
        >
          {category.category_name}
        </button>
      ))}
    </div>
  );
}
