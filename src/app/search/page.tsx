"use client";

import SearchResult from "@/components/navbar/search_result";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getSearchResult, SearchResultResponse } from "../../utils/api";

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const [searchResult, setSearchResult] = useState<SearchResultResponse>({});

  useEffect(() => {
    const fetchSearchResult = async () => {
      const resp = await getSearchResult(search);
      setSearchResult(resp.data);
    };

    fetchSearchResult();
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

      {/* {searchResult.map((dummy) => (
        <SearchResult query={""} key={dummy.id} {...dummy} />
      ))} */}
    </div>
  );
};

export default SearchPage;
