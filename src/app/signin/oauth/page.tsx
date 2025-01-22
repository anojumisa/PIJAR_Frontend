"use client";

import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { UserSignInGAuth } from "@/utils/api";
import { set_cookie } from "@/lib/utils";

const OAuthSignIn = () => {
	useEffect(() => {
		const handleOAuthCallback = async (session: any) => {
			try {
				await UserSignInGAuth(session, "learner")
				toast.success("Berhasil Masuk! 🎉", {
					description: "Selamat datang kembali!",
				});
				document.location.replace("/");
			} catch (error) {
				alert("User not found. Please create a user first.");
				document.location.replace("/signup");
				console.error("Failed to handle OAuth callback:", error);
				toast.error("Gagal Masuk. Silakan coba lagi.");
			}
		};

		getSession().then(async (session) => {
			console.log(session);
			await handleOAuthCallback(session);
		});
	}, []);

	return <></>;
};

export default OAuthSignIn;
