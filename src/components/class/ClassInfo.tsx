interface MentorDetails {
    fullname: string;
    image_url: string;
}

interface ClassData {
    title: string;
    description: string;
    videoUrl: string;
    link: string;
}

const ClassInfo: React.FC<{ classData: ClassData; mentorData: MentorDetails }> = ({ classData, mentorData }) => {
    return (
        <div className="mt-6 grid grid-cols-4 gap-4 p-6 bg-gray-800 rounded-lg shadow-lg">
            <div className="col-span-3">
                <h1 className="text-2xl text-white font-bold mb-4">{classData.title}</h1>
                
                <div className="mt-4 flex gap-4 items-center">
                    <img
                        src={mentorData?.image_url}
                        alt="mentor image"
                        className="w-12 h-12 rounded-full"
                    />
                    <p className="text-xl font-bold text-gray-200">
                        {mentorData?.fullname}
                    </p>
                    <button className="px-4 py-2 bg-sky-700 text-white hover:transform hover:scale-105 transition duration-300 rounded-xl">
                        Follow
                    </button>
                </div>
                <p className="text-sm mt-4 text-gray-400">{classData.description}</p>
            </div>
            <a
                href={classData.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-right col-span-1 self-center"
            >
                Saksikan di YouTube
            </a>
        </div>
    );
};

export default ClassInfo;