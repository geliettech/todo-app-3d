"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useTasks } from "@/context/TaskContext";

export default function Projects() {
  const pathname = usePathname();
  const { theme, setLight, setDark } = useTheme();
  const { tasks } = useTasks();

  const [activeItem, setActiveItem] = useState([2, 3]);
  const [activeSubItem, setActiveSubItem] = useState({
    Projects: 2.2,
    Tasks: 3.3,
  });

  const HandleActiveItem = (id) => {
    setActiveItem((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const getCountByStatus = (status) =>
    tasks.filter((task) => task.status === status).length;

  const HandleActiveSubItem = () => {
    setActiveSubItem((prev) => ({
      ...prev,
      [item.name]: sub.id,
    }));
  };

  const navItems = [
    {
      id: 1,
      name: "Team",
      href: "#",
      icon:
        theme === "light"
          ? "/projects-icons/arrowRight-light.png"
          : "/projects-icons/arrowRight-dark.png",
    },
    {
      id: 2,
      name: "Projects",
      href: "#",
      icon:
        theme === "light"
          ? "/projects-icons/arrowDown-light.png"
          : "/projects-icons/arrowDown-dark.png",
      all: [
        { id: 2.1, href: "#", label: "All projects (3)" },
        { id: 2.2, href: "#", label: "Design system" },
        { id: 2.3, href: "#", label: "User flow" },
        { id: 2.4, href: "#", label: "Ux research" },
      ],
    },
    {
      id: 3,
      name: "Tasks",
      href: "#",
      icon:
        theme === "light"
          ? "/projects-icons/arrowDown-light.png"
          : "/projects-icons/arrowDown-dark.png",
      all: [
        { id: 3.1, href: "#", label: `All tasks (${tasks.length})` },
        { id: 3.2, href: "#", label: `To do (${getCountByStatus("todo")})` },
        {
          id: 3.3,
          href: "#",
          label: `In progress (${getCountByStatus("inprogress")})`,
        },
        { id: 3.4, href: "#", label: `Done (${getCountByStatus("done")})` },
      ],
    },
    {
      id: 4,
      name: "Reminders",
      href: "#",
      icon:
        theme === "light"
          ? "/projects-icons/arrowRight-light.png"
          : "/projects-icons/arrowRight-dark.png",
    },
    {
      id: 5,
      name: "Messengers",
      href: "#",
      icon:
        theme === "light"
          ? "/projects-icons/arrowRight-light.png"
          : "/projects-icons/arrowRight-dark.png",
    },
  ];

  return (
    <aside className="projects flex flex-col justify-between h-full w-[240px] shadow-2xl">
      {/* Title & navigation */}
      <div className="">
        {/* Sidebar Title */}
        <h1 className="flex items-center justify-between text-[#1C1D22] dark:text-[#ffffff] text-3xl font-bold leading-7 mb-9">
          <span>Projects</span>
          <Image
            src={
              theme === "light"
                ? "/projects-icons/circlePlus-light.png"
                : "/projects-icons/circlePlus-dark.png"
            }
            alt="circle plus icon"
            width={24}
            height={24}
            className="object-contain"
          />
        </h1>
        {/* navigation section */}
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <div key={item.id}>
              <Link
                href={item.href}
                onClick={() => HandleActiveItem(item.id)}
                className="flex items-center justify-between w-full text-left"
              >
                <span
                  className={`text-base font-bold leading-4 ${
                    activeItem.includes(item.id)
                      ? "relative before:content-[''] before:absolute before:left-[1px] before:top-[1.6rem] before:w-[1.5px] before:h-26 before:bg-gray-300 dark:before:bg-[#ffffff1a] text-[#1C1D22] dark:text-[#ffffff]"
                      : "text-gray-400 dark:text-[#e1e1e180]"
                  }`}
                >
                  {item.name}
                </span>
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={activeItem.includes(item.id) ? 10 : 6} // 8px vs 4px
                  height={activeItem.includes(item.id) ? 10 : 6}
                  className="object-contain"
                />
              </Link>

              {/* Sub-items */}
              {item.all && activeItem.includes(item.id) && (
                <div className="ml-6 mt-1 flex flex-col gap-1">
                  {item.all.map((sub) => (
                    <Link
                      href={sub.href}
                      key={sub.id}
                      className="relative pl-2 before:content-[''] before:absolute before:left-[-1.3rem] before:top-1/2 before:w-6 before:h-[1.5px] before:bg-gray-300 dark:before:bg-[#ffffff1a]"
                    >
                      <button
                        onClick={HandleActiveSubItem}
                        className={`block w-auto text-left text-base font-semibold leading-4 px-3 py-1 rounded-full ${
                          activeSubItem[item.name] === sub.id
                            ? "bg-[#e1e1e180] dark:bg-[#ffffff1a] text-[#1C1D22] dark:text-[#ffffff]"
                            : "text-gray-400 dark:text-[#e1e1e180]"
                        }`}
                      >
                        {sub.label}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between p-2 bg-[#e1e1e180] dark:bg-[#ffffff1a] rounded-full">
        {/* Light */}
        <div
          onClick={setLight}
          className={`p-2 rounded-full cursor-pointer ${
            theme === "light" ? "bg-[#ffffff] w-[50%] shadow-lg" : ""
          }`}
        >
          <Image
            src={
              theme === "light"
                ? "/projects-icons/sun-light.png"
                : "/projects-icons/sun-dark.png"
            }
            alt="sun icon"
            width={20}
            height={20}
          />
        </div>

        {/* Dark */}
        <div
          onClick={setDark}
          className={`p-2 rounded-full cursor-pointer ${
            theme === "dark" ? "bg-[#1C1D22] w-[50%] shadow-lg" : ""
          }`}
        >
          <Image
            src={
              theme === "dark"
                ? "/projects-icons/moon-dark.png"
                : "/projects-icons/moon-light.png"
            }
            alt="moon icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </aside>
  );
}
