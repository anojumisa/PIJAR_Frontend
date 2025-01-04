"use client";
import React from "react";
import { Briefcase } from "lucide-react";
import WavingHand from "@/components/animation/wavinghand/page";


interface Props {
  mentor: {
  image_baground?: string;
  fullname: string;
  image_url: string;
  occupation: string;
  user_id: number;
  };
  
}

export default function MentorsProfile({ mentor }: Props) {
  return (
    <div
      className="p-[0.5rem] md:p-[2rem] lg:p-[6rem] h-[8rem] md:h-[12rem] lg:h-[16rem]"
      style={{
        backgroundImage: `url(${mentor.image_baground || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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

      <div className="absolute ml-[7rem] md:ml-[12rem] lg:ml-[16rem] bottom-[-1.75rem] md:bottom-[-2rem] lg:bottom-[-3.5rem] w-4/5 max-w-[70%] h-max bg-slate-200 p-4 rounded-2xl font-bold shadow-md">
        <div className="flex gap-2">
          <div className="grid">
            <h1 className="text-blue-600 text-base md:text-lg lg:text-3xl font-caveat">
              {mentor.fullname} <WavingHand />
            </h1>
            <p className="text-black text-xs md:text-sm lg:text-base flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> 
              {mentor.occupation}
            </p>
          </div>
          <button
          className="absolute p-[0.3rem] md:p-[0.5rem] lg:p-[0.9rem] text-[0.45rem] md:text-[0.5rem] lg:text-[0.9rem] shadow-md rounded-full"
          style={{
            right: "1rem",
            background: "#e53e3e",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          FOLLOW ME
        </button>
        </div>
      </div>
    </div>
  );
}
