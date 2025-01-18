import React, { useEffect, useState } from "react";

interface UserDetails {
    fullname: string;
    image_url: string;
}

interface Review {
    rating: number;
    review: string;
    review_id: number;
    user_details: UserDetails;
}

interface ReviewsResponse {
    message: string;
    page: number;
    page_size: number;
    reviews: Review[];
    session_id: number;
    total: number;
}

const Reviews: React.FC<{ sessionId: number }> = ({ sessionId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/sessions/${sessionId}/review`, {
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data: ReviewsResponse = await response.json();
                console.log('API Response:', data);

                if (Array.isArray(data.reviews)) {
                    setReviews(data.reviews);
                } else {
                    setReviews([]); // Fallback to empty array if invalid structure
                    throw new Error("Invalid response structure: 'reviews' is not an array");
                }
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [sessionId]);

    if (loading) {
        return <div>Loading reviews...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!reviews || reviews.length === 0) {
        return <div>No reviews found</div>;
    }

    return (
        <div>
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <div key={review.review_id} className="mb-4 p-4 border rounded">
                    <div className="flex items-center mb-2">
                        <img src={review.user_details.image_url} alt={review.user_details.fullname} className="w-10 h-10 rounded-full mr-2" />
                        <p className="font-bold">{review.user_details.fullname}</p>
                    </div>
                    <p className="text-gray-400 mb-2">Rating: {review.rating}</p>
                    <p>{review.review}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;