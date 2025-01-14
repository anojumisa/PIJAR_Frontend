interface Experience {
	company: string;

	role: string;

	date_year: string;

	description: string;

	achievements: string[];
}

export default function LearnerExperience({ experience }: { experience: Experience[] }) {
	return (
		<div className="mt-5">
			<h2 className="text-2xl text-white font-bold">Pengalaman</h2>

			{experience.map((exp, index) => (
				<div key={index} className="text-lg text-gray-200">
					<p>{exp.company}</p>

					<p>{exp.role}</p>

					<p>{exp.date_year}</p>

					<p>{exp.description}</p>

					<ul>
						{exp.achievements.map((ach, i) => (
							<li key={i}>{ach}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
