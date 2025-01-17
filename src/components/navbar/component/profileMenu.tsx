// app/components/navbar/component/profileMenu.tsx
import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

interface ProfileMenuProps {
    onSignOut: () => void;
    onEditProfile: () => void;
    onMyProfile: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onSignOut, onEditProfile, onMyProfile }) => (
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
