"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/components/animation/loading/page";
import { fetchSessionClass } from "@/utils/api";
import StarRating from "../custom-rate/customrate";
import { format, toZonedTime } from "date-fns-tz";

interface MentorDetails {
  id: number;
  fullname: string;
  image_url: string;
}

interface MentorSession {
  session_id: number;
  mentor_details: MentorDetails;
  category: string;
  title: string;
  short_description: string;
  detail: string;
  schedule: string;
  duration: number;
  image_url: string;
  link: string;
  day: string;
  time: string;
  average_rating: number;
  scheduleLocal?: string;
  scheduleWIB?: string;
  scheduleWITA?: string;
  scheduleWIT?: string;
}

interface ClassSessionProps {
  sessionId: number;
}

export default function ClassSession({ sessionId }: ClassSessionProps) {
  const [sessions, setSessions] = useState<MentorSession | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getTimeZoneLabel = (timezone: string): string => {
    switch (timezone) {
      case "Asia/Jakarta":
        return "WIB";
      case "Asia/Makassar":
        return "WITA";
      case "Asia/Jayapura":
        return "WIT";
      default:
        return "Unknown";
    }
  };

  const formatToLocalTimezone = (dateString: string, timezone: string) => {
    const date = new Date(dateString);
    const zonedTime = toZonedTime(date, timezone);
    return format(zonedTime, "EEE, dd-MM-yyyy, HH:mm", { timeZone: timezone });
  };

  const getUserTimezone = () =>
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    if (!sessionId) {
      setError("Invalid or missing user ID.");
      setLoading(false);
      return;
    }

    const fetchClassSessions = async () => {
      try {
        const response = await fetchSessionClass(sessionId);
        console.log("Class sessions fetched:", response); 
        const userTimezone = getUserTimezone();
        const formattedResponse = {
          ...response,
          scheduleLocal: formatToLocalTimezone(response.schedule, userTimezone),
        };

        setSessions(formattedResponse);
      } catch (err) {
        setError("Error fetching sessions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClassSessions();
  }, [sessionId]);

  if (loading) return <Loading />;
  if (error) return <main>{error}</main>;
  if (!sessions) return <main>No sessions available</main>;

  return (
    <>
      <div className=" p-5 rounded-lg my-5 shadow-md">
        <h2 className="text-lg text-zinc-400 md:text-xl lg:text-2xl font-semibold mb-4">
          Kelas yang Akan Datang
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-center text-white transform transition duration-300 hover:scale-105">
            <img
              src={sessions.image_url || "https://via.placeholder.com/150"}
              alt="Session"
              className="rounded-lg mb-4 mx-auto"
            />
            <h3 className="pt-3 text-xl font-bold text-black">{sessions.title}</h3>
            <p className="pt-1 font-bold text-zinc-200 italic">
              {sessions.short_description}
            </p>
            <StarRating rating={sessions.average_rating || 0} />
            <p className="pt-1 font-bold text-black">
              {sessions.scheduleLocal}
            </p>
            <p className="font-bold text-black">{sessions.time}</p>
          </div>
        </div>
      </div>
    </>
  );
}
