"use client";

import React, { useEffect, useState } from "react";
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
interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
}

interface InterestFormValues {
  id: string;
  name: string;
}

export default function SignUp() {
  const [interests, setInterests] = useState<InterestFormValues[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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


  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-4 py-12 md:py-20">
      <Toaster position="bottom-center" richColors />
      <div className="flex flex-col lg:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
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
          <>
            <h2 className="text-2xl font-bold mb-6">Pilih Minatmu</h2>
            {isLoading ? (
              <div className="text-center">
                <Spinner size="xl"/>
              </div>
            ) : (
              <Select>
                <SelectTrigger className="w-[35rem]">
                  <SelectValue placeholder="Pilih Minat 1" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((interest) => (
                    <SelectItem key={interest.id} value={interest.id}>
                      {interest.name}
                    </SelectItem>
                  ))}
                </SelectContent>
                <br />
                <SelectTrigger className="w-[35rem]">
                  <SelectValue placeholder="Pilih Minat 2" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((interest) => (
                    <SelectItem key={interest.id} value={interest.id}>
                      {interest.name}
                    </SelectItem>
                  ))}
                </SelectContent>
                <br />
                <SelectTrigger className="w-[35rem]">
                  <SelectValue placeholder="Pilih Minat 3" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((interest) => (
                    <SelectItem key={interest.id} value={interest.id}>
                      {interest.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            <br />
            <button className="justify-center bg-yellow-600 w-[35rem] rounded-full p-2">
              Lihat Usulan
            </button>
          </>
        </div>
      </div>
    </div>
  );
}