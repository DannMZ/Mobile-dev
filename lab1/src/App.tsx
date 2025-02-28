import { createContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './App.css';

// 1. Створено контекст для зберігання списку завдань та теми додатку
const TaskContext = createContext(null);

function App() {
//  const [tasks, setTasks] = useState(() => {
//    const savedTasks = localStorage.getItem('tasks');
//    return savedTasks ? JSON.parse(savedTasks) : [];
//  });
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const [tasks, setTasks] = useState<Task[]>(() => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
});


// 5. Окремий компонент TaskList для відображення списку завдань
const TaskList = ({ tasks:any }) => {
  return (
    <ul>
      {tasks.map(task => <TaskItem key={task.id} task={task} />)}
    </ul>
  );
};

  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null);

  // 4. Синхронізація стану з localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text:string) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    if (inputRef.current) inputRef.current = null;
  }, []);

  const toggleTask = useCallback((id:number) => {
    setTasks((prev) => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }, []);

  const deleteTask = useCallback((id:number) => {
    setTasks((prev) => prev.filter(task => task.id !== id));
  }, []);

  const filteredTasks = useMemo(() => {
    return filter === 'all' ? tasks : tasks.filter(task => filter === 'active' ? !task.completed : task.completed);
  }, [tasks, filter]);
  
  const TaskContext = createContext<TaskContextType | null>(null);

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, filter, setFilter, theme, setTheme }}>
      <div className={theme}>
        <h1>Task Manager</h1>
        <TaskInput ref={inputRef} />
        <TaskFilter />
        <TaskList tasks={filteredTasks} />
      </div>
    </TaskContext.Provider>
  );
}

// 5. Окремий компонент TaskInput для додавання завдань
const TaskInput = ({}, ref) => {
  const { addTask } = useContext(TaskContext);
  return (
    <input ref={ref} type="text" placeholder="Add task" onKeyDown={(e) => e.key === 'Enter' && addTask(e.target.value)} />
  );
};


// 5. Окремий компонент TaskItem для роботи з окремими завданнями
const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useContext(TaskContext);
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

// 5. Окремий компонент TaskFilter для фільтрації завдань
const TaskFilter = () => {
  const { filter, setFilter } = useContext(TaskContext);
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};

export default App;
