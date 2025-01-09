'use client'
import VideoPlayer from "../../../components/class/VideoPlayer";
import Comments from "../../../components/class/Comments";
import Resources from "../../../components/class/Resources";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Mock Data (replace with API when available)
// TODO: replace with actual data

const MOCK_CLASS_DATA = {
	id: "123",
	title: "Belajar Dasar Coding",
	description:
		"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	mentor: "John Doe",
	imageURL: "https://via.placeholder.com/150",
	videoUrl: "https://www.youtube.com/embed/iA8lLwmtKQM?list=PLZS-MHyEIRo59lUBwU-XHH7Ymmb04ffOY" , // Replace with actual URL
	comments: [
		{
			id: 1,
			user: "Dania",
			time: "1 jam yang lalu",
			user_image: "https://via.placeholder.com/150",
			comment: "Kelas yang interaktif!",
			rating: 5,
		},
		{
			id: 2,
			user: "Bobi",
			time: "2 jam yang lalu",
			user_image: "https://via.placeholder.com/150",
			comment: "Sangat memahami materi.",
			rating: 4,
		},
	],
	resources: [
		{ id: 1, name: "Slide Presentasi", url: "/assets/slides.pdf" },
		{ id: 2, name: "Bahan Bacaan", url: "/assets/reading.pdf" },
	],
};

export default function LiveStreamPage() {
	const router = useRouter();
	const { classId } = router.query;
	const [classData, setClassData] = useState(MOCK_CLASS_DATA); // Replace with data fetching logic later
	// example: const classData = await fetch(`/api/classes/${classId}`).then((res) => res.json());

	useEffect(() => {
		if (classId) {
			// Fetch class data using classId
			// setClassData(fetchedData);
		}
	}, [classId]);

	const handleAddComment = (newComment: typeof MOCK_CLASS_DATA.comments[0]) => {
		setClassData((prevData) => ({
			...prevData,
			comments: [...prevData.comments, newComment],
		}));
	};

	return (
		<div className="p-6 bg-neutral-950">
			{/* Video Section */}
			<VideoPlayer videoUrl={classData.videoUrl} />

			{/* Class Information */}
			<div className="mt-6 grid grid-cols-4 gap-4">
				<div className="col-span-3">
					<h1 className="text-2xl text-white font-bold ">{classData.title}</h1>
					<div className="mt-4 flex gap-4 items-center">
						<img
							src={classData.imageURL}
							alt="mentor image"
							className="w-12 h-12 rounded-full"
						/>
						<p className="text-xl font-bold text-gray-200">
							{" "}
							{classData.mentor}
						</p>
						<button className="px-4 py-2 bg-sky-700 text-white hover:transform hover:scale-105 transition duration-300 rounded-xl">
							Follow
						</button>
					</div>
					<p className="text-sm mt-4 text-gray-400">{classData.description}</p>
				</div>
				<a
					href={classData.videoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline text-right "
				>
					Saksikan di YouTube
				</a>
			</div>

			<div className="grid grid-cols-4 gap-4">
				<Comments comments={classData.comments} onAddComment={handleAddComment}/>

				<Resources resources={classData.resources} />
			</div>
		</div>
	);
}