
// components/DragBox.js
import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function DragBox() {
  return (
    <div className="flex items-center justify-center p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 text-lg">
      <FiPlus className="mr-2" />
      <span>Drag your task here</span>
    </div>
  );
}

