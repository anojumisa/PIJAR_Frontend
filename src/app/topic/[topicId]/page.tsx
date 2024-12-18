"use client";
import React, { useState } from "react";
import TopicHeader from "./components/TopicHeader";
import WhatYouLearn from "./components/WhatYouLearn";

const MOCK_TOPIC_DATA = {
    id: "123",
    title: "Belajar Dasar Coding",
    short_description: "Belajar pemrograman dasar untuk pemula",
    rating: 4.5,
    details: "Belajar pemrograman dasar untuk pemula",
    link: "https://www.youtube.com/embed/iA8lLwmtKQM?list=PLZS-MHyEIRo59lUBwU-XHH7Ymmb04ffOY",
    image_url: "https://via.placeholder.com/150"
}

const TopicPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <TopicHeader title={MOCK_TOPIC_DATA.title} short_description={MOCK_TOPIC_DATA.short_description} />
            <WhatYouLearn details={MOCK_TOPIC_DATA.details} />
        </div>
    );
};

export default TopicPage;