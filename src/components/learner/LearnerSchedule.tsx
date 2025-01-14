export default function LearnerSchedule({ schedule }: { schedule: string }) {
    return (
        <div className="mt-5">
            <h2 className="text-2xl text-white font-bold">Jadwal</h2>
            <p className="text-lg text-gray-200">{schedule}</p>
        </div>
    );  
}
