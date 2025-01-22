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
			<div className="flex-auto p-4">
				<ul className="flex flex-row items-center justify-between font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a
							href="/"
							className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							aria-current="page"
						>
							<img
								src="/pijarLogo2.png"
								alt="Pijar Logo"
								className="h-8 w-auto"
							/>
						</a>
					</li>
					<div className="relative inline-flex">
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
		</nav>
	);
};

export default Navbar_not_auth;
