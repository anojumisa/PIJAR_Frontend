"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { fetchCategories } from "@/utils/api";

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

const Navbar_not_auth: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const data = await fetchCategories();
				setCategories(data);
			} catch (error) {
				setError("Error loading categories");
			} finally {
				setLoading(false);
			}
		};

		getCategories();
	}, []);

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
					</div>
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
				</ul>
			</div>
		</nav>
	);
};

export default Navbar_not_auth;
