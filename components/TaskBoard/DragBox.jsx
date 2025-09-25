
// components/DragBox.jsx
import React from 'react';

export default function DragBox() {
  return (
    <div className="flex items-center justify-center p-8 w-[320px] h-[178px] border-2 border-dashed border-gray-400 dark:border-gray-300 rounded-xl text-gray-400 dark:text-slate-300">
      <span className="text-base font-semibold leading-4">Drag your task here...</span>
    </div>
  );
}

