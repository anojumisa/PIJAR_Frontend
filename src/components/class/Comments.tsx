"use client";
import { useState } from "react";

export default function Comments({
	comments,
	onAddComment,
}: {
	comments: {
		id: number;
		user: string;
		user_image: string;
		comment: string;
		time: string;
		rating: number;
	}[];
	onAddComment: (newComment: {
		id: number;
		user: string;
		user_image: string;
		comment: string;
		time: string;
		rating: number;
	}) => void;
}) {
	const [newComment, setNewComment] = useState("");
	const [newRating, setNewRating] = useState(0);

	const handleCommentSubmit = () => {
		if (!newComment.trim() || newRating === 0) {
			alert("Please enter a comment and select a rating.");
			return;
		}

		// Construct new comment object
		const newCommentData = {
			id: comments.length + 1, // Incremental ID
			user: "Anonymous", // Placeholder; replace with logged-in user info
			user_image: "https://via.placeholder.com/150", // Placeholder user image
			comment: newComment,
			time: "Just now", // Placeholder time; adjust as needed
			rating: newRating,
		};

		// Call parent-provided callback to update comments
		onAddComment(newCommentData);

		// Reset input fields
		setNewComment("");
		setNewRating(0);
	};

	return (
		<div className="mt-6 bg-neutral-800 p-4 border border-neutral-400 rounded-2xl col-span-3">
			<h2 className="text-lg text-neutral-300 font-semibold">
				Komentar dan Rating
			</h2>

			{/* Comment Input Form */}
			<div className="mt-6 bg-neutral-700 p-4 border border-gray-600 rounded-lg">
				<h3 className="text-sm text-neutral-300 font-semibold">
					Tambahkan Komentar
				</h3>
				<textarea
					className="w-full mt-2 p-2 text-sm bg-neutral-900 border border-gray-600 rounded-lg text-gray-300"
					rows={3}
					placeholder="Tulis komentar Anda..."
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
				/>
				<div className=" flex justify-between items-center gap-2">
					
					<select
						id="rating"
						className="p-2 bg-neutral-900 text-gray-300 border border-gray-600 rounded-lg text-xs"
						value={newRating}
						onChange={(e) => setNewRating(Number(e.target.value))}
					>
						<option value={0}>Beri rating</option>
						{[1, 2, 3, 4, 5].map((rating) => (
							<option key={rating} value={rating} >
								{rating}
							</option>
						))}
					</select>
					<button
						className=" px-4 py-1 bg-sky-700 text-white rounded-md hover:bg-sky-900 animation duration-300 ease-in-out"
						onClick={handleCommentSubmit}
					>
						Kirim
					</button>
				</div>
			</div>

			{/* Comment List */}
			<ul className="mt-4 space-y-4">
				{comments.map((comment) => (
					<li
						key={comment.id}
						className="flex items-start p-2 space-x-4 border border-gray-600 rounded-lg"
					>
						<img
							src={comment.user_image}
							alt=""
							className="w-10 h-10 bg-gray-300 rounded-xl"
						/>

						<div>
							<div className="flex gap-2 items-center">
								<p className="text-sm text-neutral-300 font-bold">
									{comment.user}
								</p>
								<p className="text-xs text-gray-400">{comment.time}</p>
							</div>
							<p className="text-sm text-gray-300">{comment.comment}</p>
							<p className="text-yellow-500">{"★".repeat(comment.rating)}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
