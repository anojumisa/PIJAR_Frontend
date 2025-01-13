import React from "react";
import StarRating from "@/components/custom-rate/customrate";
import { Course } from "@/utils/interface/type";

interface CourseListProps {
  title: string;
  courses: Course[];
}

export default function CourseList({ title, courses }: CourseListProps) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-500">{title}</h2>
      <div className="mentor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="rounded-lg bg-white shadow p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            <img
              src={course.image_url || "https://via.placeholder.com/150"}
              alt={course.title}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-bold text-amber-400 line-clamp-2">{course.title}</h3>
            <div className="flex justify-between">
              <p className="text-sm text-amber-300">{course.mentor_details.fullname}</p>
              <StarRating rating={course.average_rate} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
