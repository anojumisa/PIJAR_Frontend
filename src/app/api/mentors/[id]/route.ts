import { NextResponse } from "next/server";

const ProfileMentors = [
  {
    id: 1,
    name: "Deodora Anneth",
    image_profile:
      "https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg",
    image_baground:
      "https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg",
    job: "Software Engineering",
    company_now:"PT.GOJEK INDONESIA",
    experience: [
      {
        company: "PT.GOJEK INDONESIA",
        role: "Frontend Developer",
        date_year: "2022 - Present",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        achievements: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          ", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
      },
      {
        company: "Bukalapak",
        role: "Software Engineer Intern",
        date_year: "2021 - 2022",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        achievements: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          ", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
      }
    ],
    education: [
      {
        school_name: "Universitas Gunadarma",
        year: "2009 - 2011",
        major: "Ilmu Komputer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        school_name: "SMA Negeri 1 Jakarta",
        year: "2006 - 2009",
        major: "IPA",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    phone: "0913546128",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    skills: ["UI/UX", "Python", "MySQL"],
    schedule: [
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",theme:"UI/UX Menggunakan Figma", day: "senin, 09 September 2024", time: "09:00 AM-14:00 PM" },
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", theme:"Belajar Javascript Pemula", day: "selasa, 10 September 2024", time: "09:00 AM -12:00 PM" },
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",theme:"UI/UX Menggunakan Figma", day: "senin, 09 September 2024", time: "09:00 AM-14:00 PM" },
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", theme:"Belajar Javascript Pemula", day: "selasa, 10 September 2024", time: "09:00 AM -12:00 PM" },
    ],
  },
  {
    id: 2,
    name: "Deodora Anneth",
    image_profile:
      "https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg",
    image_baground:
      "https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg",
    job: "Software Engineering",
    company:"PT.GOJEK INDONESIA",
    experience: [
      {
        company: "PT.GOJEK INDONESIA",
        role: "Frontend Developer",
        date_year: "2022 - Present",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        achievements: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          ", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
      },
      {
        company: "Bukalapak",
        role: "Software Engineer Intern",
        date_year: "2021 - 2022",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        achievements: [
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          ", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ]
      }
    ],
    education: [
      {
        school_name: "Universitas Gunadarma",
        year: "2009 - 2011",
        major: "Ilmu Komputer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        school_name: "SMA Negeri 1 Jakarta",
        year: "2006 - 2009",
        major: "IPA",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    phone: "0913546128",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    skills: ["UI/UX", "Python", "MySQL"],
    schedule: [
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",theme:"UI/UX Menggunakan Figma", day: "senin, 09 September 2024", time: "09:00 AM-14:00 PM" },
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", theme:"Belajar Javascript Pemula", day: "selasa, 10 September 2024", time: "09:00 AM -12:00 PM" },
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",theme:"UI/UX Menggunakan Figma", day: "senin, 09 September 2024", time: "09:00 AM-14:00 PM" },
      { image_program :"https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", theme:"Belajar Javascript Pemula", day: "selasa, 10 September 2024", time: "09:00 AM -12:00 PM" },
    ],
  },
];

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const mentor = ProfileMentors.find((p) => p.id === Number(params.id));
  if (!mentor) {
    return NextResponse.json({ message: "Mentor not found" }, { status: 404 });
  }
  return NextResponse.json({ mentors: [mentor] });
}
