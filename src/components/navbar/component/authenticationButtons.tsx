import Link from "next/link";
import React from "react";

export const AuthenticationButtons: React.FC = () => (
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
