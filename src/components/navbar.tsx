"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import { useState, useCallback, useEffect, useRef } from "react";
import Avatar from "../utils/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { Search } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const { auth } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSectionNav = useCallback(
    (sectionId: string) => {
      router.push(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [router]
  );

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white text-[#5c4efc] shadow-md mt-8 mx-4 rounded-md">
      <div className="mx-auto lg:p-2 lg:h-16 p-1 h-12 flex items-center justify-between">
        <button
          className="lg:hidden ml-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-8 w-8 text-black" />
        </button>

        {/* Desktop Nav */}
        <div className="flex-1 lg:flex items-center lg:gap-12 font-medium justify-start lg:ml-4 hidden">
          {["about", "gallery", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleSectionNav(section)}
              className="border-b border-transparent hover:border-b-2 hover:border-[#5c4efc] lg:text-xl hover:text-[#5c4efc]"
            >
              {section.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center w-auto mx-3 font-light text-[14px] px-[10px] backdrop-blur-[143.12px] h-[32px] border border-white/10 overflow-hidden rounded-full bg-[#5c4efc]/30">
          <Search />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full p-2 focus:outline-none bg-transparent"
          />
        </div>

        <div className="flex-1 hidden lg:flex items-center lg:-ml-16 justify-end lg:gap-6 font-medium mr-4"></div>

        {auth?.token ? (
          <Avatar color="black" imageUrl="/Profile/Profile3.jpg" isNav={true} />
        ) : (
          <Link
            href="/login"
            className="hover:bg-[#5c4efc] hover:text-white lg:text-xl px-2 py-2 lg:px-4 lg:py-2 rounded border border-[#5c4efc] bg-white text-[#5c4efc] transition ml-6"
          >
            LOGIN
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            ref={menuRef}
            className="bg-white items-start shadow-lg p-8 flex flex-col gap-6 relative w-[80%] max-w-sm h-full"
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <XCircleIcon className="h-8 w-8 text-[#5c4efc]" />
            </button>

            {["about", "gallery", "contact"].map((section) => (
              <button
                key={section}
                className="text-sm text-black hover:text-[#5c4efc]"
                onClick={() => {
                  handleSectionNav(section);
                  setMenuOpen(false);
                }}
              >
                {section.toUpperCase()}
              </button>
            ))}

            {auth?.token && <Avatar imageUrl="/Profile/Profile3.jpg" />}
          </div>
        </div>
      )}
    </nav>
  );
}
