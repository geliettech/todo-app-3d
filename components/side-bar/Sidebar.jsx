// components/Sidebar.js
"use client";
import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useTasks } from '@/context/TaskContext';
import { FiSun, FiMoon, FiGrid, FiList, FiCheckCircle, FiClock, FiBell, FiMessageCircle, FiPlus } from 'react-icons/fi';

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { tasks, filterStatus, setFilterStatus } = useTasks();
  const [activeProject, setActiveProject] = useState('design-system'); // Corrected initial state

  const getCountByStatus = (status) => tasks.filter(task => task.status === status).length;

  const getTaskLinkClasses = (status) => {
    const baseClasses = "flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer";
    const activeClasses = status === filterStatus ? " bg-indigo-500 text-white font-medium" : " text-slate-800 dark:text-slate-200";
    return baseClasses + activeClasses;
  };

  const getProjectLinkClasses = (project) => {
    const baseClasses = "flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer";
    const activeClasses = project === activeProject ? " bg-indigo-500 text-white font-medium" : " text-slate-800 dark:text-slate-200";
    return baseClasses + activeClasses;
  };

  return (
    <aside className="w-72 min-h-screen p-6 flex flex-col justify-between bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xl transition-colors duration-300">
      <div>
        <div className="flex items-center space-x-2 text-xl font-bold mb-12">
          <span className="text-slate-900 dark:text-white">Projects</span>
        </div>

        <nav className="space-y-6">
          <div className="text-slate-400 font-semibold uppercase text-xs">Projects</div>
          <div className="space-y-2">
            <div onClick={() => setActiveProject('all-projects')} className={getProjectLinkClasses('all-projects')}>
              <FiGrid />
              <span className="ml-2">All projects (3)</span>
            </div>
            <div onClick={() => setActiveProject('design-system')} className={getProjectLinkClasses('design-system')}>
              <span className="ml-2">Design system</span>
            </div>
            <div onClick={() => setActiveProject('user-flow')} className={getProjectLinkClasses('user-flow')}>
              <span className="ml-2">User flow</span>
            </div>
            <div onClick={() => setActiveProject('ux-research')} className={getProjectLinkClasses('ux-research')}>
              <span className="ml-2">UX research</span>
            </div>
          </div>

          <div className="text-slate-400 font-semibold uppercase text-xs pt-4">Tasks</div>
          <div className="space-y-2">
            <div onClick={() => setFilterStatus('all')} className={getTaskLinkClasses('all')}>
              <FiList />
              <span className="ml-2">All tasks ({tasks.length})</span>
            </div>
            <div onClick={() => setFilterStatus('todo')} className={getTaskLinkClasses('todo')}>
              <FiClock />
              <span className="ml-2">To do ({getCountByStatus('todo')})</span>
            </div>
            <div onClick={() => setFilterStatus('inprogress')} className={getTaskLinkClasses('inprogress')}>
              <FiCheckCircle />
              <span className="ml-2">In progress ({getCountByStatus('inprogress')})</span>
            </div>
            <div onClick={() => setFilterStatus('done')} className={getTaskLinkClasses('done')}>
              <FiGrid />
              <span className="ml-2">Done ({getCountByStatus('done')})</span>
            </div>
          </div>
          
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors pt-4">
            <FiBell />
            <span className="ml-2">Reminders</span>
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <FiMessageCircle />
            <span className="ml-2">Messengers</span>
          </a>
        </nav>
      </div>

      <div className="flex items-center justify-between p-2 bg-slate-200 dark:bg-slate-700 rounded-full cursor-pointer transition-colors" onClick={toggleTheme}>
        <div className={`p-2 rounded-full ${theme === 'light' ? 'bg-white' : ''}`}>
          <FiSun className={`h-5 w-5 ${theme === 'light' ? 'text-yellow-500' : 'text-slate-400'}`} />
        </div>
        <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-slate-900' : ''}`}>
          <FiMoon className={`h-5 w-5 ${theme === 'dark' ? 'text-white' : 'text-slate-400'}`} />
        </div>
      </div>
    </aside>
  );
}