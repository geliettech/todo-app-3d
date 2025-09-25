// components/TaskBoard.js
"use client";
import React from 'react';
import TaskCard from './TaskCard';
import DragBox from './DragBox';
import { useTasks } from '@/context/TaskContext';
import { FiPlus } from 'react-icons/fi';

export default function TaskBoard() {
  const { tasks, addTask, filterStatus } = useTasks(); // Get filterStatus from context

  const handleAddTask = (status) => {
    const title = prompt("Enter a title for the new task:");
    if (title) {
      addTask(title, status);
    }
  };

  // Filter tasks based on the current filterStatus
  const filteredTasks = filterStatus === 'all'
    ? tasks
    : tasks.filter(task => task.status === filterStatus);

  const getCountByStatus = (status) => tasks.filter(task => task.status === status).length;

  return (
    <div className="flex space-x-6 overflow-x-auto p-4">
      {/* Conditionally render based on the filterStatus */}
      {(filterStatus === 'all' || filterStatus === 'todo') && (
        <div className="flex-1 w-[320px] min-w-[320px] space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            To do ({getCountByStatus('todo')})
            <button onClick={() => handleAddTask('todo')} className="flex items-center space-x-1 text-sm text-slate-500 hover:text-indigo-500 transition-colors">
              <FiPlus />
              <span>Add new task</span>
            </button>
          </h2>
          <div className="space-y-4">
            {filteredTasks.filter(task => task.status === 'todo').map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>
      )}

      {(filterStatus === 'all' || filterStatus === 'inprogress') && (
        <div className="flex-1 w-[320px] min-w-[320px] space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            In progress ({getCountByStatus('inprogress')})
            <button onClick={() => handleAddTask('inprogress')} className="flex items-center space-x-1 text-sm text-slate-500 hover:text-indigo-500 transition-colors">
              <FiPlus />
              <span>Add new task</span>
            </button>
          </h2>
          <div className="space-y-4">
            {filteredTasks.filter(task => task.status === 'inprogress').map(task => <TaskCard key={task.id} task={task} />)}
          </div>
        </div>
      )}

      {(filterStatus === 'all' || filterStatus === 'done') && (
        <div className="flex-1 w-[320px] min-w-[320px] space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            Done ({getCountByStatus('done')})
            <button onClick={() => handleAddTask('done')} className="flex items-center space-x-1 text-sm text-slate-500 hover:text-indigo-500 transition-colors">
              <FiPlus />
              <span>Add new task</span>
            </button>
          </h2>
          <div className="space-y-4">
            {filteredTasks.filter(task => task.status === 'done').map(task => <TaskCard key={task.id} task={task} />)}
          </div>
          <DragBox />
        </div>
      )}
    </div>
  );
}