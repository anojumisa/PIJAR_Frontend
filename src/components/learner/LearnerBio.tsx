export default function LearnerBio({ bio, name }: { bio: string; name: string }) {
    return (
        <div className="mt-5">
            <h2 className="text-2xl text-white font-bold">Tentang {name}</h2>
            <p className="text-lg text-gray-200">{bio}</p>
        </div>
    );      
}   
