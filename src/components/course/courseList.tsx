import React from "react";
import StarRating from "@/components/custom-rate/customrate";
import { MentorSession } from "@/utils/interface/type";

interface CourseListProps {
  sessions: MentorSession[];
}

export default function CourseList({ sessions }: CourseListProps) {
  const isNewCourse = (course: MentorSession) => !course.average_rating;

  const sortBySchedule = (a: MentorSession, b: MentorSession) => {
    return new Date(b.schedule).getTime() - new Date(a.schedule).getTime();
  };

  const newCourses = sessions.filter(isNewCourse).sort(sortBySchedule);
  const oldCourses = sessions.filter((course) => !isNewCourse(course)).sort(sortBySchedule);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-500">Daftarkan Segera</h2>
      <div className="mentor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {newCourses.map((course) => (
          <div key={course.mentor_session_title} className="rounded-lg bg-white shadow p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            <img
              src={course.image_url || "https://via.placeholder.com/150"}
              alt={course.mentor_session_title}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-bold text-black line-clamp-2">{course.mentor_session_title}</h3>
            <p className="mt-2 font-bold text-black line-clamp-2">{course.short_description}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <img
                  className="w-5 h-5 rounded-full"
                  src={course.mentor_details.image_url || "https://via.placeholder.com/150"}
                  alt={course.mentor_details.fullname}
                />
                <p className="text-sm text-amber-900">{course.mentor_details.fullname}</p>
              </div>
              <StarRating rating={course.average_rating || 0} />
            </div>
            <p className=" justify-center text-bold text-black mt-2">{course.schedule}</p>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl font-semibold mb-4 text-gray-500 mt-10">Tonton Ulang</h2>
      <div className="mentor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {oldCourses.map((course) => (
          <div key={course.mentor_session_title} className="rounded-lg bg-white shadow p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            <img
              src={course.image_url || "https://via.placeholder.com/150"}
              alt={course.mentor_session_title}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-2 font-bold text-black line-clamp-2">{course.mentor_session_title}</h3>
            <p className="mt-2 font-bold text-black line-clamp-2">{course.short_description}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <img
                  className="w-5 h-5 rounded-full"
                  src={course.mentor_details.image_url || "https://via.placeholder.com/150"}
                  alt={course.mentor_details.fullname}
                />
                <p className="text-sm text-amber-900">{course.mentor_details.fullname}</p>
              </div>
              <StarRating rating={course.average_rating || 0} />
            </div>
            <p className="text-bold text-black mt-4 p-10">{course.schedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
