// components/Sidebar.js
"use client";
import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useTasks } from "@/context/TaskContext";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiArrowDown, FiGrid, FiSun, FiMoon } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { tasks } = useTasks();

  // Default open sections
  const [open, setOpen] = useState(["Projects", "Tasks"]);

  // Active defaults
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
      icon: <FiArrowRight />,
    },
    {
      id: "Projects",
      name: "Projects",
      all: [
        { id: "design-system", label: "Design system" },
        { id: "user-flow", label: "User flow" },
        { id: "ux-research", label: "UX research" },
      ],
      icon: <FiArrowDown />,
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
      icon: <FiArrowDown />,
    },
    {
      id: "Reminders",
      name: "Reminders",
      all: [{ id: "no-reminder", label: "No Reminder yet" }],
      icon: <FiArrowRight />,
    },
    {
      id: "Messengers",
      name: "Messengers",
      all: [{ id: "no-messenger", label: "No Messenger yet" }],
      icon: <FiArrowRight />,
    },
  ];

  const toggleSection = (id) => {
    setOpen((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <aside className="p-6 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-2xl transition-colors duration-300">
      <h1 className="mb-12 text-slate-900 dark:text-white">Projects</h1>

      <nav className="space-y-6">
        {navItems.map((item) => {
          // Check if this parent has an active child
          const parentActive = !!activeItem[item.id];

          return (
            <div key={item.id} className="">
              <div
                className={`flex items-center justify-between cursor-pointer font-semibold text-lg
                  ${
                    parentActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-white"
                  }`}
                onClick={() => toggleSection(item.id)}
              >
                <span>{item.name}</span>
                {item.icon}
              </div>

              {/* Dropdown items */}
              {open.includes(item.id) && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.all.map((sub) => (
                    <div
                      key={sub.id}
                      className={`cursor-pointer p-1 rounded-md transition-colors ${
                        activeItem[item.id] === sub.id
                          ? "bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-white font-medium text-sm"
                          : "text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-500"
                      }`}
                      onClick={() =>
                        setActiveItem((prev) => ({ ...prev, [item.id]: sub.id }))
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

      {/* Theme toggle */}
      <div
        className="flex items-center justify-between p-2 mt-10 bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer transition-colors"
        onClick={toggleTheme}
      >
        <div
          className={`p-2 rounded-full ${theme === "light" ? "bg-white" : ""}`}
        >
          <FiSun
            className={`h-5 w-5 ${
              theme === "light" ? "text-slate-700" : "text-slate-400"
            }`}
          />
        </div>
        <div
          className={`p-2 rounded-full ${theme === "dark" ? "bg-slate-900" : ""}`}
        >
          <FiMoon
            className={`h-5 w-5 ${
              theme === "dark" ? "text-white" : "text-slate-400"
            }`}
          />
        </div>
      </div>
    </aside>
  );
}
