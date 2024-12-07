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
		<div className="mentor-card bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:transform hover:scale-105 transition duration-300">
			<img
				src={mentor.profilePicture}
				alt={`${mentor.name}'s profile`}
				className="w-20 h-20 rounded-full mb-4"
			/>
			<div className="flex justify-between w-full">
				<div>
					<h3 className="text-lg font-semibold">{mentor.name}</h3>
					<p className="text-sm text-gray-800">{mentor.expertise}</p>
				</div>

				<button
					className={`mt-4 px-4 py-2 rounded ${
						isFollowing ? "bg-gradient-to-r from-emerald-500 to-emerald-900 text-gray-900" : "bg-sky-700 text-white hover:transform hover:scale-105 transition duration-300"
					}`}
					onClick={toggleFollow}
				>
					{isFollowing ? "Following" : "Follow"}
				</button>
			</div>
		</div>
	);
};

export default MentorCard;
