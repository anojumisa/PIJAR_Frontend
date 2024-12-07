export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
	return (
		<div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
			<iframe
				className="w-full h-full"
				src={videoUrl}
				title="Live Stream"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
