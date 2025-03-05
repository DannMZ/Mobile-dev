import React, { useContext, useState } from 'react';
import { AppContext } from './context/AppContext';
import TaskFilter from './components/TaskFilter';

const App: React.FC = () => {
  const { addTask, theme } = useContext(AppContext)!;
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      addTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskFilter />
    </div>
  );
};

export default App;