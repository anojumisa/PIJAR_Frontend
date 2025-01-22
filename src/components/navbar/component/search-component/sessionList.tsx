import React from "react";
import { Session } from "@/utils/interface/type";
import Link from "next/link";

interface SessionListProps {
  sessions: Sessions[];
}

const formatSchedule = (schedule: string) => {
  const date = new Date(schedule);
  return date.toLocaleDateString("id-ID", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const SessionList: React.FC<SessionListProps> = ({ sessions }) => (
  <div className="mt-10">
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {sessions.map((session) => (
        <Link key={session.session_id} href={`/topic/${session.session_id}`}>
          <div className="p-4 bg-white shadow rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            <img
              src={session.image_url || "https://via.placeholder.com/150"}
              alt={session.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-stone-800 line-clamp-2">{session.title}</h3>
            <p className="text-sm font-bold text-stone-700 line-clamp-2">
              {session.short_description}
            </p>
            <p className="text-bold text-stone-800 mt-4">{formatSchedule(session.schedule)}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default SessionList;
