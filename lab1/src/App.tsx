import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";

// Опис структури контексту
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  setFilter: (filter: string) => void;
}

// Створення контексту з початковим значенням `null`
export const TaskContext = createContext<TaskContextType | null>(null);

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState<string>("all");

  // Збереження у LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text, completed: false }]);
  }, []);

  const toggleTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });
  }, [tasks, filter]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, setFilter }}>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList tasks={filteredTasks} />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
