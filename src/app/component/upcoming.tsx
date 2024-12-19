"use client";

import React, { useState, useEffect } from "react";
import UpcomingSessionCard from "@/fragments/UpcomingCard";

type UpcomingSession = {
  mentor_session_title: string;
  short_description: string;
  schedule: string;
};

const UpcomingSession: React.FC = () => {
  const [upcomingSession, setUpcomingSession] = useState<UpcomingSession[]>([]);

  useEffect(() => {
    const fetchUpcomingSession = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/sessions"); 
        const data = await response.json();
        setUpcomingSession(data);
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      }
    };

    fetchUpcomingSession();
  }, []);

  return (
    <div className="upcoming-container p-6 max-w-6xl mx-auto">
      <div className="text-left mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-500 text-center">
          Jadwal Kelas
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingSession.map((session, index) => (
          <UpcomingSessionCard
            key={index} 
            mentor_session_title={session.mentor_session_title}
            short_description={session.short_description}
            schedule={session.schedule}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingSession;
