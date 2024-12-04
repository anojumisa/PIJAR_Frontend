"use client";

import React, { useState } from "react";

type MentorProps = {
	mentor: {
		name: string;
		expertise: string;
		profilePicture: string; // URL or static image path
		isFollowing: boolean;
	};
};

const MentorCard: React.FC<MentorProps> = ({ mentor }) => {
	const [isFollowing, setIsFollowing] = useState(mentor.isFollowing);

	const toggleFollow = () => {
		setIsFollowing(!isFollowing);
	};

	return (
		<div className="mentor-card bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
			<img
				src={mentor.profilePicture}
				alt={`${mentor.name}'s profile`}
				className="w-20 h-20 rounded-full mb-4"
			/>
			<h3 className="text-lg font-semibold">{mentor.name}</h3>
			<p className="text-sm text-gray-600">{mentor.expertise}</p>
			<button
				className={`mt-4 px-4 py-2 rounded ${
					isFollowing ? "bg-gray-300 text-gray-700" : "bg-blue-500 text-white"
				}`}
				onClick={toggleFollow}
			>
				{isFollowing ? "Following" : "Follow"}
			</button>
		</div>
	);
};

export default MentorCard;
