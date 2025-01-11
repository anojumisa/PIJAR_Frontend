import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar/navbar";
export default function SearchPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
			<Navbar />
      {children}
			<Footer /> 
    </>
  );
}
