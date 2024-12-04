import Image from "next/image";
import FeaturedMentors from "./components/FeaturedMentors";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <>
      <FeaturedMentors />
      <FAQ />
    </>
  );
}
