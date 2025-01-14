import { NextResponse } from 'next/server';

export async function GET() {
  const mentors = [
    { id: 1, name: "Deodora Anneth", image_profile: 'https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: "Deodora Anneth", image_profile: 'https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return NextResponse.json({ mentors });
}
