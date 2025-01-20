'use client'
import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/landing-page/Footer";

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
                <p className="mb-4">
                    Selamat datang di platform kami! Kami adalah tim yang berdedikasi untuk menyediakan pengalaman belajar yang terbaik bagi Anda. Misi kami adalah membantu Anda mencapai tujuan belajar Anda dengan menyediakan konten berkualitas tinggi dan mentor yang berpengalaman.
                </p>
                <h2 className="text-2xl font-bold mb-2">Visi Kami</h2>
                <p className="mb-4">
                    Visi kami adalah menjadi platform belajar terkemuka yang dapat diakses oleh semua orang, di mana pun mereka berada. Kami percaya bahwa pendidikan adalah kunci untuk masa depan yang lebih baik, dan kami berkomitmen untuk membuat pendidikan berkualitas tinggi dapat diakses oleh semua orang.
                </p>
                <h2 className="text-2xl font-bold mb-2">Misi Kami</h2>
                <p className="mb-4">
                    Misi kami adalah menyediakan konten belajar yang berkualitas tinggi dan relevan, serta mendukung Anda dalam perjalanan belajar Anda. Kami bekerja sama dengan mentor yang berpengalaman dan ahli di bidangnya untuk memastikan Anda mendapatkan pengalaman belajar yang terbaik.
                </p>
                <h2 className="text-2xl font-bold mb-2">Tim Kami</h2>
                <p className="mb-4">
                    Kami adalah tim yang terdiri dari profesional yang berdedikasi di berbagai bidang, termasuk pendidikan, teknologi, dan desain. Kami bekerja sama untuk menciptakan platform yang intuitif dan efektif untuk membantu Anda belajar dengan cara yang paling efisien.
                </p>
                <h2 className="text-2xl font-bold mb-2">Hubungi Kami</h2>
                <p className="mb-4">
                    Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi kami. Kami selalu siap membantu Anda!
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;