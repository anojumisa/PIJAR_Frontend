"use client";
import React from "react";


interface Schedule {
  image_program: string;
  theme: string;
  day: string;
  time: string;
}

interface Props{
 mentor: {
  schedule: Schedule[];
};
}

export default function UpComingClasses({mentor}:Props){


  return (
   <>
   <div
        className="bg-slate-200"
        style={{
          margin: "1.25rem 0",
          padding: "1.25rem",
          borderRadius: "0.5rem",
        }}
      >
        <h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
          Kelas yang Akan Datang
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-6">
          {mentor.schedule.map((schedule, index) => (
            <div
              className="text-xs md:text-base lg:text-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-[0.5rem] lg:p-[1rem] text-center text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              key={index}
            >
              <img
                className="w-full h-[10rem] rounded-lg"
                src={schedule.image_program}
                alt={schedule.theme}
              />
              <h3 className="pt-4 font-bold font-firaSans text-amber-300">
                {schedule.theme}
              </h3>
              <p>{schedule.day}</p>
              <p>{schedule.time}</p>
              <button
                className="mt-4 bg-sky-700 rounded-lg text-white font-openSans"
                style={{
                  padding: "0.63rem 1.25rem",
                  cursor: "pointer",
                }}
              >
                Daftar
              </button>
            </div>
          ))}
        </div>
      </div></>
  );
}
