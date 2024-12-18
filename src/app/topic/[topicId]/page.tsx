"use client";
import React from "react";
import { useParams } from "react-router-dom";
import TopicHeader from "./components/TopicHeader";
import WhatYouLearn from "./components/WhatYouLearn";

const MOCK_TOPIC_DATA = {
  "123": {
    id: "123",
    title: "Belajar Dasar Coding",
    short_description: "Belajar pemrograman dasar untuk pemula",
    rating: 4.5,
    details: "Belajar pemrograman dasar untuk pemula",
    link: "https://www.youtube.com/embed/iA8lLwmtKQM?list=PLZS-MHyEIRo59lUBwU-XHH7Ymmb04ffOY",
    image_url: "https://via.placeholder.com/150"
  },
};

const TopicPage: React.FC = () => {
  const { topicId }: { topicId: string } = useParams();
  const topicData = MOCK_TOPIC_DATA[topicId as keyof typeof MOCK_TOPIC_DATA];

  if (!topicData) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TopicHeader title={topicData.title} short_description={topicData.short_description} />
      <WhatYouLearn details={topicData.details} />
    </div>
  );
};

export default TopicPage;