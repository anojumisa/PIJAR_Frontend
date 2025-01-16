'use client'

import React, { useEffect, useState, Suspense } from "react";
import { fetchCategories, fetchCourseSession } from "@/utils/api";
import Navbar_not_auth from "@/components/navbar/navbar";
import CourseList from "@/components/course/courseList";
import { Category, MentorSession } from "@/utils/interface/type";
import Footer from "@/components/landing-page/Footer";
import { useSearchParams } from "next/navigation";
import NoClassesMessage from "@/components/course/noClassesMassage";
import Loading from "@/components/animation/loading/page";

const CoursePage = () => {
  const searchParams = useSearchParams();
  const categoryid = searchParams.get("categoryid");
  const [courses, setCourses] = useState<MentorSession[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!categoryid) return;

      try {
        const sessionResponse = await fetchCourseSession(categoryid);
        setCourses(sessionResponse.sessions); 
        const categoriesResponse = await fetchCategories();
        setCategories(categoriesResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryid]);

  if (loading) return <Loading/>;

  return (
    <>
      <Navbar_not_auth />
      <div className="featured-mentors-container p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl mb-6 font-bold text-gray-500 text-center">
          Kursus Yang Tersedia
        </h1>
        {Array.isArray(courses) && courses.length > 0 ? (
          <CourseList sessions={courses} /> 
        ) : (
          <NoClassesMessage selectedCategory={Number(categoryid)} categories={categories} />
        )}
      </div>
      <Footer />
    </>
  );
}

const CoursePageWrapper = () => (
  <Suspense fallback={<Loading />}>
    <CoursePage />
  </Suspense>
);

export default CoursePageWrapper;
