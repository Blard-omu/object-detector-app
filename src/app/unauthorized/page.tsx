"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockKeyhole, Home, LucideArrowLeft } from "lucide-react";

export default function ForbiddenPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
      <LockKeyhole className="text-[#5c4efc] w-16 h-16 mb-4" />

      <h1 className="text-3xl md:text-5xl font-bold text-[#4A3AFF] mb-4">
        403 - Access Denied
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        You don&rsquo;t have permission to view this page. Please login as admin or contact support.
      </p>

      <div className="flex items-center gap-x-2">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-x-2 bg-[#5c4efc] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all"
        >
          <LucideArrowLeft className="size-5 xl:size-6" />
          Login
        </button>
        <Link
          href="/"
          className="flex items-center gap-x-2 bg-[#5c4efc] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all"
        >
          <Home className="size-5 xl:size-6" />
          Home
        </Link>
      </div>
    </div>
  );
}
