"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "@/components/animation/loading/page";

interface Mentor {
	id: number;
	name: string;
	image_profile: string;
}

export default function DashboardPage() {
	const [mentors, setMentors] = useState<Mentor[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	const handleMentorClick = (id: number) => {
		router.push(`/dashboard/mentors-details?id=${id}`);
	};

	useEffect(() => {
		const fetchMentors = async () => {
			try {
				const response = await axios.get("/api/mentors");
				setMentors(response.data.mentors);
			} catch (error) {
				console.error("Error Fetch Mentors:", error);
				setError("Error loading mentors");
			} finally {
				setLoading(false);
			}
		};

		fetchMentors();
	}, []);

	if (loading) return <Loading />;
	if (error) return <main>{error}</main>;

	return (
		<div>
			<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
				{mentors.map((mentor) => (
					<div
						key={mentor.id}
						onClick={() => handleMentorClick(mentor.id)}
						style={{
							border: "1px solid #ccc",
							padding: "16px",
							cursor: "pointer",
							borderRadius: "8px",
							textAlign: "center",
						}}
					>
						<img
							src={mentor.image_profile}
							alt={mentor.name}
							style={{ width: "100px", height: "100px", borderRadius: "50%" }}
						/>
						<p>{mentor.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
