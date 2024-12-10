"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type APIResponse = {
  link: string;
  content: string;
};

const Navbar: React.FC = () => {
  // API CALL
  const getNotifications = (): APIResponse[] => {
    return [
      { link: "google.com", content: "Google Notification" },
      { link: "facebook.com", content: "Facebook Notification" },
      { link: "facebook.com", content: "Facebook Notification" },
      { link: "instagram.com", content: "Instagram Notification" },
      { link: "instagram.com", content: "Instagram Notification" },
    ];
  };

  // State
  const [notifications, setNotifications] = useState<APIResponse[]>([]);
  // Api get
  useEffect(() => {
    // Semua api call sama state
    setNotifications(getNotifications());
  }, []);

  return (
    <nav className="bg-[#CDB278] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex-auto p-4">
        <ul className="flex flex-row items-center justify-between font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#CDB278] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  md:bg-[#CDB278]  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              aria-current="page"
            >
              <img
                src="/pijarLogo.png"
                alt="Pijar Logo"
                className="h-8 w-auto"
              />
            </a>
          </li>
          <div className="relative inline-flex">
            <Menu as="div" className="relative inline-block pr-3">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
                <div>
                  <MenuItem>
                    <Menu
                      as="div"
                      className="relative inline-block text-left w-full"
                    >
                      <MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
                        <span>Grafik Desain</span>
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute left-full top-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt2
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt3
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </MenuItem>
                  <MenuItem>
                    <Menu
                      as="div"
                      className="relative inline-block text-left w-full"
                    >
                      <MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
                        <span>Grafik Desain</span>
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h- w-5 text-gray-400"
                        />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute left-full top-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt2
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt3
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </MenuItem>
                  <MenuItem>
                    <Menu
                      as="div"
                      className="relative inline-block text-left w-full"
                    >
                      <MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
                        <span>Grafik Desain</span>
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute left-full top-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt1
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt2
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Opt3
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </MenuItem>
                </div>
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
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                  {notifications.map((notif) => (
                    <MenuItem key={notif.link}>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href={notif.link}
                      >
                        {notif.content}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </li>
            <li className="justify-items-end">
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
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Edit Profile
                      </a>
                    </MenuItem>
                    <form action="#" method="POST">
                      <MenuItem>
                        <button
                          type="submit"
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign Out
                        </button>
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
