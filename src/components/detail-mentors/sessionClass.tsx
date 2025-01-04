'use client';

import React, { useEffect, useState } from "react";
import Loading from "@/components/animation/loading/page";
import { fetchSessionClass } from "@/utils/api";

interface MentorDetails {
  id: number;
  fullname: string;
  image_url: string;
}

interface MentorSession {
  mentor_session_title: string;
  short_description: string;
  schedule: string;
  registered: boolean;
  mentor_details: MentorDetails;
}

interface ClassSessionProps {
  userId: string;
}

export default function ClassSession({ userId }: ClassSessionProps) {
  const [sessions, setSessions] = useState<MentorSession[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClassSessions = async () => {
      try {
        const numericUserId = Number(userId);
        if (isNaN(numericUserId)) {
          throw new Error("Invalid user ID");
        }

        const response = await fetchSessionClass(numericUserId);
        setSessions(response);
      } catch (err) {
        setError("Error fetching sessions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClassSessions();
  }, [userId]);

  if (loading) return <Loading />;
  if (error) return <main>{error}</main>;

  return (
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
      {(!sessions || sessions.length === 0) && (
        <p className="text-center text-xl font-semibold text-gray-500">
          Belum ada kelas yang dibuat
        </p>
      )}
      {sessions && sessions.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-6">
          {sessions.map((session) => {
            
            const imageUrl =
              session.mentor_details.image_url ||
              "https://via.placeholder.com/150"; 
            
            return (
              <div
                className="text-xs md:text-base lg:text-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-[0.5rem] lg:p-[1rem] text-center text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                key={session.mentor_session_title}
              >
                <img
                  className="w-full h-[10rem] rounded-lg"
                  src={imageUrl}
                  alt={session.mentor_session_title}
                />
                <h3 className="pt-4 font-bold font-firaSans text-amber-300">
                  {session.mentor_session_title}
                </h3>
                <p className="pt-4 font-bold font-firaSans text-amber-300">
                  {session.short_description}
                </p>
                <p>{session.schedule}</p>

                {/* <button
                  className="mt-4 bg-sky-700 rounded-lg text-white font-openSans"
                  style={{
                    padding: "0.63rem 1.25rem",
                    cursor: "pointer",
                  }}
                >
                  Daftar
                </button> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
