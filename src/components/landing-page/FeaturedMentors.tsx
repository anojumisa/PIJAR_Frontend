"use client";

import React, { useEffect, useState } from "react";
import MentorCard from "@/fragments/MentorCard";
import { fetchFeaturedMentors } from "@/utils/api";
import Link from "next/link";

type Mentor = {
	fullname: string;
	occupation: string;
	image_url: string;
	id: number;
};

const FeaturedMentors: React.FC = () => {
	const [mentors, setMentors] = useState<Mentor[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
/*************  ✨ Codeium Command ⭐  *************/
	/**
	 * Fetches featured mentors from the API, maps the response to ensure proper
	 * casing and data structure, and updates the component state with the
	 * fetched mentors.
	 *
	 * If the API call fails, sets an error state and logs the error to the
	 * console.
	 *
	 * Finally, always sets the loading state to false.
	 */
/******  bb4a586d-8d69-4c74-9e45-6ef5288b5b5d  *******/		const fetchMentors = async () => {
			try {
				setLoading(true); // Set loading state
				const response = await fetchFeaturedMentors();
				// Map the response to ensure proper casing and data structure
				const mappedMentors = response.Data.map((mentor: any) => ({
					fullname: mentor.fullname,
					occupation: mentor.occupation,
					image_url: mentor.image_url,
					id: mentor.id,
				}));
				setMentors(mappedMentors);
			} catch (err) {
				setError("Failed to load mentors. Please try again later.");
				console.error("Error:", err);
			} finally {
				setLoading(false); // Stop loading state
			}
		};

		fetchMentors();
	}, []);

	return (
		<div className="featured-mentors-container p-6 max-w-6xl mx-auto">
			<h2 className="text-2xl md:text-4xl mb-6 font-bold text-gray-500 text-center">
				Mentor Pilihan
			</h2>

			{loading ? (
				<p>Loading mentors...</p>
			) : error ? (
				<p className="text-red-500">{error}</p>
			) : (
				<div className="mentor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
					{Array.isArray(mentors) && mentors.length > 0 ? (
						mentors.map((mentor) => (
							<Link key={mentor.id} href={`/mentor/${mentor.id}`} passHref>
								<div className="block">
									<MentorCard
										mentor={{
											name: mentor.fullname,
											expertise: mentor.occupation,
											profilePicture: mentor.image_url,
											isFollowing: false, // Assuming default value
										}}
									/>
								</div>
							</Link>
						))
					) : (
						<p>Tidak ada mentor yang tersedia.</p>
					)}
				</div>
			)}
		</div>
	);
};

export default FeaturedMentors;
