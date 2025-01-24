"use client";
import { Briefcase } from "lucide-react";
import { Mentor } from "../../utils/interface/type";

interface Props {
  mentor: Mentor
}

export default function ExperienceMentors({ mentor }: Props) {

  const getYear = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  return (
    <div
      className="bg-gradient-to-tr from-cyan-500 to-blue-500"
      style={{
        margin: "1.25rem 0",
        padding: "1.25rem",
        borderRadius: "0.5rem",
        boxShadow: "0rem 0.125rem 0.25rem rgba(0,0,0,0.1)",
      }}
    >
      <h2 className="text-base md:text-lg lg:text-2xl font-semibold mb-4">
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
            <p className="text-lg font-bold md:text-base lg:text-lg text-gray-200 italic">
              {getYear(exp.start_date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
