// app/components/navbar/component/notifications.tsx
import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";


interface NotificationItem {
    message: string;
}

interface NotificationProps {
    notifications: NotificationItem[];
}

export const Notifications: React.FC<NotificationProps> = ({ notifications }) => (
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