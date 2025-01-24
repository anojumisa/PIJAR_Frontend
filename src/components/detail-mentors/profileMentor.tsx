"use client";
import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import WavingHand from "@/components/animation/wavinghand/page";
import { Mentor } from "../../utils/interface/type";

interface Props {
  mentor: Mentor
  
}



export default function MentorsProfile({ mentor }: Props) {
  const [isFollowing, setIsFollowing] = useState(mentor.isFollowing);
  
    const toggleFollow = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent triggering onCardClick when the button is clicked
      setIsFollowing(!isFollowing);
    };
  return (
    <div
      className="p-[0.5rem] md:p-[2rem] lg:p-[6rem] h-[8rem] md:h-[12rem] lg:h-[16rem]"
      style={{
        backgroundImage: `url('https://st3.depositphotos.com/2101611/37519/i/450/depositphotos_375196990-stock-photo-back-school-education-banner-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        color: "white",
        borderRadius: "0.5rem",
        position: "relative",
      }}
    >
      <div
        className="absolute w-[6rem] md:w-[9rem] lg:w-[12rem] h-[6rem] md:h-[9rem] lg:h-[12rem] bottom-[-2.5rem] md:bottom-[-3.5rem] lg:bottom-[-5rem] shadow-lg "
        style={{
          borderRadius: "50%",
          border: "0.25rem solid white",
          backgroundImage: `url(${mentor.image_url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute ml-[7rem] md:ml-[12rem] lg:ml-[16rem] bottom-[-1.75rem] md:bottom-[-2rem] lg:bottom-[-3.5rem] w-4/5 max-w-[70%] h-max bg-gradient-to-tr from-slate-900 to-slate-200 p-4 rounded-2xl font-bold shadow-md">
        <div className="flex gap-2">
          <div className="grid">
            <h1 className="text-white text-base md:text-lg lg:text-3xl font-caveat">
              {mentor.fullname} <WavingHand />
            </h1>
            <p className="text-white text-xs md:text-sm lg:text-base flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> 
              {mentor.occupation}
            </p>
          </div>
          <div className="absolute right-4 bottom-4 flex flex-col items-end">
          <button
					onClick={toggleFollow}
					className={`mt-2 lg:mt-0 px-4 py-2 rounded outline-black hover:cursor-alias ${
						isFollowing
							? "bg-gradient-to-r from-gray-800 to-cyan-800 text-red-400"
							: "bg-gradient-to-r from-slate-800 to-cyan-900 text-yellow-500"
					}`}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</button>
      
          </div>
        </div>
      </div>
    </div>
  );
}
