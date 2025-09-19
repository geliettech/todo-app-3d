// context/TaskContext.js
"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

// Updated initialTasks with progress values on a 0-10 scale
const initialTasks = [
    { id: uuidv4(), title: 'Design new ui presentation', description: 'Dribbble marketing', status: 'todo', progress: 7, date: '26 Aug 2022', assignees: ['https://i.pravatar.cc/150?u=a', 'https://i.pravatar.cc/150?u=b'] },
    { id: uuidv4(), title: 'Add more ui/ux mockups', description: 'Pinterest promotion', status: 'todo', progress: 4, date: '25 Aug 2022', assignees: ['https://i.pravatar.cc/150?u=c'], has3D: true },
    { id: uuidv4(), title: 'Design few mobile screens', description: 'Dropbox mobile app', status: 'todo', progress: 3, date: '26 Aug 2022', assignees: ['https://i.pravatar.cc/150?u=d', 'https://i.pravatar.cc/150?u=e'] },
    { id: uuidv4(), title: 'Create a tweet and promote', description: 'Twitter marketing', status: 'todo', progress: 1, date: '27 Aug 2022', assignees: ['https://i.pravatar.cc/150?u=f', 'https://i.pravatar.cc/150?u=g'] },
    { id: uuidv4(), title: 'Design system update', description: 'Oreo website project', status: 'inprogress', progress: 3, date: '12 Nov 2022', assignees: ['https://i.pravatar.cc/150?u=h', 'https://i.pravatar.cc/150?u=i'] },
    { id: uuidv4(), title: 'Create brand guideline', description: 'Oreo branding project', status: 'inprogress', progress: 7, date: '13 Nov 2022', assignees: ['https://i.pravatar.cc/150?u=j', 'https://i.pravatar.cc/150?u=k'] },
    { id: uuidv4(), title: 'Create wireframe for ios app', description: 'Oreo ios app project', status: 'inprogress', progress: 4, date: '14 Nov 2022', assignees: ['https://i.pravatar.cc/150?u=l', 'https://i.pravatar.cc/150?u=m'] },
    { id: uuidv4(), title: 'Create ui kit for layout', description: 'Crypto mobile app', status: 'inprogress', progress: 3, date: '15 Nov 2022', assignees: ['https://i.pravatar.cc/150?u=n', 'https://i.pravatar.cc/150?u=o'] },
    { id: uuidv4(), title: 'Add product to the market', description: 'Ulll marketplace', status: 'done', progress: 10, date: '6 Jan 2022', assignees: ['https://i.pravatar.cc/150?u=p'] },
    { id: uuidv4(), title: 'Launch product promotion', description: 'Kickstarter campaign', status: 'done', progress: 10, date: '7 Jan 2022', assignees: ['https://i.pravatar.cc/150?u=q', 'https://i.pravatar.cc/150?u=r'] },
    { id: uuidv4(), title: 'Make twitter banner', description: 'Twitter marketing', status: 'done', progress: 10, date: '8 Jan 2022', assignees: ['https://i.pravatar.cc/150?u=s', 'https://i.pravatar.cc/150?u=t'] },
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks(initialTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, status) => {
    const newTask = {
      id: uuidv4(),
      title,
      description: 'New task added.',
      status,
      progress: 0,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      assignees: ['https://i.pravatar.cc/150?u=' + uuidv4()],
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateTaskStatus = (id, newStatus, newProgress) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus, progress: newProgress || task.progress } : task
    ));
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }
  };

  const editTask = (id, newTitle, newDescription) => {
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === id ? { ...task, title: newTitle, description: newDescription } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, filterStatus, setFilterStatus, addTask, updateTaskStatus, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);