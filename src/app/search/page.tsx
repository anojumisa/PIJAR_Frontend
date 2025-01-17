"use client";
import React, { useState, useEffect } from "react";
import { searchDataByKeyword } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/animation/loading/page";
import Navbar_not_auth from "@/components/navbar/navbar";
import Footer from "@/components/landing-page/Footer";
import MentorList from "@/components/navbar/component/search-component/mentorList";
import SessionList from "@/components/navbar/component/search-component/sessionList";
import TopicList from "@/components/navbar/component/search-component/topicList";

import { Mentor, Session, Topic } from "@/utils/interface/type";

interface ApiResponse {
  mentors: Mentor[];
  sessions: Session[];
  topics: Topic[];
}

const SearchResult: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("keyword") || "";
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState<
    "mentors" | "sessions" | "topics" | null
  >(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const data: ApiResponse = await searchDataByKeyword(query);

        if (data.mentors && data.mentors.length > 0) {
          setActiveCategory("mentors");
          setMentors(data.mentors);
        } else if (data.sessions && data.sessions.length > 0) {
          setActiveCategory("sessions");
          setSessions(data.sessions);
        } else if (data.topics && data.topics.length > 0) {
          setActiveCategory("topics");
          setTopics(data.topics);
        } else {
          setActiveCategory(null);
        }
      } catch (err) {
        setError("Gagal memuat hasil pencarian");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <Navbar_not_auth />
      <div className="p-10">
        {activeCategory === "mentors" && <MentorList mentors={mentors} />}
        {activeCategory === "sessions" && <SessionList sessions={sessions} />}
        {activeCategory === "topics" && <TopicList topics={topics} />}
        {!activeCategory && (
          <p className="text-center text-xl font-semibold mb-4 text-gray-500">
            Hasil Pencarian{" "}
            <span className="font-bold text-blue-500">{query}</span>Tidak di
            Temukan
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
