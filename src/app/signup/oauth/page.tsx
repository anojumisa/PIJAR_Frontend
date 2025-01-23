"use client"

import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import axios from 'axios';
import { set_cookie } from "@/lib/utils";
import { UserSignUpGAuth } from "@/utils/api";
import { toast } from "sonner";

const OAuthSignUp = () => {
  useEffect(() => {
    const handleOAuthCallback = async (session: any) => {
      try {
				await UserSignUpGAuth(session, "learner")
        toast.success("Pendaftaran berhasil! 🎉", {
          description: "Selamat datang di platform kami!",
        });
        document.location.replace("/minat");
      } catch (error) {
        alert("User found. Please sign in.")
        document.location.replace("/signin");
        console.error("Failed to handle OAuth callback:", error);
        toast.error("Gagal mendaftar. Silakan coba lagi.");
      }
    };

    getSession().then(async(session) => {
        console.log(session);
        await handleOAuthCallback(session);
    });
  }, []);

  return (<></>);
}

export default OAuthSignUp;