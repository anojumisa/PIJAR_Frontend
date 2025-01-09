"use client";
import SearchResult from '@/components/navbar/search_result';
import React from 'react';

interface SearchResultProps {
    id: number;
    categories: string;
    mentor: string;
    topic: string;
}



const SearchPage: React.FC = () => {
    const dummyData: SearchResultProps[] = [
        { id: 1, categories: "React Basics", mentor: "John Doe", topic: "React" },
        { id: 2, categories: "Advanced TypeScript", mentor: "Jane Smith", topic: "TypeScript" },
        { id: 3, categories: "GraphQL for Beginners", mentor: "Alice Johnson", topic: "GraphQL" },
    ];

    return (
        <div className="space-y-4 text-white">
            {dummyData.map((dummy) => (
                <SearchResult query={''} key={dummy.id} {...dummy} />
            ))}
        </div>
    );
};



export default SearchPage;