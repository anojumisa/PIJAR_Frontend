"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MentorsProfile from "./profileMentor";
import MentorsIntro from "./introduction";
import ExperienceMentors from "./experienceMentors";
import EducationAndSkills from "./educationAndSkills";
import UpComingClasses from "./upComingClasses";
import Loading from "@/components/animation/loading/page";

interface Mentor {
  id: number;
  name: string;
  image_url: string;
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

export default function MentorsDetail() {
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentorDetails = async () => {
      try {
        const id = new URLSearchParams(window.location.search).get("id");
        if (!id) throw new Error("ID not found in query parameters");
        const response = await axios.get(`/api/mentors/${id}`);
        setMentor(response.data.mentors[0]);
      } catch (err) {
        setError("Error fetching mentor details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentorDetails();
  }, []);

  if (loading) return <Loading />;
  if (error) return <main>{error}</main>;
  if (!mentor) return <main>No mentor data available.</main>;

  return (
    <div className="relative p-[1.5rem] md:p-[3rem] lg:p-[5rem] bg-blue-900">
      <MentorsProfile mentor={mentor} />
      <MentorsIntro mentor={mentor} />
      <ExperienceMentors mentor={mentor} />
      <EducationAndSkills mentor={mentor} />
      <UpComingClasses mentor={mentor} />
    </div>
  );
}
