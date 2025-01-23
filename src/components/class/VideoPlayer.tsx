interface VideoPlayerProps {
    link: string;
}

export default function VideoPlayer({ link }: VideoPlayerProps) {
    return (
        <div className="w-full h- mt-10 mx-auto bg-gray-200 border-l-fuchsia-500 rounded-lg overflow-hidden shadow-lg">
            <iframe
                className="w-full h-3/4-screen border-2 border-gray-300 rounded-2xl"
                src={link}
                title="Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}