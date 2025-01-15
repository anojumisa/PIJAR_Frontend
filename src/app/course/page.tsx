'use client'

import React, { useEffect, useState } from "react";
import Loading from "@/components/animation/loading/page";
import { fetchCategories } from "@/utils/api";
import { mockClass } from "../api/courseClass/[id]/routes";
import Navbar_not_auth from "@/components/navbar/navbar";
import CourseList from "@/components/course/courseList";
import CategoryFilter from "@/components/course/categoryFilter";
import NoClassesMessage from "@/components/course/noClassesMassage";
import { Category, Course } from "@/utils/interface/type";
import Footer from "@/components/landing-page/Footer";


export default function CoursePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await mockClass();
        setCourses(response as Course[]);
        setFilteredCourses(response as Course[]);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategoryData = async () => {
      const response = await fetchCategories();
      setCategories(response);
    };

    fetchCourses();
    fetchCategoryData();
  }, []);

  const handleCategoryFilter = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    if (categoryId === null) {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.category_id === categoryId));
    }
  };

  if (loading) return <Loading />;

  const newClasses = filteredCourses.filter((course) => !course.is_replay);
  const replayClasses = filteredCourses.filter((course) => course.is_replay);

  return (
    <>
      <Navbar_not_auth />
      <div className="featured-mentors-container p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl mb-6 font-bold text-gray-500 text-center">
          Kursus Yang Tersedia
        </h1>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryFilter={handleCategoryFilter}
        />

        {newClasses.length > 0 && <CourseList title="Segera" courses={newClasses} />}
        {replayClasses.length > 0 && <CourseList title="Tonton Ulang" courses={replayClasses} />}
        <NoClassesMessage selectedCategory={selectedCategory} categories={categories} />
      </div>
      <Footer />
    </>
  );
}
