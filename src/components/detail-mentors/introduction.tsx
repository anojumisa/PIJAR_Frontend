"use client";
import React from "react";
import { Mentor } from "../../utils/interface/type";

interface Props {
  mentor: Mentor
}

export default function MentorsIntro({ mentor }: Props) {
  return (
    <div
      className="bg-gradient-to-tr from-cyan-500 to-blue-500 mt-[3.75rem] md:mt-[4rem] lg:mt-[6rem] my-[1.25rem]"
      style={{
        padding: "1.25rem",
        borderRadius: "0.5rem",
        boxShadow: "0rem 0.125rem 0.25rem rgba(0,0,0,0.1)",
      }}
    >
      <h2 className="text-base md:text-lg lg:text-2xl font-semibold mb-4 rounded">
        Mari berkenalan dengan coach <span className="underline text-amber-900">{mentor.fullname}:</span>
      </h2>
      <p className=" text-xs md:text-sm lg:text-lg ">{mentor.mentor_bio}</p>
    </div>
  );
}
