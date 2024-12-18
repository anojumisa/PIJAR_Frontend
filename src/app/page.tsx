import React from "react";
import FeaturedMentors from "@/components/FeaturedMentors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Banner from "../components/banner";
import Topic from "../components/topic";
import UpcomingSession from "../components/upcoming";
import Navbar from "../components/navbar/navbar";

export default function Home() {
	return (
		<>
			{/* <SearchResult query={""} /> */}
			<Navbar />
			{/* <Navbar /> */}
			<Banner />
			<Topic />
			<FeaturedMentors />
			<UpcomingSession />
			<FAQ />
			<Footer />
		</>
	);
}
