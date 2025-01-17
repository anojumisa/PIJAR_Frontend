"use client";

// import SearchResult, { SearchResultProps } from "@/components/navbar/search_result";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getSearchResult } from "../../utils/api";
import { SearchResultResponse } from "../../utils/api";
import SearchResult from "@/components/navbar/search_result";
import axios from "axios";



const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const [searchResult, setSearchResult] = useState<SearchResultResponse[]>([]);

  useEffect(() => {
    const fetchSearchResult = async () => {
      if (search) {
        try {
          const searchUrl = await getSearchResult(search);
          const resp = await axios.get(searchUrl);
          const dataArray = Array.isArray(resp.data) ? resp.data : [];
          setSearchResult(dataArray);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };
    fetchSearchResult();
  }, [search]);

  return (
    <div className="space-y-4 text-white">
      <h2
        style={{
          color: "white",
        }}
      >
        {search}
      </h2>
      {searchResult &&
        searchResult.map((result: SearchResultResponse, index: number) => (
          <SearchResult
            key={index}
            mentors={result.mentors}
            sessions={result.sessions}
            topics={result.topics}
          />
        ))}
    {searchResult.length === 0 && (
      <p>No results found for "{search}". Please try a different query.</p>
    )}
    </div>
  );
};
export default SearchPage;
