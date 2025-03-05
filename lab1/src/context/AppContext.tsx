import React, { createContext, useState,useEffect,useCallback, useMemo, ReactNode } from 'react';

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

      const addTask = useCallback((text: string) => {
        setTasks(prevTasks => [...prevTasks, { id: Date.now(), text, completed: false }]);
      }, []);
      
      const toggleTask = useCallback((id: number) => {
        setTasks(prevTasks => prevTasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
        ));
      }, []);
      
      const deleteTask = useCallback((id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      }, []);
      
      const editTask = useCallback((id: number, newText: string) => {
        setTasks(prevTasks => prevTasks.map(task => 
          task.id === id ? { ...task, text: newText } : task
        ));
      }, []);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ tasks, addTask, toggleTask, deleteTask, editTask, theme, toggleTheme }), [tasks, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
