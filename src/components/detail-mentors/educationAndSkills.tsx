"use client";
import React, { useState } from "react";

import { GraduationCap } from "lucide-react";
import { Mentor, Education } from "../../utils/interface/type";


interface Props{
mentor:Mentor
};

export default function EducationAndSkills({mentor}:Props){

  
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5 ">
        <div className="bg-gradient-to-tr from-cyan-500 to-blue-500 p-5 rounded-lg shadow-md">
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold  mb-4">
            Riwayat Pendidikan
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold flex items-center gap-1 text-xs md:text-sm lg:text-base">
                  <GraduationCap className="w-4 h-4" /> {edu.school_name}
                </h3>
                <p className="text-ls font-bold md:text-sm lg:text-lg text-gray-300 italic">
                  {edu.year}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-tr from-cyan-500 to-blue-500 p-5 rounded-lg shadow-md">
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold mb-4">
            Topik Keahlian
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentor.mentor_expertise.map((skill, index) => (
              <p
                key={index}
                className="p-6 text-xs md:text-sm lg:text-base  m-2 bg-black/80 rounded-lg w-full text-center shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-white"
              >
                <span className="font-bold underline text-amber-300">{skill.category}</span> <br />
                {skill.expertise}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
