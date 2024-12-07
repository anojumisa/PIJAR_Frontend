import VideoPlayer from "./components/VideoPlayer";
import Comments from "./components/Comments";
import Resources from "./components/Resources";

// Mock Data (replace with API when available)
// TODO: replace with actual data

const MOCK_CLASS_DATA = {
	id: "123",
	title: "Belajar Dasar Coding",
	mentor: "John Doe",
	videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual URL
	comments: [
		{ id: 1, user: "Dania", comment: "Kelas yang interaktif!", rating: 5 },
		{ id: 2, user: "Bobi", comment: "Sangat memahami materi.", rating: 4 },
	],
	resources: [
		{ id: 1, name: "Slide Presentasi", url: "/assets/slides.pdf" },
		{ id: 2, name: "Bahan Bacaan", url: "/assets/reading.pdf" },
	],
};

export default function LiveStreamPage({
	params,
}: {
	params: { classId: string };
}) {
	const classData = MOCK_CLASS_DATA; // Replace with data fetching logic later
	// example: const classData = await fetch(`/api/classes/${params.classId}`).then((res) => res.json());

	return (
		<div className="p-6 bg-gray-50">
			{/* Video Section */}
			<VideoPlayer videoUrl={classData.videoUrl} />

			{/* Class Information */}
			<div className="mt-6">
				<h1 className="text-2xl font-bold">{classData.title}</h1>
				<p className="text-lg text-gray-700">Mentor: {classData.mentor}</p>
				<a
					href={classData.videoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					Saksikan di YouTube
				</a>
			</div>
			<div className="grid grid-cols-2 gap-4">
                
				<Comments comments={classData.comments} />

				<Resources resources={classData.resources} />
			</div>
		</div>
	);
}
