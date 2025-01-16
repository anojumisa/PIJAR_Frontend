"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage: React.FC = () => {
    const router = useRouter();

    const handleOptionClick = (role: string) => {
        // Redirect to the appropriate page based on the selected role
        if (role === 'mentor') {
            router.push('/mentor-dashboard');
        } else if (role === 'learner') {
            router.push('/learner-dashboard');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-black text-3xl text-center font-bold shadow-lg bg-white bg-opacity-50 p-4 rounded">
            Ruang Belajar Anda Dimanapun dan Kapanpun
            </h1>
            
            <div style={{ marginTop: '300px', display: 'flex' }}>
            <button onClick={() => handleOptionClick('mentor')} className="mr-16 px-12 py-7 bg-green-600 border-2 rounded cursor-pointer text-5xl flex flex-col items-center">
                <img alt="Robot" className="w-30 h-30 lg:w-48 lg:h-48 mb-4" src="/signin.png" />
                <p>Hello, I am Student</p>
            </button>
            <button onClick={() => handleOptionClick('learner')} className="px-12 py-6 bg-yellow-600 border-2 rounded cursor-pointer text-5xl flex flex-col items-center">
                <img alt="Robot" className="w-30 h-30 lg:w-48 lg:h-48 mb-4" src="/image.png" />
                <p>Hello, I am Mentor</p>
            </button>
            </div>
        </div>
    );
};

export default RegisterPage;
