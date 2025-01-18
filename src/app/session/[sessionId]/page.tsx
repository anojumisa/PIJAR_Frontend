"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/navbar/navbar";
import Reviews from "@/components/class/Reviews";
import AddReview from "@/components/class/AddReview";

interface SessionDetail {
	id: number;
	title: string;
	description: string;
	videoUrl: string;
	mentor_details: {
		id: number;
		name: string;
		bio: string;
		fullname: string;
		image_url: string;
	};
	average_rating: number;
	day: string;
	duration: number;
	image_url: string;
	location: string;
	price: number;
	seats: number;
	schedule: string;
	session_id: number;
	short_description: string;
	time: string;
	link: string;
}
import { useParams } from "next/navigation";
import { fetchSessionDetails } from "@/utils/api";
import VideoPlayer from "@/components/class/VideoPlayer";
import Comments from "@/components/class/Comments";
import Resources from "@/components/class/Resources";
import ClassInfo from "@/components/class/ClassInfo";
import SessionDetails from "@/components/class/Session";

const SessionPage: React.FC = () => {
	const { sessionId } = useParams();
	const sessionIdNumber = Number(sessionId);
	const [sessionDetail, setSessionDetail] = useState<SessionDetail | null>(
		null
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getSessionDetails = async () => {
			try {
				const data = await fetchSessionDetails(sessionIdNumber);
				setSessionDetail({
					...data,
					videoUrl:
						"https://www.youtube.com/embed/iA8lLwmtKQM?list=PLZS-MHyEIRo59lUBwU-XHH7Ymmb04ffOY",
				});
			} catch (err: any) {
				setError(
					err.message || "An error occurred while fetching the session."
				);
			} finally {
				setLoading(false);
			}
		};

		getSessionDetails();
	}, [sessionId]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	if (!sessionDetail) {
		return <p>No session details found</p>;
	}

	return (
		<div className="p-6 bg-gray-900 min-h-screen">
			<Navbar />
            <VideoPlayer link={sessionDetail.link} />
			<ClassInfo
				classData={sessionDetail}
				mentorData={sessionDetail.mentor_details}
			/>
			<SessionDetails sessionDetail={sessionDetail} />
			<AddReview sessionId={Number(sessionId)} />
			<Reviews sessionId={Number(sessionId)} />
			{/* <Comments sessionId={Number(sessionId)} />
			<Resources sessionId={Number(sessionId)} /> */}
			<Footer />
		</div>
	);
};

export default SessionPage;
