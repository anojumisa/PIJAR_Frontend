export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
	return (
		<div className="w-full h-96 bg-gray-200 border-l-fuchsia-500 rounded-lg overflow-hidden shadow-lg">
			<iframe
				className="w-full h-full border-2 border-gray-300 rounded-2xl"
				src={videoUrl}
				title="Live Stream"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
