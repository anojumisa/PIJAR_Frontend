"use client";

import React from "react";
import Link from "next/link";

interface UpcomingSessionCardProps {
	image_url: string;
	title: string;
	short_description: string;
	schedule: string;
	link: string;
}

const UpcomingSessionCard: React.FC<UpcomingSessionCardProps> = ({
	image_url,
	title,
	short_description,
	schedule,
	link,
}) => {
	// Parse and format the schedule string
	const date = new Date(schedule);
	const formattedDate = new Intl.DateTimeFormat("id-ID", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	}).format(date);

	return (
		<div className="upcoming-session-card bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md rounded-lg p-4">
			<img
				src={image_url}
				alt={title}
				className="w-full h-40 object-cover rounded-t-2xl opacity-90"
			/>
			<div className="p-4 space-y-2">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-sm text-gray-700">{short_description}</p>
				<p className="text-sm text-white pb-5">{formattedDate}</p>
				<Link
					href="/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white bg-blue-900 hover:bg-gray-800 bg-opacity-80 px-4 py-2 rounded-lg mt-4 inline-block animate-pulse "
				>
					Join Session
				</Link>
			</div>
		</div>
	);
};

export default UpcomingSessionCard;
