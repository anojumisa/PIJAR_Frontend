"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/animation/loading/page";
import LearnerProfile from "@/components/learner/LearnerProfile";
import LearnerBio from "@/components/learner/LearnerBio";
import LearnerExperience from "@/components/learner/LearnerExperience";
import LearnerEducation from "@/components/learner/LearnerEducation";
import LearnerSkills from "@/components/learner/LearnerSkills";
import LearnerSchedule from "@/components/learner/LearnerSchedule";
import { fetchLearnerProfile } from "@/utils/api";

interface Experience {
	company_name: string;
	occupation: string;
	start_date: string;
	end_date: string;
}

interface Expertise {
	category: string;
	expertise: string;
}

interface Learner {
	user_id: number;
	fullname: string;
	image_url: string;
	learner_bio: string;
	learner_experiences: Experience[];
	learner_expertise: Expertise[];
	occupation: string;
}

function LearnersDashboardDetail() {
	const searchParams = useSearchParams();
	const id = searchParams?.get("id");
	const [learner, setLearner] = useState<Learner | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchDetailLearner() {
			if (!id) return;
			try {
				const learnerData = await fetchLearnerProfile(Number(id));
				setLearner(learnerData);
			} catch (error) {
				console.error("Error Fetch Learner:", error);
				setError("Error loading learner");
			} finally {
				setLoading(false);
			}
		}

		fetchDetailLearner();
	}, [id]);

	if (loading) return <Loading />;
	if (error) return <main>{error}</main>;
	if (!learner) return <main>No Learner data available.</main>;

	return (
		<div className="relative p-[1.5rem] md:p-[3rem] lg:p-[5rem] bg-blue-900">
			<LearnerProfile
				learner={{
					name: learner.fullname,
					image_url: learner.image_url,
					job: learner.occupation,
					
				}}
			/>
			<LearnerBio bio={learner.learner_bio} name={learner.fullname} />
			<LearnerExperience
				experience={learner.learner_experiences.map((exp) => ({
					company: exp.company_name,
					role: exp.occupation,
					date_year: `${exp.start_date} - ${exp.end_date}`,
					description: "", 
					achievements: [], 
				}))}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
				<LearnerEducation education="" />{" "}
				<LearnerSkills
					skills={learner.learner_expertise.map((exp) => exp.expertise)}
				/>
			</div>
			<LearnerSchedule schedule={learner.user_id.toString()} />
		</div>
	);
}

export default function LearnersDashboardDetailPage() {
	return (
		<Suspense fallback={<Loading />}>
			<LearnersDashboardDetail />
		</Suspense>
	);
}
