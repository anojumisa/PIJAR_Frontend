"use client";
import React, { useState } from "react";
import { Briefcase } from "lucide-react";

interface MentorExperience {
  company_name: string;
  end_date: string; 
  occupation: string;
  start_date: string; 
}

interface Props {
  mentor: {
    mentor_experiences: MentorExperience[];
  };
}

export default function ExperienceMentors({ mentor }: Props) {
  const [showExperienceContent, setShowExperienceContent] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExperienceContent = (index: number) => {
    setShowExperienceContent((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div
      className="bg-slate-200"
      style={{
        margin: "1.25rem 0",
        padding: "1.25rem",
        borderRadius: "0.5rem",
        boxShadow: "0rem 0.125rem 0.25rem rgba(0,0,0,0.1)",
      }}
    >
      <h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
        Pengalaman Profesional
      </h2>
      {mentor.mentor_experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <div className="flex justify-between">
            <h3
              className="flex items-center gap-1 font-bold text-xs md:text-sm lg:text-base"
            >
              <Briefcase className="w-4 h-4" />
              {exp.occupation} di {exp.company_name}
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 italic">
              {exp.start_date} - {exp.end_date}
            </p>
          </div>

          {/* {showExperienceContent[index] ? (
            <>
              <p className="font-firaSans text-xs md:text-sm lg:text-lg">
                {exp.description}
              </p>
              <ul className="font-firaSans text-xs md:text-sm lg:text-lg pl-[1.25rem]">
                <span className="font-bold font-caveat text-sm md:text-base lg:text-lg">
                  Pencapaian:
                </span>
                {exp.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-firaSans text-xs md:text-sm lg:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p
              className="font-firaSans text-xs md:text-sm lg:text-lg"
              style={{ fontSize: "1rem" }}
            >
              {exp.description.slice(0, 50)}...
            </p>
          )}
          <button
            className="font-openSans"
            onClick={() => toggleExperienceContent(index)}
            style={{
              background: "transparent",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            {showExperienceContent[index] ? "Sembunyikan" : "Lihat Detail"}
          </button> */}
        </div>
      ))}
    </div>
  );
}
