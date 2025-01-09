type Learner = {
    image_url: string;
    name: string;
    job: string;
};

export default function LearnerProfile({ learner }: { learner: Learner }) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <img
                src={learner.image_url}
                alt="Learner"
                className="w-32 h-32 rounded-full object-cover"
            />  
            <h1 className="text-2xl font-bold text-white">{learner.name}</h1>
            <p className="text-lg text-gray-200">{learner.job}</p>
        </div>
    );
}
