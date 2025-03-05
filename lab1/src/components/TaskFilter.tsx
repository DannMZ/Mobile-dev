import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const TaskFilter: React.FC = () => {
  const { tasks, theme, toggleTheme } = useContext(AppContext)!;
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={toggleTheme}>Toggle Theme ({theme})</button>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskFilter;