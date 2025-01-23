import React, { useState, useEffect } from "react";
import { getMentorFollowStatus, toggleFollowMentor } from "@/utils/api";

interface MentorDetails {
    fullname: string;
    image_url: string;
    id: number;
}

interface ClassData {
    title: string;
    description: string;
    videoUrl: string;
    link: string;
}

const ClassInfo: React.FC<{ classData: ClassData; mentorData: MentorDetails;}> = ({
    classData,
    mentorData,
}) => {
    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // Fetch the follow status when the component mounts
    useEffect(() => {
        const fetchFollowStatus = async () => {
            try {
                const response = await getMentorFollowStatus(mentorData.id);
                setIsFollowing(response.is_following); // Update based on API response
            } catch (error) {
                console.error("Error fetching follow status:", error);
            }
        };

        fetchFollowStatus();
    }, [mentorData.id]);

    // Handle follow/unfollow button click
    const handleFollowToggle = async () => {
        try {
            setLoading(true);
            await toggleFollowMentor(mentorData.id, isFollowing);
            setIsFollowing(!isFollowing); // Toggle the follow state
        } catch (error) {
            console.error("Error toggling follow status:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-6 mb-4 grid grid-cols-4 gap-4 p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="col-span-3">
                <h1 className="text-2xl text-white font-bold mb-4">{classData.title}</h1>

                <div className="mt-4 flex gap-4 items-center">
                    <img
                        src={mentorData?.image_url}
                        alt="mentor image"
                        className="w-12 h-12 rounded-full"
                    />
                    <p className="text-xl font-bold text-gray-200">{mentorData?.fullname}</p>
                    <button
                        onClick={handleFollowToggle}
                        disabled={loading}
                        className={`px-4 py-2 rounded-xl transition duration-300 ${
                            isFollowing
                                ? "bg-red-600 hover:bg-red-700 text-white"
                                : "bg-sky-700 hover:bg-sky-800 text-white"
                        }`}
                    >
                        {loading ? "Processing..." : isFollowing ? "Unfollow" : "Follow"}
                    </button>
                </div>
                <p className="text-sm mt-4 text-gray-400">{classData.description}</p>
            </div>
            <a
                href={classData.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-right col-span-1 self-center"
            >
                Saksikan di YouTube
            </a>
        </div>
    );
};

export default ClassInfo;