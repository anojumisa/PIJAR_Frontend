import React from "react";
import FeaturedMentors from "@/components/FeaturedMentors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/navbar";
import Topic from "../components/topic";
import UpcomingSession from "../components/upcoming";
import SearchPage from "./search/page";

export default function Home() {
	return (
		<>
			<Navbar />
			<Topic />
			<FeaturedMentors />
			<UpcomingSession />
			<FAQ />
			<Footer /> 
		</>
	);
	}
