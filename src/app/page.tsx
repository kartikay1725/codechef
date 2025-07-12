"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-6 left-6 flex items-center gap-2 text-xl font-semibold">
        <span className="text-indigo-600 text-2xl">🤖</span>
        <span className="text-gray-100 font-extrabold">CodeChef</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
        Welcome to <span className="text-indigo-600">CODECHEF</span>
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10">
        Your own tech socitey where you can learn, compete, and grow with like-minded individuals. 
        Join us to enhance your coding skills and be part of a vibrant community.
      </p>

      <div className="flex gap-4">
        <Link href="/login" className="mb-4">
        <Button
          className="bg-indigo-600 text-white px-6 py-2 text-lg hover:bg-indigo-700"
        >
          Login
        </Button>
        </Link>
        <Link href="/register" className="mb-4">
        <Button
          variant="outline"
          className="px-6 py-2 text-lg bg-gray-100 text-gray-800"
        >
          Register
        </Button>
        </Link>
      </div>
    </main>
  );
}
