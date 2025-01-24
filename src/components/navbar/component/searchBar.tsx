import React from "react";

export const SearchBar: React.FC = () => (

    <form
      className="flex items-center md:mt-0 mt-4"
      action="/search"
      method="get"
    >
      <label htmlFor="simple-search" className="sr-only">
      Search
      </label>
      <div className="relative w-full md:w-80">
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
          strokeWidth="2"
          d="M19 19l-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        name="keyword"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Cari kelas, mentor, dan topik keahlian"
        required
      />
      </div>
      <button
      type="submit"
      className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-700 rounded-lg border border-sky-800 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

);
