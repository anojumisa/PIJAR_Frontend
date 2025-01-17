import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Category } from "@/utils/interface/type";

interface CategoriesProps {
    categories: Category[];
}


export const Categories: React.FC<CategoriesProps> = ({ categories }) => (
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
                                        href={`/course?categoryid=${subCategory.category_id}`}
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