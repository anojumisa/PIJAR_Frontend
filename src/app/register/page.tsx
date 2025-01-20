"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { UpdateUserDetails } from "@/utils/api";

const RegisterPage: React.FC = () => {
  const router = useRouter();

  const handleChangeUserMentorStatus = async () => {
    try {
      await UpdateUserDetails({ is_mentor: "true" })
      router.replace("/")
    } catch (error) {
      // TODO:: Tampilin tooltips kalo error
    }
  };

  const handleOptionClick = (role: string) => {
    // Redirect to the appropriate page based on the selected role
    if (role === "mentor") {
      // TODO: Add logic to update user details, change user to mentor
      handleChangeUserMentorStatus()
    } else if (role === "learner") {
			document.location.replace("/minat");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900">
      <h1 className="text-black text-3xl text-center font-bold shadow-lg bg-white bg-opacity-50 p-4 rounded">
        Ruang Belajar Anda Dimanapun dan Kapanpun
      </h1>

      <div style={{ marginTop: "300px", display: "flex" }}>
        <button
          onClick={() => handleOptionClick("learner")}
          className="mr-16 px-12 py-28 bg-green-600 border-2 rounded cursor-pointer text-5xl flex flex-col items-center"
        >
          <img
            alt="Robot"
            className="w-30 h-30 lg:w-48 lg:h-48 mb-4"
            src="/signin.png"
          />
          <p>Hello, I am Student</p>
        </button>
        <button
          onClick={() => handleOptionClick("mentor")}
          className="px-12 py-28 bg-yellow-600 border-2 rounded cursor-pointer text-5xl flex flex-col items-center"
        >
          <img
            alt="Robot"
            className="w-30 h-30 lg:w-48 lg:h-48 mb-4"
            src="/image.png"
          />
          <p>Hello, I am Mentor</p>
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
