import React from "react";
import FeaturedMentors from "@/components/FeaturedMentors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Topic from "../components/topic";
import UpcomingSession from "../components/upcoming";
import Navbar from "../components/navbar/navbar";
import SearchPage from "./search/page";

export default function Home() {
	return (
		<>
			<SearchPage />
			<Navbar />
			<Topic />
			<FeaturedMentors />
			<UpcomingSession />
			<FAQ />
			<Footer /> 
		</>
	);
	}
