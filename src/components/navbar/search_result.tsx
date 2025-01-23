"use client";
import React, { useState, useEffect } from "react";
import { SearchResultResponse } from "@/utils/api";
import axios from "axios";
import { MentorSearchResultItem, SessionSearchResultItem, TopicSearchResultItem } from "@/utils/api";



 interface SearchResultProps {
  mentors?: MentorSearchResultItem[];
  sessions?: SessionSearchResultItem[];
  topics?: TopicSearchResultItem[];
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

const SearchResult: React.FC<SearchResultProps> = ({ mentors, sessions, topics }) => {
  const [searchResult, setSearchResult] = useState<SearchResultProps>({ mentors: [], sessions: [], topics: [] });
  const [search] = useState<string>("");

  useEffect(() => {
    const fetchSearchResult = async () => {
      if (search) {
        try {
          const resp = await axios.get<SearchResultResponse>(`/api/search?query=${search}`);
          setSearchResult(resp.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };
    fetchSearchResult();
  }, [search]);


  return (
    <div className="grid grid-cols-1 gap-4">
      {searchResult.mentors?.map((mentor: MentorSearchResultItem) => (
      <div key={mentor.email} className="p-4 border rounded shadow flex">
        <img src={mentor.image_url} alt={mentor.fullname} className="h-14 w-14 object-cover rounded-full" />
        <div className="ml-4">
        <h2 className="text-xl font-bold">{mentor.fullname}</h2>
        <p>{mentor.email}</p>
        </div>
      </div>
      ))}
      {searchResult.sessions?.map((session: SessionSearchResultItem) => (
      <div key={session.title} className="p-4 border rounded shadow flex">
        <img src={session.image_url} alt={session.title} className="h-14 w-14 object-cover" />
        <div className="ml-4">
        <h2 className="text-xl font-bold">{session.title}</h2>
        <p>{session.short_description}</p>
        <p className="text-sm text-gray-500">{session.schedule}</p>
        </div>
      </div>
      ))}
      {searchResult.topics?.map((topic: TopicSearchResultItem) => (
      <div key={topic.category_name} className="p-4 border rounded shadow">
        <h2 className="text-xl font-bold">{topic.category_name}</h2>
      </div>
      ))}
    </div>
  );
};

export default SearchResult;
