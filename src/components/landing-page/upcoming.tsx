"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import UpcomingSessionCard from "../../fragments/UpcomingCard";
import { fetchUpcomingSessions } from "../../utils/api";

type UpcomingSession = {
    image_url: string;
    title: string;
    short_description: string;
    schedule: string;
    link: string;
    session_id: number;
};

const UpcomingSession: React.FC = () => {
    const [upcomingSessions, setUpcomingSessions] = useState<UpcomingSession[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const data = await fetchUpcomingSessions();
                setUpcomingSessions(data || []);
            } catch (error) {
                console.error("Failed to fetch upcoming sessions:", error);
                setError("Gagal memuat sesi yang akan datang");
            } finally {
                setLoading(false);
            }
        };

        fetchSessions();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="upcoming-container p-6 max-w-6xl mx-auto">
            <div className="text-left mb-6">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-500 text-center">
                    Jadwal Kelas
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingSessions.length > 0 ? (
                    upcomingSessions.map((session, index) => (
                        <UpcomingSessionCard
                            key={index}
                            image_url={session.image_url}
                            title={session.title}
                            short_description={session.short_description}
                            schedule={session.schedule}
                            link={session.link}
                            session_id={session.session_id}
                        />
                    ))
                ) : (
                    <p>No upcoming sessions available.</p>
                )}
            </div>
        </div>
    );
};

export default UpcomingSession;