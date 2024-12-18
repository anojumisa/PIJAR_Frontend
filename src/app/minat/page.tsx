"use client";

import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Toaster } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import Link from "next/link";
import { Spinner } from "flowbite-react";
import { fetchCategories } from "@/utils/api";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

interface InterestFormValues {
  id: string;
  category_name: string;
}

interface SelectorProps {
  placeholder: string;
  selected?: string;
  interests: InterestFormValues[];
  onSelect: (interest: InterestFormValues) => void;
}

const Selector: React.FC<SelectorProps> = ({ interests, onSelect, placeholder }) => {
  const [selected, setSelected] = useState<InterestFormValues | null>(null);
  const handleOnSelectItem = (item: InterestFormValues) => {
    console.log(item);
    onSelect(item);
    setSelected(item);
  }
  return (
    <Menu as="div" className="relative inline-block pr-3">
      <MenuButton className="inline-flex w-full justify-center  gap-x-1.5 rounded-md bg-white px-3 py-2.5  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {selected ? selected.category_name : placeholder}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </MenuButton>
      <MenuItems
        transition
        className="absolute mt-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {interests.map((interest) => (
          <MenuItem key={interest.id}>
            <MenuButton className="inline-flex w-full justify-between px-3 py-1 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100 my-1">
              <div
                onClick={() => handleOnSelectItem(interest)}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {interest.category_name}
              </div>
            </MenuButton>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}

export default function SignUp() {
  const [interests, setInterests] = useState<InterestFormValues[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedInterests, setSelectedInterests] = useState<Record<number, InterestFormValues>>({});

  useEffect(() => {
    const fetchMinat = async () => {
      try {
        const data = await fetchCategories();
        setInterests(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching interests:", error);
      }
    }
    fetchMinat()
  }, [])

  const handleSelectInterest = (interest: InterestFormValues, index: number) => {
    selectedInterests[index] = interest;
    setSelectedInterests({...selectedInterests});
  }

  const onSubmitInterests = () => {
    // POST API
    console.log(selectedInterests);
  }

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-4 py-12 md:py-20">
      <Toaster position="bottom-center" richColors />
      <div className="flex flex-col lg:flex-row w-full max-w-5xl rounded-lg shadow-lg">
        <div className="bg-yellow-600 text-white flex flex-col justify-center items-center lg:items-start px-8 py-12 lg:w-2/6">
          <Link href={"/"}>
            <h2 className="text-3xl font-caveat leading-snug mb-6 text-center lg:text-left">
              Ruang Belajar Anda, <br /> Dimanapun dan Kapanpun
            </h2>
            <img
              src="/image.png"
              alt="Robot"
              className="w-40 h-40 lg:w-64 lg:h-64 mt-6 ml-6"
            />
          </Link>
        </div>

        <div className="bg-white flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Pilih Minatmu</h2>
          {isLoading ? (
            <div className="text-center">
              <Spinner size="xl" />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Selector interests={interests} placeholder="Pilih Minat 1" onSelect={(interest) => handleSelectInterest(interest, 0)}/>
              <Selector interests={interests} placeholder="Pilih Minat 2" onSelect={(interest) => handleSelectInterest(interest, 1)}/>
              <Selector interests={interests} placeholder="Pilih Minat 3" onSelect={(interest) => handleSelectInterest(interest, 2)}/>
              <button onClick={onSubmitInterests} className="justify-center bg-yellow-600 rounded-full p-2">
                Lihat Usulan
              </button>
            </div>
          )}
          <br />
        </div>
      </div>
    </div>
  );
}