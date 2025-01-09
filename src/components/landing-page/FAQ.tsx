'use client';
import React, { useState } from "react";

type FAQItem = {
	question: string;
	answer: string;
};

const FAQ: React.FC = () => {
	// State to manage which FAQs are expanded
	const [expanded, setExpanded] = useState<Record<number, boolean>>({});

	// Toggle function for expanding/collapsing questions
	const toggleExpand = (index: number) => {
		setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	// FAQ data
	const faqData: FAQItem[] = [
		{
			question: "Apa itu PIJAR?",
			answer:
				"PIJAR adalah sebuah platform yang menyediakan fasilitas belajar berbasis komunitas yang bertujuan untuk menghubungkan para pelajar atau siapa pun yang ingin mengasah kemampuannya dengan para mentor sukarelawan yang menyediakan pendidikan dan pelatihan yang dipersonalisasi sesuai dengan kebutuhan keahlian yang dibutuhkan oleh komunitas atau masyarakat, terutama yang berada di wilayah dengan keterbatasan akses terhadap pendidikan berkualitas.",
		},
		{
			question: "Untuk siapa platform ini dibuat?",
			answer:
				"Platform ini dibuat untuk:\n\n• Pelajar: siapa pun yang memiliki keinginan untuk meningkatkan keahlian spesifik seperti coding, manajemen bisnis, pertanian, pengelolaan keuangan, dll.\n\n• Mentor: Para ahli atau individu yang memiliki ketertarikan untuk berbagi ilmu guna menciptakan dampak positif untuk pengembangan keahlian kelompok masyarakat yang kurang terlayani.",
		},
		{
			question: "Bagaimana cara saya mendaftar sebagai mentor?",
			answer:
				"Kamu bisa daftar sebagai mentor dengan membuat profil sebagai mentor, mendaftarkan keahlian kamu, dan mendaftarkan ketersediaan waktu untuk sesi yang akan kamu ampu. Setelah disetujui, kamu bisa mulai menerima permintaan bergabung dari para pelajar yang tertarik dengan sesi mentoring kamu.",
		},
		{
			question: "Bagaimana cara kerja fitur live streaming di PIJAR?",
			answer:
				"Fitur live streaming di PIJAR disediakan lewat integrasi dengan platform pihak ketiga seperti YouTube Live, Zoom, atau Google Meet. Kamu akan menerima sebuah link untuk bergabung dengan sebuah sesi belajar.",
		},
	];

	return (
		<div className="faq-container p-6 max-w-4xl mx-auto">
			<h1 className="text-2xl md:text-4xl mb-4 font-bold text-gray-500 text-center">
				Pertanyaan yang Sering Ditanyakan
			</h1>
			<div className="faq-list space-y-4 mb-6">
				{faqData.map((faq, index) => (
					<div key={index} className="faq-item border-b pb-4 mb-4">
						<button
							className="flex justify-between items-center w-full text-left text-lg font-semibold py-2 px-4 text-white rounded hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none transition duration-300 ease-in-out"
							onClick={() => toggleExpand(index)}
						>
							{faq.question}
							<span className="text-xl">{expanded[index] ? "▲" : "▼"}</span>
						</button>
						{expanded[index] && (
							<div className="faq-answer mt-2 text-gray-400 whitespace-pre-line">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
