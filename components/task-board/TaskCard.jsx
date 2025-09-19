// components/TaskCard.js
"use client";
import React, { useState } from 'react';
import { FiCheckCircle, FiMoreHorizontal } from 'react-icons/fi';
import { useTasks } from '@/context/TaskContext';

export default function TaskCard({ task }) {
  const { updateTaskStatus, deleteTask, editTask } = useTasks();
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New state for hover effect

  const handleMoveTask = (newStatus) => {
    let newProgress;
    if (newStatus === 'todo') {
      newProgress = 1; // Set to 1 for 'To do'
    } else if (newStatus === 'inprogress') {
      newProgress = 5; // Set to 5 for 'In progress'
    } else if (newStatus === 'done') {
      newProgress = 10; // Set to 10 for 'Done'
    }
    updateTaskStatus(task.id, newStatus, newProgress);
    setShowMenu(false);
  };

  const handleEditTask = () => {
    const newTitle = window.prompt("Enter new title:", task.title);
    if (newTitle) {
      const newDescription = window.prompt("Enter new description:", task.description);
      if (newDescription) {
        editTask(task.id, newTitle, newDescription);
      }
    }
    setShowMenu(false);
  };
  
  const handleDeleteTask = () => {
    deleteTask(task.id);
    setShowMenu(false);
  };

  const avatarList = (
    <div className="flex -space-x-2">
      {task.assignees.map((avatar, index) => (
        <img key={index} src={avatar} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" alt="Assignee" />
      ))}
    </div>
  );
  
  // Calculate width as a percentage of 10
  const progressPercentage = (task.progress / 10) * 100;

  return (
    <>
      <div 
        className={`relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md space-y-4 transition-all duration-200 ease-in-out
          ${isHovered ? 'shadow-lg scale-102' : ''} // Apply shadow and scale on hover
          ${task.status === 'todo' ? 'cursor-pointer' : ''} // Only apply cursor for todo tasks
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-slate-900 dark:text-white font-medium">{task.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">{task.description}</p>
        
        <div className="flex items-center space-x-2">
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${task.progress === 10 ? 'bg-green-500' : 'bg-orange-500'}`} 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{task.progress}/10</span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="p-1 px-2 rounded-full bg-slate-200 dark:bg-slate-700 text-xs font-medium">{task.date}</span>
            {task.progress === 10 && (
              <FiCheckCircle className="text-green-500" />
            )}
          </div>
          <div className="flex items-center space-x-2">
            {avatarList}
            <div className="relative">
              <FiMoreHorizontal className="cursor-pointer text-slate-500 hover:text-slate-700" onClick={() => setShowMenu(!showMenu)} />
              {showMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg shadow-lg z-10">
                  <button onClick={() => handleMoveTask('todo')} className="block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600">To do</button>
                  <button onClick={() => handleMoveTask('inprogress')} className="block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600">In progress</button>
                  <button onClick={() => handleMoveTask('done')} className="block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600">Done</button>
                  <hr className="my-1 border-slate-200 dark:border-slate-600" />
                  <button onClick={handleEditTask} className="block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600">Edit task</button>
                  <button onClick={handleDeleteTask} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900">Delete task</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}