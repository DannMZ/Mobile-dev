import React, { createContext, useState,useEffect, useMemo, ReactNode } from 'react';

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
    editTask: (id: number, newText: string) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }
  
  // Створення контексту
  export const AppContext = createContext<AppContextType | undefined>(undefined);
  
// Провайдер контексту
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
      });
    
      const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? (savedTheme as 'light' | 'dark') : 'light';
      });
    
      // Збереження стану в localStorage
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
    
      useEffect(() => {
        localStorage.setItem('theme', theme);
      }, [theme]);


  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: number, newText: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ tasks, addTask, toggleTask, deleteTask, editTask, theme, toggleTheme }), [tasks, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
