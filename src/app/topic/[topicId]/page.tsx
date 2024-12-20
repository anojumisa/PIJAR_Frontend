"use client";
import React, { useState } from "react";
import ImageButton from "../../../components/Topic/ImageButton";
import TopicHeader from "../../../components/Topic/TopicHeader";
import WhatYouLearn from "../../../components/Topic/WhatYouLearn";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/navbar";

const MOCK_TOPIC_DATA = {
    id: "123",
    title: "Belajar Dasar Coding",
    mentor: "John Doe",
    short_description: "Belajar pemrograman dasar untuk pemula",
    rating: 4.8,
    details: "Pada materi ini pelajar akan diperkenalkan dengan dasar-dasar pemgrograman. Topik yang akan dibahas pada materi ini akan berupa bagaimana cara membuat HTML sederhana serta pengenalan tentang repository Git.",
    link: "../class/123",
    image_url: "https://codeop.tech/wp-content/webp-express/webp-images/uploads/2023/11/arpad-czapp-H424WdcQN4Y-unsplash-scaled.jpg.webp"
}

const TopicPage: React.FC = () => {
    return (
    <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageButton
                    image_url={MOCK_TOPIC_DATA.image_url}
                    title={MOCK_TOPIC_DATA.title}
                    link={MOCK_TOPIC_DATA.link}
                />
                <TopicHeader
                    title={MOCK_TOPIC_DATA.title}
                    mentor={MOCK_TOPIC_DATA.mentor}
                    short_description={MOCK_TOPIC_DATA.short_description}
                    rating={MOCK_TOPIC_DATA.rating}
                />
            </div>
            <div className="mt-8">
                <WhatYouLearn details={MOCK_TOPIC_DATA.details} />
            </div>
        </div>
        <Footer />
    </>
    );
};

export default TopicPage;