"use client";

import React, { useState } from "react";
import Image from "next/image";
import UpcomingSessionCard from "../../fragments/UpcomingCard";

type UpcomingSession = {
	image_url: string;
	title: string;
	short_description: string;
	schedule: string;
	link: string;
};

const UpcomingSession: React.FC = () => {
	const [upcomingSessions] = useState<UpcomingSession[]>([
		{
			image_url:
				"https://www.mtu.edu/cs/undergraduate/software/what/images/software-engineering-banner1600.jpg",
			title: "Coding",
			short_description: "Apa itu Coding?",
			schedule: "Selasa, 10:00 - 11:00 WIB",
			link: "https://www.mtu.edu/cs/undergraduate/software/what/images/software-engineering-banner1600.jpg",
		},
		{
			image_url: "https://images.unsplash.com/photo-1581093458791-89c21c3fb1d3",
			title: "Data Science",
			short_description: "Learn the basics of data analysis.",
			schedule: "Kamis, 14:00 - 15:00 WIB",
			link: "https://images.unsplash.com/photo-1581093458791-89c21c3fb1d3",
		},
	]);

	return (
		<div className="upcoming-container p-6 max-w-6xl mx-auto ">
			<div className="text-left mb-6">
				<h2 className="text-2xl md:text-4xl  font-bold text-gray-500 text-center">
					Jadwal Kelas
				</h2>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{upcomingSessions.map((session, index) => (
					<UpcomingSessionCard
						key={index}
						image_url={session.image_url}
						title={session.title}
						short_description={session.short_description}
						schedule={session.schedule}
						link={session.link}
					/>
				))}
			</div>
		</div>
	);
};

export default UpcomingSession;
