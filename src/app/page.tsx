import React from "react";
import Image from "next/image";
import FeaturedMentors from "@/components/FeaturedMentors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Banner from "../components/navbar/banner";
import Topic from "../components/navbar/topic";
import UpcomingSession from "../components/navbar/upcoming";
import Navbar from "../components/navbar/navbar";
import Navbar_not_auth from "../components/navbar/navbar_not_auth";
import SearchResult from "../components/navbar/search_result";

export default function Home() {
	return (
		<>
			{/* <SearchResult query={""} /> */}
			<Navbar_not_auth />
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
