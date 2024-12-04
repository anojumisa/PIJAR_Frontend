"use client";

import React from "react";
import MentorCard from "../fragments/MentorCard";

type Mentor = {
	name: string;
	expertise: string;
	profilePicture: string; // URL or static image path
	isFollowing: boolean;
};

const FeaturedMentors: React.FC = () => {
	// Sample mentor data
	const mentors: Mentor[] = [
		{
			name: "Mentor A",
			expertise: "Coding",
			profilePicture: "/images/mentor1.jpg",
			isFollowing: false,
		},
		{
			name: "Mentor B",
			expertise: "Agriculture",
			profilePicture: "/images/mentor2.jpg",
			isFollowing: true,
		},
		{
			name: "Mentor C",
			expertise: "Finance",
			profilePicture: "/images/mentor3.jpg",
			isFollowing: false,
		},
		{
			name: "Mentor D",
			expertise: "Marketing",
			profilePicture: "/images/mentor4.jpg",
			isFollowing: false,
		},
		{
			name: "Mentor E",
			expertise: "Entrepreneurship",
			profilePicture: "/images/mentor5.jpg",
			isFollowing: true,
		},
	];

	return (
		<div className="featured-mentors-container p-6 max-w-6xl mx-auto">
			<h2 className="text-2xl font-bold text-center mb-6">Mentor Pilihan</h2>
			<div className="mentor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				{mentors.map((mentor, index) => (
					<MentorCard key={index} mentor={mentor} />
				))}
			</div>
		</div>
	);
};

export default FeaturedMentors;
