"use client";

import SearchResult from "@/components/navbar/search_result";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getSearchResult } from "../../utils/api";
import { SearchResultProps } from "@/components/navbar/search_result";

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const [searchResult, setSearchResult] = useState<SearchResultProps | null>(null);

  useEffect(() => {
    const fetchSearchResult = async (search: string): Promise<{ data: SearchResultProps } | void> => {
      if (search) {
        const resp = await getSearchResult(search);
        setSearchResult(resp.data);
        return { data: resp.data };
      }
    };

    if (search) {
      fetchSearchResult(search);
    }
  }, [search]);

  return (
    <div className="space-y-4 text-white">
      <h2
        style={{
          color: "red",
        }}
      >
        {search}
      </h2>

      {searchResult && searchResult.map((result: SearchResultProps, index: number) => (
        <SearchResult key={index} {...result} />
      ))}
    </div>
  );
};

export default SearchPage;
