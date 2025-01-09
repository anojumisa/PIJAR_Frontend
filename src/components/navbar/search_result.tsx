"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface SearchResultProps {
  id: number;
  categories: string;
  mentor: string;
  topic: string;
  query: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ query }) => {
  const [mentors, setMentors] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [topics, setTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const mentorResponse = await axios.get(`/api/mentors?search=${query}`);
        const categoryResponse = await axios.get(
          `/api/categories?search=${query}`
        );
        const topicResponse = await axios.get(`/api/topics?search=${query}`);

        setMentors(mentorResponse.data);
        setCategories(categoryResponse.data);
        setTopics(topicResponse.data);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 gap-4 p-5">
        <div className="p-5 border rounded shadow flex">
          <img
            src="/pijarLogo.png"
            alt="Pijar Logo"
            className="h-14 w-auto px-4 mt-2"
          />

          <div>
            <h2 className="text-xl font-bold py-1">Mentors: Person Name </h2>
            <p>
              Description: A description of someone can include their physical
              appearance, personality traits, and sometimes their occupation or
              hobbies.{" "}
            </p>
            <ul>
              {mentors.map((mentor: any) => (
                <li key={mentor.id}>{mentor.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-5 border rounded shadow flex">
          <img
            src="/pijarLogo.png"
            alt="Pijar Logo"
            className="h-14 w-auto px-4 mt-2"
          />

          <div>
            <h2 className="text-xl font-bold">Categories: </h2>
            <p>
              description: " refers to the broad field or discipline that a
              particular area of study falls under, such as "natural sciences,"
              "social sciences," "humanities," "business," "engineering,"
              "medicine," or "arts,"{" "}
            </p>
            <ul>
              {categories.map((category: any) => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4 border rounded shadow flex">
          <img
            src="/pijarLogo.png"
            alt="Pijar Logo"
            className="h-14 w-auto px-4 mt-2"
          />
          <div>
            <h2 className="text-xl font-bold">Topics: </h2>
            <p>
              description: A "topic of study name" refers to the specific
              subject or area of focus within a field of study that a researcher
              or student chooses to investigate{" "}
            </p>
            <ul>
              {topics.map((topic: any) => (
                <li key={topic.id}>{topic.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
