import React from "react";
import { Topic } from "@/utils/interface/type";

interface TopicListProps {
  topics: Topic[];
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => (
  <div className="mt-10">
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <p className="font-semibold">{topic.category_name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TopicList;
