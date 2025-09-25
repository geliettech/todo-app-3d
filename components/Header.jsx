// components/Header.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const [date, setDate] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const today = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    setDate(today.toLocaleDateString("en-GB", options)); // 'en-GB' gives this format "22 Sep 2025"
  }, []);

  return (
    <header className="flex items-center justify-between header">
      {/* header title */}
      <h1 className="text-xl font-bold leading-5">Welcome back, Vincent 👋</h1>
      {/* header right items (icons, date & Avatar) */}
      <div className="flex items-center space-x-6">
          <Image
            src={
              theme === "light"
                ? "/header-img/search-light.png"
                : "/header-img/search-dark.png"
            }
            alt="search Icon"
            width={22}
            height={22}
          />
        <div className="relative">
          <Image
            src={
              theme === "light"
                ? "/header-img/notification-light.png"
                : "/header-img/notification-dark.png"
            }
            alt="notification Icon"
            width={22}
            height={22}
            className="object-cover"
          />
          <div className="absolute top-[2px] right-[2px]">
            <Image
              src="/header-img/Badge.png"
              alt="badge"
              width={6}
            height={6}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src={
              theme === "light"
                ? "/header-img/calendar-light.png"
                : "/header-img/calendar-dark.png"
            }
            alt="calendar Icon"
            width={22}
            height={22} />
          <span className="text-base font-semibold text-gray-500 leading-4">{date}</span>
        </div>

        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/header-img/avatar.png"
            alt="User Avatar"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}
