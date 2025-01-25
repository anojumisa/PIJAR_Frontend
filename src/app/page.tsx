import React from "react";
import Head from "next/head";
import FeaturedMentors from "@/components/landing-page/FeaturedMentors";
import FAQ from "../components/landing-page/FAQ";
import Footer from "../components/landing-page/Footer";
import Banner from "../components/landing-page/banner";
import Topic from "../components/landing-page/topic";
import UpcomingSession from "../components/landing-page/upcoming";
import Navbar from "../components/navbar/navbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Pijar</title>
				<meta name="description" content="Pijar" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				
			</Head>
			<Navbar />
			<Banner />
			<Topic />
			<FeaturedMentors />
			<UpcomingSession />
			<FAQ />
			<Footer />
		</>
	);
}
