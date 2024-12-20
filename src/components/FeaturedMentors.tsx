"use client";

import React, { useEffect, useState } from "react";
import MentorCard from "@/fragments/MentorCard";
import { fetchFeaturedMentors } from "@/utils/api";

type Mentor = {
	fullname: string;
	occupation: string;
	image_url: string;
	id: number;
};

const FeaturedMentors: React.FC = () => {
	const [mentors, setMentors] = useState<Mentor[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMentors = async () => {
			try {
				const data = await fetchFeaturedMentors(1, 10); // Pass page and pagesize parameters
				setMentors(data);
			} catch (error) {
				console.error("Failed to fetch mentors:", error);
				setError("Gagal memuat mentor");
			} finally {
				setLoading(false);
			}
		};

		fetchMentors();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="featured-mentors-container p-6 max-w-6xl mx-auto">
			<h2 className="text-2xl md:text-4xl mb-6 font-bold text-gray-500 text-center">
				Mentor Pilihan
			</h2>
			<div className="mentor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				{Array.isArray(mentors) && mentors.length > 0 ? (
					mentors.map((mentor) => (
						<MentorCard
							key={mentor.id}
							mentor={{
								name: mentor.fullname,
								expertise: mentor.occupation,
								profilePicture: mentor.image_url,
								isFollowing: false, // Assuming default value
							}}
						/>
					))
				) : (
					<p>Tidak ada mentor yang tersedia.</p>
				)}
			</div>
		</div>
	);
};

export default FeaturedMentors;
