// components/TitleBar.js
"use client";
import { FiGrid, FiPlus, FiFilter, FiArrowDown, FiMoreVertical } from 'react-icons/fi';

export default function Menu() {
  return (
    <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => console.log('Board view clicked!')}>
          <FiGrid className="text-indigo-500" />
          <span className="font-semibold">Board view</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-500 cursor-pointer hover:text-indigo-500 transition-colors" onClick={() => console.log('Add view clicked!')}>
          <FiPlus />
          <span>Add view</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-slate-500 cursor-pointer hover:text-indigo-500 transition-colors" onClick={() => console.log('Filter clicked!')}>
          <FiFilter />
          <span>Filter</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-500 cursor-pointer hover:text-indigo-500 transition-colors" onClick={() => console.log('Sort clicked!')}>
          <FiArrowDown />
          <span>Sort</span>
        </div>
        <FiMoreVertical className="text-slate-500 cursor-pointer hover:text-slate-700 transition-colors" onClick={() => console.log('More options clicked!')} />
        <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg font-medium shadow-md hover:bg-indigo-600 transition-colors" onClick={() => console.log('New template clicked!')}>
          <FiPlus />
          <span>New template</span>
        </button>
      </div>
    </div>
  );
}