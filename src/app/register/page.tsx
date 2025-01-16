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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'italic', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Ruang Belajar Anda Dimanapun dan Kapanpun
            </h1>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => handleOptionClick('mentor')} style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Mentor
                </button>
                <button onClick={() => handleOptionClick('learner')} style={{ padding: '10px 20px', backgroundColor: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Learner
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
