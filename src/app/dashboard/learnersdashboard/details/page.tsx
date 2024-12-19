"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Loading from "@/components/animation/loading/page";
import { GraduationCap, Book, Star } from "lucide-react";
import WavingHand from "@/components/animation/wavinghand/page";

interface Education {
  school_name: string;
  year: string;
  major: string;
}

interface Skills {
  skill: string;
  level: string;
}

interface Schedule {
  program_name: string;
  theme: string;
  day: string;
  time: string;
}

interface Learner {
  id: number;
  name: string;
  profile_image: string;
  background_image: string;
  bio: string;
  education: Education[];
  skills: Skills[];
  schedule: Schedule[];
}

export default function LearnersDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [learner, setLearner] = useState<Learner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDetailLearner() {
      if (!id) return;
      try {
        const res = await axios.get(`/api/learners/${id}`);
        setLearner(res.data.learner);
      } catch (error) {
        console.error("Error Fetch Learner:", error);
        setError("Error loading learner details");
      } finally {
        setLoading(false);
      }
    }

    fetchDetailLearner();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <main>{error}</main>;
  if (!learner) return <main>No learner data available.</main>;

  return (
    <div className="relative p-[1.5rem] md:p-[3rem] lg:p-[5rem] bg-blue-900">
      {/* Header Section */}
      <div
        className="p-[1rem] h-[8rem] md:h-[12rem] lg:h-[16rem] rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${learner.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="absolute w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] bottom-[-3rem] shadow-lg rounded-full border-4 border-white"
          style={{
            backgroundImage: `url(${learner.profile_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Learner Info */}
      <div className="mt-[3rem] bg-slate-200 p-4 rounded-lg shadow-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-2">
          {learner.name} <WavingHand />
        </h1>
        <p className="text-gray-700 mt-2 text-sm md:text-lg">{learner.bio}</p>
      </div>

      {/* Education Section */}
      <div className="mt-6 bg-slate-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-2xl font-semibold mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education History
        </h2>
        {learner.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="text-sm md:text-base font-bold">{edu.school_name}</p>
            <p className="text-xs md:text-sm text-gray-600 italic">
              {edu.major} • {edu.year}
            </p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-6 bg-slate-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-2xl font-semibold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5" /> Skills
        </h2>
        <ul>
          {learner.skills.map((skill, index) => (
            <li key={index} className="text-sm md:text-base">
              {skill.skill} - <span className="italic text-gray-600">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Schedule Section */}
      <div className="mt-6 bg-slate-200 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-2xl font-semibold mb-4 flex items-center gap-2">
          <Book className="w-5 h-5" /> Class Schedule
        </h2>
        {learner.schedule.map((sch, index) => (
          <div key={index} className="mb-2">
            <p className="text-sm md:text-base font-bold">{sch.program_name}</p>
            <p className="text-xs md:text-sm text-gray-600">
              {sch.theme} • {sch.day}, {sch.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
