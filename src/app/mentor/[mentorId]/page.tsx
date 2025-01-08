"use client";
import React, { useEffect, useState } from "react";
import EducationAndSkills from "@/components/detail-mentors/educationAndSkills";
import Loading from "@/components/animation/loading/page";
import { fetchMentorDetail } from "@/utils/api";
import MentorsProfile from "@/components/detail-mentors/profileMentor";
import MentorsIntro from "@/components/detail-mentors/introduction";
import ExperienceMentors from "@/components/detail-mentors/experienceMentors";
import ClassSession from "@/components/detail-mentors/sessionClass";


interface MentorExperience {
  company_name: string;
  end_date: string; 
  occupation: string;
  start_date: string; 
}

interface MentorExpertise {
  category: string;
  expertise: string;
}

interface Mentor {
  fullname: string;
  image_url: string;
  mentor_bio: string;
  mentor_experiences: MentorExperience[];
  mentor_expertise: MentorExpertise[];
  occupation: string;
  user_id: number;
}


export default function MentorsDetail({ params }: { params: Promise<{ mentorId: string }> }) {
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const mentorParams = React.use(params) as { mentorId: string };
  const mentorId = mentorParams.mentorId;
 
  useEffect(() => {
    const fetchMentorDetails = async () => {
      try {
        const response = await fetchMentorDetail(mentorId);
        setMentor(response);
      } catch (err) {
        setError("Error fetching mentor details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentorDetails();
  }, [mentorId]);

  if (loading) return <Loading />;
  if (error) return <main>{error}</main>;
  if (!mentor) return <main>No mentor data available.</main>;

  return (
    <div className="relative p-[1.5rem] md:p-[3rem] lg:p-[5rem] bg-black">
      <MentorsProfile mentor={mentor} />
      <MentorsIntro mentor={mentor} />
      <ExperienceMentors mentor={mentor} />
      <EducationAndSkills mentor={mentor}/>
      <ClassSession userId={String(mentor.user_id)} /> {/* explisite prop */}
    </div>
  );
}