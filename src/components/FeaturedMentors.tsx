"use client";

import React from "react";
import MentorCard from "@/fragments/MentorCard";

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
			profilePicture: "https://i.pravatar.cc/150?img=9",
			isFollowing: false,
		},
		{
			name: "Mentor B",
			expertise: "Agrikultur",
			profilePicture: "https://i.pravatar.cc/150?img=1",
			isFollowing: true,
		},
		{
			name: "Mentor C",
			expertise: "Pengelolaan Keuangan",
			profilePicture: "https://i.pravatar.cc/150?img=2",
			isFollowing: false,
		},
		{
			name: "Mentor D",
			expertise: "Pemasaran",
			profilePicture: "https://i.pravatar.cc/150?img=3",
			isFollowing: false,
		},
		{
			name: "Mentor E",
			expertise: "Kewirausahaan",
			profilePicture: "https://i.pravatar.cc/150?img=4",
			isFollowing: true,
		},
		{
			name: "Mentor F",
			expertise: "Pelayanan Kesehatan",
			profilePicture: "https://i.pravatar.cc/150?img=5",
			isFollowing: false,
		},
		{
			name: "Mentor G",
			expertise: "Desain",
			profilePicture: "https://i.pravatar.cc/150?img=6",
			isFollowing: true,
		},
		{
			name: "Mentor H",
			expertise: "Bisnis",
			profilePicture: "https://i.pravatar.cc/150?img=7",
			isFollowing: false,
		},
	];

	return (
		<div className="featured-mentors-container p-6 max-w-6xl mx-auto">
			<h2 className="text-2xl font-bold text-neutral-400 text-center mb-6">Mentor Pilihan</h2>
			<div className="mentor-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				{mentors.map((mentor, index) => (
					<MentorCard key={index} mentor={mentor} />
				))}
			</div>
		</div>
	);
};

export default FeaturedMentors;
