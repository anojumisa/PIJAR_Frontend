"use client";
import React, { useEffect, useState } from "react";
import {
	fetchCategories,
	fetchNotifications,
	NotificationItem,
	UserLogOut,
} from "@/utils/api";
import { delete_cookie, get_cookie } from "@/lib/utils";
import { AxiosError } from "axios";
import { SearchBar } from "./component/searchBar";
import { AuthenticatedMenu } from "./component/authenticatedMenu";
import { AuthenticationButtons } from "./component/authenticationButtons";
import { Categories } from "./component/categories";
import { Category } from "@/utils/interface/type";
import Loading from "../animation/loading/page";

const Navbar_not_auth: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [notifications, setNotifications] = useState<NotificationItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isAuthenthicated, setIsAuthenthicated] = useState(false);

	const getCategories = async () => {
		try {
			const data = await fetchCategories();
			setCategories(data);
			setIsAuthenthicated(!!get_cookie(document.cookie, "isLoggedIn"));
		} catch (error) {
			setError("Error loading categories");
		} finally {
			setLoading(false);
		}
	};

	const getNotifications = async () => {
		try {
			const notificationsResp = await fetchNotifications();
			setNotifications(notificationsResp.data.notification);
		} catch (error) {
			setError("Error loading notifications" + error);
		} finally {
			setLoading(false);
		}
	};

	const signOut = async () => {
		try {
			await UserLogOut();
		} catch (error) {
			setError("Error loading notifications" + error);
		}
	};

	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		if (isAuthenthicated) {
			// fetch disini
			getNotifications();
		}
		// Gausa fetch kalo ga authenthicated
	}, [isAuthenthicated]);

	const handleSignOut = () => {
		// Hapus Cookies
		signOut();
		document.location.replace("/");
		// Redirect ke home
	};

	if (loading) return <Loading />;
	if (error) return <div>{error}</div>;

	return (
		<nav className="bg-gradient-to-t from-sky-800 to-gray-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			<div className="max-w-screen-xl mx-auto px-5 py-5 md:flex md:items-center md:justify-between">
				<div className="flex justify-between items-center">
					<a
						href="/"
						className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						<img
							src="/pijarLogo2.png"
							alt="Pijar Logo"
							className="h-8 w-auto"
						/>
					</a>
					<button
						type="button"
						className="inline-flex items-center p-2 px-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
						data-collapse-toggle="navbar-default"
						aria-controls="navbar-default"
						aria-expanded="false"
						onClick={(e) => {
							const navbar = document.getElementById("navbar-default");
							const button = e.currentTarget;
							if (navbar) {
								navbar.style.transition = "opacity 0.5s ease-in-out";
								if (navbar.classList.contains("hidden")) {
									navbar.classList.remove("hidden");
									button.innerHTML = `
										<span class="sr-only">Close main menu</span>
										<svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
										</svg>
									`;
									setTimeout(() => {
										navbar.style.opacity = "1";
									}, 200);
								} else {
									navbar.style.opacity = "0";
									button.innerHTML = `
										<span class="sr-only">Open main menu</span>
										<svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
										</svg>
									`;
									setTimeout(() => {
										navbar.classList.add("hidden");
									}, 200);
								}
							}
						}}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
						</svg>
					</button>
				</div>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<div className="flex flex-col md:flex-row items-center md:space-x-4 rtl:space-x-reverse w-full md:w-auto">
							<Categories categories={categories} />
							<SearchBar />
						</div>
						{isAuthenthicated && (
							<AuthenticatedMenu
								notifications={notifications}
								onEditProfile={() => {}}
								onMyProfile={() => {}}
								onSignOut={handleSignOut}
							/>
						)}
						{!isAuthenthicated && <AuthenticationButtons />}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar_not_auth;
