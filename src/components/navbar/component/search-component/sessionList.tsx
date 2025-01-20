import React from "react";
import { Session } from "@/utils/interface/type";

interface SessionListProps {
  sessions: Session[];
}

const SessionList: React.FC<SessionListProps> = ({ sessions }) => (
  <div className="mt-10">
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {sessions.map((session) => (
        <div
          key={session.session_id}
          className="p-4 bg-white shadow rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <img
            src={session.image_url || "https://via.placeholder.com/150"}
            alt={session.title}
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <h3 className="font-bold text-stone-800 line-clamp-2">{session.title}</h3>
          <p className="text-sm font-bold text-stone-700 line-clamp-2">
            {session.short_description}
          </p>
          <p className="text-bold text-stone-500 mt-4">{session.schedule}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SessionList;
