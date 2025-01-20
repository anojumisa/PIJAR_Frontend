import React from "react";
import { convertDayToIndonesian } from "@/utils/dayConversion";

interface MentorDetails {
	fullname: string;
	id: number;
	image_url: string;
}

interface SessionDetail {
	average_rating: number;
	day: string;
	duration: number;
	image_url: string;
	mentor_details: MentorDetails;
	schedule: string;
	session_id: number;
	short_description: string;
	time: string;
	title: string;
}

const SessionDetails: React.FC<{ sessionDetail: SessionDetail }> = ({
	sessionDetail,
}) => {
	return (
		<>
			<h1 className="text-2xl px-6 pt-6 text-white font-bold bg-gray-800 rounded-lg shadow-lg">Detail Kelas</h1>
			<div className="flex flex-row gap-10 mt-0 p-6 bg-gray-800 rounded-lg shadow-lg">
				<div>
					<img
						className="w-64 h-32 object-cover rounded-lg mb-4"
						src={sessionDetail.image_url}
						alt={sessionDetail.title}
					/>
				</div>
				<div>
					<p className="text-gray-300 mb-4">
						{sessionDetail.short_description}
					</p>
					<p className="text-gray-400 mb-2">
						Hari: {convertDayToIndonesian(sessionDetail.day)}
					</p>
					<p className="text-gray-400 mb-2">Waktu: {sessionDetail.time}</p>
					<p className="text-gray-400 mb-2">
						Durasi: {sessionDetail.duration} menit
					</p>
					<p className="text-gray-400 mb-4">
						Average Rating: {sessionDetail.average_rating}
					</p>
				</div>
			</div>
		</>
	);
};

export default SessionDetails;
