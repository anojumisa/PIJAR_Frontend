import React, { useState } from "react";

type MentorProps = {
	mentor: {
		name: string;
		expertise: string;
		profilePicture: string; // URL or static image path
		isFollowing: boolean;
	};
	onCardClick: () => void; // New prop for handling card clicks
};

const MentorCard: React.FC<MentorProps> = ({ mentor, onCardClick }) => {
	const [isFollowing, setIsFollowing] = useState(mentor.isFollowing);

	const toggleFollow = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent click propagation to the card
		setIsFollowing(!isFollowing);
	};

	return (
		<div
			className="mentor-card bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:cursor-pointer hover:transform hover:scale-105 transition duration-300"
			onClick={onCardClick} // Attach the click handler to the card
		>
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
					onClick={toggleFollow} // Handle follow/unfollow logic here
					className={`mt-2 lg:mt-0 px-4 py-2 rounded outline-black hover:cursor-alias ${
						isFollowing
							? "bg-gradient-to-r from-gray-800 to-cyan-800 text-red-400"
							: "bg-gradient-to-r from-slate-800 to-cyan-900 text-yellow-500"
					}`}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</button>
			</div>
		</div>
	);
};

export default MentorCard;