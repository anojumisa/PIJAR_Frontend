"use client";
import React, { useState, useEffect, Suspense } from "react";
import { searchDataByKeyword } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import Loading from "../animation/loading/page";

interface Mentor {
  email: string;
  fullname: string;
  image_url: string;
}

interface Session {
  image_url: string;
  schedule: string;
  short_description: string;
  title: string;
}

interface Topic {
  category_name: string;
}

interface ApiResponse {
  mentors: Mentor[];
  sessions: Session[];
  topics: Topic[];
}

const SearchResult: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("keyword") || ""; // Mendapatkan nilai keyword dari URL
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true); // Mulai loading
        const data: ApiResponse = await searchDataByKeyword(query);
        setMentors(data.mentors);
        setSessions(data.sessions);
        setTopics(data.topics);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setLoading(false); // Selesai loading
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Suspense>

      <div>
        <h1>Search Results for "{query}"</h1>
        <div className="grid grid-cols-1 gap-4 p-5">
          <div className="p-5 border rounded shadow">
            <h2 className="text-xl font-bold py-1">Mentors</h2>
            <ul>
              {mentors.map((mentor, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <img
                      src={mentor.image_url}
                      alt={mentor.fullname}
                      className="h-10 w-10 rounded-full mr-3"
                    />
                    <div>
                      <p>{mentor.fullname}</p>
                      <p>{mentor.email}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 border rounded shadow">
            <h2 className="text-xl font-bold">Sessions</h2>
            <ul>
              {sessions.map((session, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <img
                      src={session.image_url}
                      alt={session.title}
                      className="h-14 w-14 mr-3"
                    />
                    <div>
                      <h3>{session.title}</h3>
                      <p>{session.schedule}</p>
                      <p>{session.short_description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 border rounded shadow">
            <h2 className="text-xl font-bold">Topics</h2>
            <ul>
              {topics.map((topic, index) => (
                <li key={index}>{topic.category_name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SearchResult;
