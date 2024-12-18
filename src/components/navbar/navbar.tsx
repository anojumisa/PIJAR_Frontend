"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { fetchCategories, fetchNotifications, NotificationItem } from "@/utils/api";
import { delete_cookie, get_cookie } from "@/lib/utils";

interface SubCategory {
	category_id: number;
	sub_category_name: string;
}

interface Category {
	category_name: string;
	id: number;
	image_url: string;
	sub_categories: SubCategory[];
}

interface CategoriesProps {
	categories: Category[];
}

interface AuthenticatedMenuProps extends ProfileMenuProps, NotificationProps {
}

interface ProfileMenuProps {
	onSignOut: () => void;
	onEditProfile: () => void;
	onMyProfile: () => void;
}

interface NotificationProps {
	notifications: NotificationItem[];
}


const Categories: React.FC<CategoriesProps> = ({ categories }) => (
	<Menu as="div" className="relative inline-block pr-3">
		<MenuButton className="inline-flex w-full justify-center  gap-x-1.5 rounded-md bg-white px-3 py-2.5  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
			Kategori
			<ChevronDownIcon
				className="-mr-1 h-5 w-5 text-gray-400"
				aria-hidden="true"
			/>
		</MenuButton>
		<MenuItems
			transition
			className="absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
		>
			{categories.map((category) => (
				<MenuItem key={category.id}>
					<Menu
						as="div"
						className="relative inline-block text-left w-full"
					>
						<MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
							<span>{category.category_name}</span>
							<ChevronRightIcon
								aria-hidden="true"
								className="h-5 w-5 text-gray-400"
							/>
						</MenuButton>
						<MenuItems
							transition
							className="absolute left-full top-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
						>
							{category.sub_categories.map((subCategory) => (
								<MenuItem key={subCategory.category_id}>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
									>
										{subCategory.sub_category_name}
									</a>
								</MenuItem>
							))}
						</MenuItems>
					</Menu>
				</MenuItem>
			))}
		</MenuItems>
	</Menu>
)

const SearchBar: React.FC = () => (
	<li>
		<form className="flex items-center">
			<label htmlFor="simple-search" className="sr-only">
				Search
			</label>
			<div className="relative shrink w-80">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth=""
							d="M19 19l-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="text"
					id="simple-search"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Cari kelas, mentor, dan topik keahlian"
					required
				/>
			</div>
			<button
				type="submit"
				className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-700 rounded-lg border border-sky-7=800 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				<svg
					className="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 19l-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
					/>
				</svg>
				<span className="sr-only">Search</span>
			</button>
		</form>
	</li>
)

const AuthenticationButtons: React.FC = () => (
	<div className="flex">
		<li>
			<Link href={"/signin"}>
				<button
					type="button"
					className="inline-flex items-center mr-3 px-4 py-2 text-sm font-medium text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Sign In
				</button>
			</Link>
		</li>
		<li>
			<Link href={"/signup"}>
				<button
					type="button"
					className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-green-500"
				>
					Sign Up
				</button>
			</Link>
		</li>
	</div>
)

const Notifications: React.FC<NotificationProps> = ({ notifications }) => (
	<Menu as="div" className="relative inline-block text-left">
		<div>
			<MenuButton className="relative inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				<span className="sr-only">Notifications</span>
				<span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 rounded-full">
					{notifications.length}
				</span>
			</MenuButton>
		</div>
		<MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
			{notifications.map((notif, i) => (
				<MenuItem key={notif.message + i }>
					<a
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						// href={notif.message}
					>
						{notif.message}
					</a>
				</MenuItem>
			))}
		</MenuItems>
	</Menu>
)

const ProfileMenu: React.FC<ProfileMenuProps> = ({ onSignOut, onEditProfile, onMyProfile }) => (
	<Menu as="div" className="relative inline-block text-left">
		<div>
			<MenuButton className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M5.121 17.804A9.004 9.004 0 0112 15c2.21 0 4.21.896 5.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				<span className="sr-only">Profile</span>
			</MenuButton>
		</div>
		<MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
			<div className="py-1">
				<MenuItem>
					<button
						className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
						onClick={onMyProfile}
					>
						My Profile
					</button>
				</MenuItem>
				<MenuItem>
					<button
						className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
						onClick={onEditProfile}
					>
						Edit Profile
					</button>
				</MenuItem>
				<form action="#" method="POST">
					<MenuItem>
						<button
							className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
							onClick={onSignOut}
						>
							Sign Out
						</button>
					</MenuItem>
				</form>
			</div>
		</MenuItems>
	</Menu>
)

const AuthenticatedMenu: React.FC<AuthenticatedMenuProps> = ({
	notifications,
	onEditProfile,
	onMyProfile,
	onSignOut
}) => (
	<div className="flex gap-x-3">
		<li>
			<Notifications notifications={notifications} />
		</li>
		<li className="justify-items-end">
			<ProfileMenu
				onEditProfile={onEditProfile}
				onMyProfile={onMyProfile}
				onSignOut={onSignOut}
			/>
		</li>
	</div>
)

const Navbar_not_auth: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [notifications, setNotifications] = useState<NotificationItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isAuthenthicated, setIsAuthenthicated] = useState(false);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const data = await fetchCategories();
				setCategories(data);
				setIsAuthenthicated(!!get_cookie(document.cookie, "access_token"));
			} catch (error) {
				setError("Error loading categories");
			} finally {
				setLoading(false);
			}
		};

		getCategories();
	}, []);

	useEffect(() => {
		if (isAuthenthicated) {
			// fetch disini
			const getNotifications = async () => {
				try {
					const notificationsResp = await fetchNotifications(get_cookie(document.cookie, "access_token"))
					console.log("🚀 ~ getNotifications ~ notificationsResp:", notificationsResp);
					setNotifications(notificationsResp.data.notification)
				} catch (error) {
					setError("Error loading notifications" + error);
				} finally {
					setLoading(false);
				}
			}
			getNotifications()
		}
		// Gausa fetch kalo ga authenthicated
	}, [isAuthenthicated])

	const handleSignOut = () => {
		// Hapus Cookies
		delete_cookie("access_token");
		delete_cookie("refresh_token");
		// Redirect ke home
		document.location.replace("/")
	}

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>{error}</div>;

	return (
		<nav className="bg-gradient-to-t from-sky-800 to-gray-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			<div className="flex-auto p-4">
				<ul className="flex flex-row items-center justify-between font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a
							href="#"
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
					{isAuthenthicated && <AuthenticatedMenu 
						notifications={notifications} 
						onEditProfile={() => {}}
						onMyProfile={() => {}}
						onSignOut={handleSignOut}
					/>}
					{!isAuthenthicated && <AuthenticationButtons />}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar_not_auth;
