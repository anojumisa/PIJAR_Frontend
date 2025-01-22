"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ImageButton from "../../../components/Topic/ImageButton";
import TopicHeader from "../../../components/Topic/TopicHeader";
import WhatYouLearn from "../../../components/Topic/WhatYouLearn";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/navbar/navbar";
import Loading from "@/components/animation/loading/page";
import { fetchSessionDetails } from "@/utils/api";

interface TopicDetail {
  session_id: number;
  mentor_details: {
    id: number;
    fullname: string;
    image_url: string;
  };
  title: string;
  short_description: string;
  image_url: string;
  average_rating: number;
  link: string;
  detail: string;
}

const TopicPage: React.FC = () => {
  const params = useParams();
  const session_id = Number(params?.topicId);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionDetails, setSessionDetails] = useState<TopicDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSessionDetails(session_id);
        setSessionDetails(data);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching the session.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4 py-8">
          {sessionDetails && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageButton
                  image_url={sessionDetails.image_url}
                  title={sessionDetails.title}
                />
                <TopicHeader
                  title={sessionDetails.title}
                  mentor_details={sessionDetails.mentor_details}
                  short_description={sessionDetails.short_description}
                  average_rating={sessionDetails.average_rating}
                  link={sessionDetails.link}
                />
              </div>
              <div className="mt-8">
                <WhatYouLearn detail={sessionDetails.detail} />
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default TopicPage;