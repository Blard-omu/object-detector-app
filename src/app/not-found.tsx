"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, LucideArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const router = useRouter();
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
        
        <h1 className="text-3xl md:text-5xl font-bold text-[#4A3AFF] mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6 max-w-md">
          Sorry, we couldn’t find the page you were looking for.
        </p>
        <div className="flex items-center gap-x-2">
        <button
            onClick={() => router.back()}
            className="flex items-center gap-x-2 bg-[#5c4efc] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all"
          >
            <LucideArrowLeft className="size-5 xl:size-6" />
            Back
          </button>
          <Link href="/" className="flex items-center gap-x-2 bg-[#5c4efc] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all">
        <Home className="size-5 xl:size-6" />
            Home
        </Link>
        </div>
       
      </div>
    );
  };