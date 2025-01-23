import React, { useEffect, useState } from "react";
import { fetchReviews } from "@/utils/api";

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
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviewsData = async () => {
            try {
                const data: ReviewsResponse = await fetchReviews(sessionId);
                setReviews(data.reviews);
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

        fetchReviewsData();
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

    const generateStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-yellow-500">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400">★</span>);
            }
        }
        return stars;
    };

    return (
        <div className="mt-6 text-white">
            <h2 className="text-xl font-bold mb-2">Reviews</h2>
            {reviews.map((review) => (
                <div key={review.review_id} className="mb-4 p-4 bg-gray-800 border rounded">
                    <div className="flex items-center mb-2">
                        <img src={review.user_details.image_url} alt={review.user_details.fullname} className="w-10 h-10 rounded-full mr-2" />
                        <p className="font-bold">{review.user_details.fullname}</p>
                    </div>
                    <p className="text-gray-400 mb-2">Rating: {generateStars(review.rating)}</p>
                    <p>{review.review}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;