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

	const toggleFollow = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent the click event from propagating to the Link
		setIsFollowing(!isFollowing);
	};

	return (
		<div className="mentor-card bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:transform hover:scale-105 transition duration-300">
			<img
				src={mentor.profilePicture}
				alt={`${mentor.name}'s profile`}
				className="w-20 h-20 rounded-full mb-4"
			/>
			<div className="flex justify-between w-full lg:flex-row sm:items-center sm:flex-col">
				<div>
					<h3 className="text-lg font-semibold">{mentor.name}</h3>
					<p className="text-sm text-gray-800">{mentor.expertise}</p>
				</div>
				<button
					onClick={toggleFollow}
					className={`mt-2 lg:mt-0 px-4 py-2 rounded outline-black ${
						isFollowing
							? "bg-gradient-to-r from-clay-500 to-pink-500 text-white"
							: "bg-gradient-to-r from-slate-900 to-cyan-600 text-yellow-500"
					}`}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</button>
			</div>
		</div>
	);
};

export default MentorCard;
