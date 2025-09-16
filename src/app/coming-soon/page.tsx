"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, LucideArrowLeft } from "lucide-react";

export default function ComingSoonPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center bg-[#f3f4f6] text-center p-6 h-[100vh]">
      <div className="py-2">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4a3aff]">
          Feature Coming Soon 🚀
        </h1>
        <p className="text-gray-700 max-w-md mx-auto">
        We&apos;re working hard to bring this feature to life. Stay tuned...
        </p>

      </div>
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
}
