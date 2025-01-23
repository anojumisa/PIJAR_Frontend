"use client";
import React, { useState } from "react";
import Link from "next/link";

interface TopicHeaderProps {
	mentor_details: {
		id: number;
		fullname: string;
		image_url: string;
	};
	title: string;
	short_description: string;
	average_rating: number;
	link: string;
	session_id: number;
}

const TopicHeader: React.FC<TopicHeaderProps> = ({
	mentor_details,
	title,
	short_description,
	average_rating,
	session_id,
}) => {
	return (
		<div className="p-4 bg-neutral-800 shadow border border-neutral-400 rounded-2xl">
			<img
				src={mentor_details.image_url}
				alt={mentor_details.fullname}
				className="h-60 w-full object-cover rounded-lg"
			/>
			<p className="text-sm font-bold text-white">
				Mentor: {mentor_details.fullname}
			</p>
			<h2 className="text-4xl text-neutral-300 font-semibold">{title}</h2>
			<p className="text-sm font-bold text-white">{short_description}</p>
			<div className="text-sm font-bold text-yellow-600">
				{[...Array(5)].map((star, index) => {
					const decimalRating = average_rating;
					const fullStar = index + 1;
					const isFullStar = decimalRating >= fullStar;
					const isPartialStar =
						decimalRating > index && decimalRating < fullStar;

					return (
						<span key={index} className="relative inline-block">
							{isFullStar && <span className="text-yellow-500">★</span>}
							{isPartialStar && (
								<div
									className="absolute top-0 left-0 overflow-hidden"
									style={{ width: `${(decimalRating - index) * 100}%` }}
								>
									<span className="text-yellow-500">Ratings: </span>
								</div>
							)}
							{!isFullStar && !isPartialStar && (
								<span className="text-gray-300">★</span>
							)}
						</span>
					);
				})}
				<span className="ml-2">({average_rating}/5)</span>
			</div>
			<div className="mt-4 text-center">
				<Link
					href={`/session/${session_id}`} 
					target="_blank"
					rel="noopener noreferrer"
					className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium text-sm rounded hover:bg-blue-600 transition duration-300"
				>
				Daftar Sekarang!</Link>
			</div>
		</div>
	);
};

export default TopicHeader;
