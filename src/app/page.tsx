import Image from "next/image";
import FeaturedMentors from "@/components/FeaturedMentors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Banner from "./component/banner";
import Topic from "./component/topic";
import UpcomingSession from "./component/upcoming";

export default function Home() {
	return (
		<>
			<Banner />
			<Topic />
			<FeaturedMentors />
			<UpcomingSession />
			<FAQ />
			<Footer />
		</>
	);
}
