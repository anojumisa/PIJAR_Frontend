export default function Comments({
	comments,
}: {
	comments: { id: number; user: string; comment: string; rating: number }[];
}) {
	return (
		<div className="mt-6 bg-white p-4 rounded-lg shadow grid-span-2">
			<h2 className="text-lg font-semibold">Komentar dan Rating</h2>
			<ul className="mt-4 space-y-4">
				{comments.map((comment) => (
					<li key={comment.id} className="flex items-start space-x-4">
						<div className="w-10 h-10 bg-gray-300 rounded-full"></div>
						<div>
							<p className="text-sm font-bold">{comment.user}</p>
							<p className="text-sm text-gray-600">{comment.comment}</p>
							<p className="text-yellow-500">{"★".repeat(comment.rating)}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
