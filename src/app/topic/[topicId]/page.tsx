"use client";
import React, { useState, useEffect } from "react";
import ImageButton from "../../../components/Topic/ImageButton";
import TopicHeader from "../../../components/Topic/TopicHeader";
import WhatYouLearn from "../../../components/Topic/WhatYouLearn";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/navbar/navbar";
import Loading from "@/components/animation/loading/page";
import { fetchSessionDetails } from "@/utils/api";

/*
const MOCK_TOPIC_DATA = {
	id: "123",
	title: "Belajar Dasar Coding",
	mentor: "John Doe",
	short_description: "Belajar pemrograman dasar untuk pemula",
	rating: 4.8,
	details:
		"Pada materi ini pelajar akan diperkenalkan dengan dasar-dasar pemgrograman. Topik yang akan dibahas pada materi ini akan berupa bagaimana cara membuat HTML sederhana serta pengenalan tentang repository Git.",
	link: "../class/123",
	image_url:
		"https://codeop.tech/wp-content/webp-express/webp-images/uploads/2023/11/arpad-czapp-H424WdcQN4Y-unsplash-scaled.jpg.webp",
};
*/

interface SessionDetail {
	session_id: number;
	title: string;
	short_description: string;
	image_url: string;
	average_rating: number;
	link: string;
	detail: string;
}
const TopicPage: React.FC = () => {

	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [sessionDetails, setSessionDetails] = useState<SessionDetail | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const getSessionDetails async () => {
				try {
					
				}catch (err: any) {
					
				}
			}
		} 
	})
	return (
		<>
			<Navbar />
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<ImageButton
						image_url={SessionDetail.image_url}
						title={SessionDetail.title}
					/>
					<TopicHeader
						title={SessionDetail.title}
						mentor={SessionDetail.mentor}
						short_description={SessionDetail.short_description}
						rating={SessionDetail.rating}
						link={SessionDetail.link}
					/>
				</div>
				<div className="mt-8">
					<WhatYouLearn details={SessionDetail.details} />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default TopicPage;
