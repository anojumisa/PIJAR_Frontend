import React from "react";
import { Topic } from "@/utils/interface/type";
import Link from "next/link";

interface TopicListProps {
  topics: Topic[];
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => (
  <div className="mt-10">
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {topics.map((topic, index) => (
        <Link key={index} href={`/course?categoryid=${topic.id}`}>
          <div className="p-4 bg-white shadow rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
            <img src={topic.image_url} alt={topic.category_name} className="w-full h-32 object-cover rounded-lg mb-3"/>
            <p className="font-semibold">{topic.category_name}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default TopicList;
