"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "sonner";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { UserSignIn } from "@/utils/api";
import { set_cookie } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { sign } from "crypto";

interface SignInFormValues {
	email: string;
	password: string;
}

export default function SignIn() {
	const [passwordVisible, setPasswordVisible] = useState(false);

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Email tidak valid")
			.required("Email wajib diisi"),
		password: Yup.string()
			.required("Kata sandi wajib diisi")
			.min(6, "Kata sandi harus minimal 6 karakter"),
	});

	const initialValues: SignInFormValues = {
		email: "",
		password: "",
	};

	const handleSignInSubmit = async (
		values: SignInFormValues,
		{
			setSubmitting,
			resetForm,
		}: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
	) => {
		try {
			const data = await UserSignIn(values);
			// Simpan info hasil signup -> set cookie access_token & refresh_token
			toast.success("Berhasil Masuk! 🎉", {
				description: "Selamat datang kembali!",
			});
			// Redirect ke home
			document.location.replace("/")
		} catch (error) {
			toast.error("Gagal Masuk", {
				description: `Periksa kembali email dan kata sandi Anda.`,
			});
	
		} finally {
			setSubmitting(false);
		}
	};

	const handleGoogleSignIn = () => {
		signIn("google", { callbackUrl: "/signin/oauth" });
		
	};

	return (
		<div className="min-h-screen bg-blue-900 flex items-center justify-center px-4 py-12 md:py-20">
			<Toaster position="bottom-center" richColors />
			<div className="flex flex-col lg:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
				
					<div className="bg-green-600 text-white flex flex-col justify-center items-center lg:items-start px-8 py-12 lg:w-2/6">
						<Link href="/"><h2 className="text-3xl font-caveat leading-snug mb-6 text-center lg:text-left">
							Ruang Belajar Anda, <br /> Dimanapun dan Kapanpun
						</h2>
						<img
							src="/signin.png"
							alt="Learning Illustration"
							className="w-40 h-40 lg:w-64 lg:h-64 mt-6 ml-6"
						/></Link>
					</div>
				
				<div className="bg-white flex-1 p-8">
					<h2 className="text-2xl font-bold text-center mb-6">Masuk</h2>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSignInSubmit}
					>
						{({ isSubmitting }) => (
							<Form>
								<div className="mb-4">
									<label className="block text-gray-700 font-medium mb-2">
										Email
									</label>
									<Field
										type="email"
										name="email"
										placeholder="Email"
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
									/>
									<ErrorMessage
										name="email"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								<div className="mb-6 relative">
									<label className="block text-gray-700 font-medium mb-2">
										Kata Sandi
									</label>
									<Field
										type={passwordVisible ? "text" : "password"}
										name="password"
										placeholder="Kata Sandi"
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
									/>
									<button
										type="button"
										onClick={() => setPasswordVisible(!passwordVisible)}
										className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
									>
										{passwordVisible ? (
											<LockOpenIcon className="h-5 w-5" />
										) : (
											<LockClosedIcon className="h-5 w-5" />
										)}
									</button>
									<ErrorMessage
										name="password"
										component="div"
										className="text-red-500 text-sm mt-1"
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Memproses..." : "Masuk"}
								</button>
							</Form>
						)}
					</Formik>

					<div className="my-6 text-center text-gray-600">Atau</div>

					<button
						onClick={handleGoogleSignIn}
						className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition"
					>
						Masuk dengan Google
					</button>

					<p className="text-center text-gray-600 mt-4">
						Belum punya akun?{" "}
						<a
							href="/signup"
							className="text-blue-500 font-medium hover:underline"
						>
							Daftar
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
