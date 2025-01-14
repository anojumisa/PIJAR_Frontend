export default function LearnerEducation({ education }: { education: string }) {
    return (
        <div className="mt-5">
            <h2 className="text-2xl text-white font-bold">Pendidikan</h2>
            <p className="text-lg text-gray-200">{education}</p>
        </div>
    );
}