"use client";
import React, { useState, useEffect, Suspense } from "react";
import { searchDataByKeyword } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/animation/loading/page";
import Navbar_not_auth from "@/components/navbar/navbar";
import Footer from "@/components/landing-page/Footer";
import MentorList from "@/components/navbar/component/search-component/mentorList";
import SessionList from "@/components/navbar/component/search-component/sessionList";
import TopicList from "@/components/navbar/component/search-component/topicList";
import Modal from "@/components/modal"; 

import { Mentor, Session, Topic } from "@/utils/interface/type";

interface ApiResponse {
	categories: Topic[];
	mentors: Mentor[];
	sessions: {
		page: number;
		page_size: number;
		sessions: Session[];
		total: number;
	};
}

const SearchResult: React.FC = () => {
	const searchParams = useSearchParams();
	const query = searchParams?.get("keyword") || "";
	const [mentors, setMentors] = useState<Mentor[]>([]);
	const [sessions, setSessions] = useState<Session[]>([]);
	const [topics, setTopics] = useState<Topic[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [showModal, setShowModal] = useState(false);

	const [activeCategories, setActiveCategories] = useState<{
		mentors: boolean;
		sessions: boolean;
		topics: boolean;
	}>({ mentors: false, sessions: false, topics: false });

	useEffect(() => {
		const fetchResults = async () => {
			try {
				setLoading(true);
				setError(null);
				if (query.length < 3) {
					setShowModal(true);
					setLoading(false);
					return;
				}
				const data: ApiResponse = await searchDataByKeyword(query);

				if (data.mentors && data.mentors.length > 0) {
					setMentors(data.mentors);
					setActiveCategories((prev) => ({ ...prev, mentors: true }));
				}
				if (
					data.sessions &&
					data.sessions.sessions &&
					data.sessions.sessions.length > 0
				) {
					setSessions(data.sessions.sessions);
					setActiveCategories((prev) => ({ ...prev, sessions: true }));
				}
				if (data.categories && data.categories.length > 0) {
					setTopics(data.categories);
					setActiveCategories((prev) => ({ ...prev, topics: true }));
				}
			} catch (err) {
				setError("Gagal memuat hasil pencarian");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		if (query) {
			fetchResults();
		}
	}, [query]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <div className="text-red-500">{error}</div>;
	}

	return (
		<Suspense>
			<Navbar_not_auth />
			<div className="p-10">
				{(activeCategories.mentors ||
					activeCategories.sessions ||
					activeCategories.topics) && (
					<h1 className="text-center text-neutral-300 text-3xl font-bold mb-8">
						Hasil Pencarian:
					</h1>
				)}
				{activeCategories.mentors && <MentorList mentors={mentors} />}
				{activeCategories.sessions && <SessionList sessions={sessions} />}
				{activeCategories.topics && <TopicList topics={topics} />}
				{!activeCategories.mentors &&
					!activeCategories.sessions &&
					!activeCategories.topics && (
						<p className="text-center text-xl font-semibold mb-4 text-gray-900">
							Hasil Pencarian{" "}
							<span className="font-bold text-blue-500">"{query}" </span>tidak
							di Temukan
						</p>
					)}
			</div>
			<Footer />
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					Kata kunci pencarian harus minimal 3 karakter
				</Modal>
			)}
		</Suspense>
	);
};

const SearchResultPage = () => (
	<Suspense>
		<SearchResult />
	</Suspense>
);

export default SearchResultPage;
