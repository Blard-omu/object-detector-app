"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

interface AvatarProps {
  color?: string;
  isNav?: boolean
  imageUrl: string;
  onClick?: ()=>void
}

export default function Avatar({ imageUrl, color="white", isNav=false }: AvatarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const {logout, auth} = useAuth()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
   logout()
  };
  

  // console.log(auth.user?.name);
  

  return (
    <div className="flex items-center gap-4 relative" ref={menuRef}>
       <span className={` hidden md:inline-block text-${color}`}>{auth.user?.username}</span>
      <button onClick={() => setShowMenu(!showMenu)}>
       
        <Image
          src={imageUrl}
          alt="avatar"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
      </button>

      { showMenu && (
        <div className={`absolute top-14 ${isNav && "right-0"} bg-[#5c4efc] border border-white rounded-md shadow-lg text-white/80`}>
          <Link
          href={auth.user?.role === "admin" ? `/${auth.user?.role}/dashboard` : "/"}
            className="w-full inline-block text-left px-6 py-2 hover:bg-white/10"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-6 py-2 hover:bg-white/10"
          >
            Logout
          </button>
          
        </div>
      )}
    </div>
  );
}
