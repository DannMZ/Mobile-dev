import React, { createContext, useState, useMemo, ReactNode } from 'react';

// Типи для завдань
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Типи для контексту
interface AppContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Створення контексту
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Провайдер контексту
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Додавання завдання
  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Перемикання стану завдання (виконано/не виконано)
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Видалення завдання
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Перемикання теми
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Мемоізація значень контексту
  const value = useMemo(() => ({ tasks, addTask, toggleTask, deleteTask, theme, toggleTheme }), [tasks, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};