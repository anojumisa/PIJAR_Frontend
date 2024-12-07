import Image from "next/image";
import FeaturedMentors from "@/components/FeaturedMentors";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<FeaturedMentors />
			<FAQ />
			<Footer />
		</>
	);
}
