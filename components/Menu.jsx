// components/menu.jsx
"use client";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Menu() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between menu border-b border-gray-300">
      {/* left menu */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 menu-tab--active">
          <Image
            src={
              theme === "light"
                ? "/menu-icons/board-light.png"
                : "/menu-icons/board-dark.png"
            }
            alt="Board view Icon"
            width={18}
            height={18}
          />
          <span className="text-base font-semibold leading-4">
            Board view
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={
              theme === "light"
                ? "/menu-icons/add-light.png"
                : "/menu-icons/add-dark.png"
            }
            alt="Add view Icon"
            width={18}
            height={18}
          />
          <span className="text-base font-semibold leading-4 text-gray-500">
            Add view
          </span>
        </div>
      </div>
      {/* right menu */}
      <div className="flex items-center gap-6">
        <div className="text-base font-semibold leading-4">Filter</div>
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold leading-4 text-gray-500">
            Sort
          </span>
          <Image
            src={
              theme === "light"
                ? "/menu-icons/More-light.png"
                : "/menu-icons/More-dark.png"
            }
            alt="calendar Icon"
            width={26}
            height={26}
          />
        </div>
        <button className="text-base font-semibold leading-4 bg-[#1C1D22] dark:bg-[#4B69FF] text-[#ffffff] py-3 px-6 rounded-full">New template</button>
      </div>
    </div>
  );
}
