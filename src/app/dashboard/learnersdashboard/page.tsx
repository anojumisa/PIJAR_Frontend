"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/animation/loading/page";
import { get_cookie } from "@/lib/utils";
import { fetchLearnersInterests, LearnersInterest } from "@/utils/api";

interface LearningHistory {
	id: number;
	title: string;
	progress: string;
	link: string;
}

export default function LearnerDashboard() {
	const [profile, setProfile] = useState({
		name: "John Doe",
		email: "johndoe@mail.com",
		birthdate: "03 September 2000",
		description: "Mahasiswa Universitas Gundar yang tertarik pada bidang Software Engineering",
	});
	const [learningHistory, setLearningHistory] = useState<LearningHistory[]>([]);
	const [interests, setInterests] = useState<LearnersInterest[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const historyResponse = await axios.get("/api/learner/history");
				const interestResponse = await fetchLearnersInterests()
				// setLearningHistory(historyResponse.data.history);
				setInterests(interestResponse.data.data);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to load data.");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) return <Loading />;
	if (error) return <div className="text-red-500">{error}</div>;

	return (
		<div className="p-4">
			<div className="flex items-center bg-gray-100 p-4 rounded-lg">
				<div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
					<span className="text-2xl font-bold">JD</span>
				</div>
				<div className="ml-4">
					<h1 className="text-2xl font-semibold text-blue-600">{profile.name}</h1>
					<p className="text-sm text-gray-500">Software Developer | Universitas Gundarma</p>
				</div>
			</div>

			<div className="mt-4 bg-white p-4 shadow rounded-lg">
				<h2 className="text-lg font-semibold mb-2">Personal Informasi</h2>
				<p>Email: {profile.email}</p>
				<p>Birthdate: {profile.birthdate}</p>
				<p>Description: {profile.description}</p>
			</div>

			<div className="mt-4 bg-white p-4 shadow rounded-lg">
				<h2 className="text-lg font-semibold mb-2">Riwayat Belajar</h2>
				<ul>
					{learningHistory.map((item) => (
						<li key={item.id} className="mb-2">
							<a href={item.link} className="text-blue-500 hover:underline">
								{item.title}
							</a>
							<span className="ml-2 text-sm text-gray-500">({item.progress})</span>
						</li>
					))}
				</ul>
			</div>

			<div className="mt-4 bg-white p-4 shadow rounded-lg">
				<h2 className="text-lg font-semibold mb-2">Minat</h2>
				<div className="flex flex-wrap gap-2">
					{interests.map((interest, idx) => (
						<span
							key={interest.category_id}
							className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
						>
							{interest.category_name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
