// context/TaskContext.js
"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import InitialTasks from "./DefaultTasks.jsx";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  // get value to be store in local Storage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks(InitialTasks);
    }
  }, []);

  // set value to store in local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // to add a task
  const addTask = (title, status) => {
    const newTask = {
      id: uuidv4(),
      title,
      description: "New task added.",
      status,
      progress: 0,
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      assignees: ["https://i.pravatar.cc/150?u=" + uuidv4()],
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // to update task
  const updateTaskStatus = (id, newStatus, newProgress) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: newStatus,
              progress: newProgress || task.progress,
            }
          : task
      )
    );
  };

  // to delete task
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  // to edit task
  const editTask = (id, newTitle, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filterStatus,
        setFilterStatus,
        addTask,
        updateTaskStatus,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
