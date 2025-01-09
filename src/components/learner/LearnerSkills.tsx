export default function LearnerSkills({ skills }: { skills: string[] }) {
    return (
        <div className="mt-5">
            <h2 className="text-2xl text-white font-bold">Keahlian</h2>
            <ul className="text-lg text-gray-200 list-disc pl-5">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
