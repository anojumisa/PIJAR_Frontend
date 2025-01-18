import React, { useState } from "react";

interface AddReviewProps {
	sessionId: number;
}

const AddReview: React.FC<AddReviewProps> = ({ sessionId }) => {
	const [rating, setRating] = useState<number>(0);
	const [review, setReview] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(null);

		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/sessions/${sessionId}/review`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer YOUR_ACCESS_TOKEN", // Replace with your actual access token
					},
					body: JSON.stringify({ rating, review }),
				}
			);

			if (!response.ok) {
				throw new Error(`Network response was not ok: ${response.statusText}`);
			}

			setSuccess("Review added successfully!");
			setRating(0);
			setReview("");
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unknown error occurred");
			}
		} finally {
			setLoading(false);
		}
	};

	const handleStarClick = (index: number) => {
		setRating(index + 1);
	};

	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<span
					key={i}
					className={`cursor-pointer ${
						i < rating ? "text-yellow-500" : "text-gray-400"
					}`}
					onClick={() => handleStarClick(i)}
				>
					★
				</span>
			);
		}
		return stars;
	};

	return (
		<div className="mt-6 bg-stone-900 border-yellow-600 text-white p-4 text-sm rounded-lg">
			<h2 className="text-xl font-bold mb-2">Beri Ulasan</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					
					<textarea
						id="review"
						value={review}
						onChange={(e) => setReview(e.target.value)}
						className="w-5/12 p-4 text-black border rounded-full"
						required
					/>
				</div>
				<div className=" flex flex-row items-center gap-4">
					<button
						type="submit"
						className="bg-amber-600 text-white px-4 py-2 rounded-3xl"
						disabled={loading}
					>
						{loading ? "Submitting..." : "Submit Review"}
					</button>
					<div className="mb-4 flex flex-row gap-2 justify-center">
                        <label className=" text-white mb-2" htmlFor="rating">
                            Beri Rating:
                        </label>
						<div className="flex ">{renderStars()}</div>
					</div>
				</div>
				{error && <p className="text-red-500 mt-2">{error}</p>}
				{success && <p className="text-green-500 mt-2">{success}</p>}
			</form>
		</div>
	);
};

export default AddReview;
