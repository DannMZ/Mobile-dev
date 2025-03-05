import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
import TaskList  from '../components/TaskList';
import '../styles/TaskFilter.css'; 

const TaskFilter: React.FC = () => {
  const { tasks, theme, toggleTheme } = useContext(AppContext)!;
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <div className="task-filter">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={toggleTheme}>Toggle Theme ({theme})</button>
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default TaskFilter;