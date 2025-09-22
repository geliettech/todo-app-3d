// components/Header.js
// (Client Component)
"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiCalendar, FiBell } from 'react-icons/fi';

export default function Header() {
  const [date, setDate] = useState('');

useEffect(() => {
  const today = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  setDate(today.toLocaleDateString('en-GB', options)); // 'en-GB' gives this format "22 Sep 2025"
}, []);

  return (
    <header className="flex items-center justify-between header  transition-colors">
      <h1 className="text-2xl font-semibold">Welcome back, Vincent 👋</h1>
      <div className="flex items-center space-x-6">
        <div className=" text-gray-400">
          <FiSearch size={20} className="" />
          </div>
          <div className="relative text-slate-500 cursor-pointer" onClick={() => console.log('Notifications clicked!')}>
          <FiBell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center space-x-2">
          <FiCalendar size={20} className="text-slate-500" />
          <span className="text-sm font-medium">{date}</span>
        </div>
        
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=vincent" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}
