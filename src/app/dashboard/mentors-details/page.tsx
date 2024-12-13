"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Loading from "@/app/animation/loading/page";
import { BoxIcon, Briefcase, GraduationCap } from "lucide-react";
import WavingHand from "@/app/animation/wavinghand/page";

interface Education {
  school_name: string;
  year: string;
  major: string;
  description: string | string[];
}

interface Experience {
  company: string;
  role: string;
  date_year: string;
  description: string;
  achievements: string[];
}

interface Schedule {
  image_program: string;
  theme: string;
  day: string;
  time: string;
}

interface Mentor {
  id: number;
  name: string;
  image_profile: string;
  image_baground: string;
  job: string;
  company_now: string;
  experience: Experience[];
  education: Education[];
  phone: string;
  bio: string;
  skills: string[];
  schedule: Schedule[];
}

export default function MentorsDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [showExperienceContent, setShowExperienceContent] = useState<{
    [key: number]: boolean;
  }>({});
  const [showEducationContent, setShowEducationContent] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExperienceContent = (index: number) => {
    setShowExperienceContent((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleEducationContent = (index: number) => {
    setShowEducationContent((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    async function fetchDetailMentor() {
      if (!id) return;
      try {
        const mentorRes = await axios.get(`/api/mentors/${id}`);
        setMentor(mentorRes.data.mentors[0]);
      } catch (error) {
        console.error("Error Fetch Mentor:", error);
        setError("Error loading mentor");
      } finally {
        setLoading(false);
      }
    }

    fetchDetailMentor();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <main>{error}</main>;
  if (!mentor) return <main>No Mentor data available.</main>;

  return (
    <div className="relative p-[1.5rem] md:p-[3rem] lg:p-[5rem] bg-blue-900">
      <div
        className="p-[0.5rem] md:p-[2rem] lg:p-[6rem] h-[8rem] md:h-[12rem] lg:h-[16rem]"
        style={{
          backgroundImage: `url(${mentor.image_baground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          borderRadius: "0.5rem",
          position: "relative",
        }}
      >
        <div
          className="absolute w-[6rem] md:w-[9rem] lg:w-[12rem] h-[6rem] md:h-[9rem] lg:h-[12rem] bottom-[-2.5rem] md:bottom-[-3.5rem] lg:bottom-[-5rem] shadow-lg "
          style={{
            borderRadius: "50%",
            border: "0.25rem solid white",
            backgroundImage: `url(${mentor.image_profile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute p-[1.25rem] md:[1.5rem] lg:p-[2rem] ml-[7rem] md:ml-[12rem] lg:ml-[16rem] absolute bottom-[-1.75rem] md:bottom-[-2rem] lg:bottom-[-3.5rem] w-4/5 max-w-[70%] h- max-h-[10rem] bg-slate-200 p-2 rounded-2xl font-bold shadow-md">
          <div className="flex gap-2">
            <div className="grid">
              <h1 className="text-blue-600 text-base md:text-lg lg:text-3xl font-caveat ">
                {mentor.name} <WavingHand />
              </h1>
              <p className="text-black text-xs md:text-sm lg:text-base flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> {mentor.job} || di{" "}
                {mentor.company_now}
              </p>
            </div>

            <button
              className="absolute p-[0.3rem] md:p-[0.5rem] lg:p-[0.9rem] text-[0.45rem] md:text-[0.5rem] lg:text-[0.9rem] shadow-md rounded-full"
              style={{
                right: "1rem",
                background: "#e53e3e",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              FOLLOW ME
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-slate-200 mt-[3.75rem] md:mt-[4rem] lg:mt-[6rem] my-[1.25rem]"
        style={{
          padding: "1.25rem",
          borderRadius: "0.5rem",
          boxShadow: "0rem 0.125rem 0.25rem rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="text-base md:text-lg lg:text-2xl font-semibold mb-4 font-qwitcher">
          Berkenalan dengan coach {mentor.name}
        </h2>
        <p className="font-firaSans text-xs md:text-sm lg:text-lg ">{mentor.bio}</p>
      </div>

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
        {mentor.experience.map((exp, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <div className="flex justify-between">
              <h3
                className="flex items-center gap-1 font-bold text-xs md:text-sm lg:text-base"
              >
                <Briefcase className="w-4 h-4" />
                {exp.role} di {exp.company}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 italic">
                {exp.date_year}
              </p>
            </div>

            {showExperienceContent[index] ? (
              <>
                <p className="font-firaSans text-xs md:text-sm lg:text-lg " >{exp.description}</p>
                <ul className="font-firaSans text-xs md:text-sm lg:text-lg pl-[1.25rem]">
                  <span className="font-bold font-caveat text-sm md:text-base lg:text-lg">Pencapaian :</span>
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="font-firaSans text-xs md:text-sm lg:text-lg ">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="font-firaSans text-xs md:text-sm lg:text-lg " style={{ fontSize: "1rem" }}>
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
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        <div className="bg-slate-200 p-5 rounded-lg shadow-md">
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
            Riwayat Pendidikan
          </h2>
          {mentor.education.map((edu, index) => (
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
                    : edu.description.join(", ")}
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mentor.skills.map((skill, index) => (
              <p
                key={index}
                className="text-sm md:text-base lg:text-lg text-gray-700 mb-2 bg-sky-200/80 rounded-full w-full text-center shadow-lg py-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-slate-200"
        style={{
          margin: "1.25rem 0",
          padding: "1.25rem",
          borderRadius: "0.5rem",
        }}
      >
        <h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
          Kelas yang Akan Datang
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-6">
          {mentor.schedule.map((schedule, index) => (
            <div
              className="text-xs md:text-base lg:text-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-[0.5rem] lg:p-[1rem] text-center text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              key={index}
            >
              <img
                className="w-full h-[10rem] rounded-lg"
                src={schedule.image_program}
                alt={schedule.theme}
              />
              <h3 className="pt-4 font-bold font-firaSans text-amber-300">
                {schedule.theme}
              </h3>
              <p>{schedule.day}</p>
              <p>{schedule.time}</p>
              <button
                className="mt-4 bg-sky-700 rounded-lg text-white font-openSans"
                style={{
                  padding: "0.63rem 1.25rem",
                  cursor: "pointer",
                }}
              >
                Daftar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
