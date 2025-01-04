"use client";
import React, { useState } from "react";

import { GraduationCap } from "lucide-react";


interface Education {
  id: number;
  school_name: string;
  year: string;
  major: string;
  description: string;
}


interface MentorExpertise {
  category: string;
  expertise: string;
}


interface Props{
mentor:{
  mentor_expertise: MentorExpertise[];
};
}
export default function EducationAndSkills({mentor}:Props){

  const [showEducationContent, setShowEducationContent] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleEducationContent = (index: number) => {
    setShowEducationContent((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  
  const education: Education[] = [
    {
      id: 1,
      school_name: "University of Knowledge",
      year: "2015 - 2019",
      major: "Computer Science",
      description: "Specialized in Artificial Intelligence and Machine Learning.",
    },
    {
      id: 2,
      school_name: "High School of Excellence",
      year: "2012 - 2015",
      major: "Science",
      description: "Focused on physics, chemistry, and mathematics.",
    },
  ];

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        <div className="bg-slate-200 p-5 rounded-lg shadow-md">
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
            Riwayat Pendidikan
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold flex items-center gap-1 text-xs md:text-sm lg:text-base">
                  <GraduationCap className="w-4 h-4" /> {edu.school_name}
                </h3>
                <p className="text-xs md:text-sm lg:text-lg text-gray-600 italic">
                  {edu.year}
                </p>
              </div>
              <p className="italic text-gray-700 text-xs md:text-sm lg:text-base">{edu.major}</p>
              {showEducationContent[index] ? (
                <p className="text-gray-900 mt-2 font-firaSans text-xs md:text-sm lg:text-lg ">
                  {typeof edu.description === "string"
                    ? edu.description
                    : edu.description}
                </p>
              ) : null}
              <button
                className="font-openSans mt-[0.3rem] md:mt-[1rem] lg:mt-[1.5rem]"
                onClick={() => toggleEducationContent(index)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                {showEducationContent[index] ? "Sembunyikan " : "Lihat Detail"}
              </button>
            </div>
          ))}
        </div>
        <div className="bg-slate-200 p-5 rounded-lg shadow-md">
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
            Topik Keahlian
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentor.mentor_expertise.map((skill, index) => (
              <p
                key={index}
                className="p-6 text-xs md:text-sm lg:text-base text-gray-700 m-2 bg-sky-200/80 rounded-lg w-full text-center shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                {skill.category} {skill.expertise}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
