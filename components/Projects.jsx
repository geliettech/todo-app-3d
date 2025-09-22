"use client";
import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useTasks } from "@/context/TaskContext";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Projects() {
  const pathname = usePathname();
  const { theme, setLight, setDark } = useTheme();
  const { tasks } = useTasks();

  const [open, setOpen] = useState(["Projects", "Tasks"]);
  const [activeItem, setActiveItem] = useState({
    Projects: "design-system",
    Tasks: "inprogress",
  });

  const getCountByStatus = (status) =>
    tasks.filter((task) => task.status === status).length;

  const navItems = [
    {
      id: "Teams",
      name: "Teams",
      all: [{ id: "no-team", label: "No team yet" }],
    },
    {
      id: "Projects",
      name: "Projects",
      all: [
        { id: "design-system", label: "Design system" },
        { id: "user-flow", label: "User flow" },
        { id: "ux-research", label: "UX research" },
      ],
    },
    {
      id: "Tasks",
      name: "Tasks",
      all: [
        { id: "all", label: `All tasks (${tasks.length})` },
        { id: "todo", label: `To do (${getCountByStatus("todo")})` },
        {
          id: "inprogress",
          label: `In progress (${getCountByStatus("inprogress")})`,
        },
        { id: "done", label: `Done (${getCountByStatus("done")})` },
      ],
    },
    {
      id: "Reminders",
      name: "Reminders",
      all: [{ id: "no-reminder", label: "No Reminder yet" }],
    },
    {
      id: "Messengers",
      name: "Messengers",
      all: [{ id: "no-messenger", label: "No Messenger yet" }],
    },
  ];

  const toggleSection = (id) => {
    setOpen((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // 🔑 Helper function for arrow icons
  const getArrowIcon = (id) => {
    const isOpen = open.includes(id);

    if (isOpen) {
      return theme === "light"
        ? "/projects-icons/arrowDown-light.png"
        : "/projects-icons/arrowDown-dark.png";
    }

    return theme === "light"
      ? "/projects-icons/arrowRight-light.png"
      : "/projects-icons/arrowRight-dark.png";
  };

  return (
    <aside className="projects flex flex-col justify-between h-full w-[218px] shadow-2xl transition-colors duration-300">
      <div>
        {/* Sidebar Title */}
        <div className="flex flex-row justify-between items-center gap-2">
          <h1 className="text-[#1C1D22] dark:text-[#ffffff] text-3xl font-bold leading-7 font-Exo">
            Projects
          </h1>
          <Image
            src={
              theme === "light"
                ? "/projects-icons/circlePlus-light.png"
                : "/projects-icons/circlePlus-dark.png"
            }
            alt="circle plus icon"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        {/* Nav Sections */}
        <nav className="space-y-6 mt-9">
          {navItems.map((item) => {
            const parentActive = !!activeItem[item.id];
            return (
              <div key={item.id}>
                <div
                  className={`flex items-center justify-between cursor-pointer ${
                    parentActive
                      ? "text-[#1C1D22] dark:text-[#ffffff]"
                      : "text-slate-500 dark:text-slate-300"
                  }`}
                  onClick={() => toggleSection(item.id)}
                >
                  <span className="font-Exo font-bold text-base leading-4">
                    {item.name}
                  </span>
                  <div
                    className={`relative cursor-pointer ${
                      parentActive ? "w-2 h-6" : "w-6 h-2"
                    }`}
                  >
                    <Image
                      src={getArrowIcon(item.id)}
                      alt={`icon-${item.id}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Dropdown items */}
                {open.includes(item.id) && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.all.map((sub) => (
                      <div
                        key={sub.id}
                        className={`cursor-pointer p-1 rounded-md transition-colors font-medium text-sm ${
                          activeItem[item.id] === sub.id
                            ? "bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-white"
                            : "text-slate-500 dark:text-slate-300"
                        }`}
                        onClick={() =>
                          setActiveItem((prev) => ({
                            ...prev,
                            [item.id]: sub.id,
                          }))
                        }
                      >
                        {sub.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between p-2 mt-10 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors">
        {/* Moon button (dark) */}
        <div
          onClick={setLight}
          className={`p-2 rounded-full cursor-pointer ${
            theme === "light" ? "bg-white" : ""
          }`}
        >
          <Image
            src={
              theme === "light"
                ? "/projects-icons/sun-light.png"
                : "/projects-icons/sun-dark.png"
            }
            alt="moon icon"
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
        </div>

        {/* Sun button (light) */}
        <div
          onClick={setDark}
          className={`p-2 rounded-full cursor-pointer ${
            theme === "dark" ? "bg-slate-900" : ""
          }`}
        >
          <Image
            src={
              theme === "dark"
                ? "/projects-icons/moon-dark.png"
                : "/projects-icons/moon-light.png"
            }
            alt="sun icon"
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
        </div>
      </div>
    </aside>
  );
}
