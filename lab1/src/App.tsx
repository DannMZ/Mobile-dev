import React, { useContext, useState,useRef } from 'react';
import { AppContext } from './context/AppContext';
import TaskFilter from './components/TaskFilter';

const App: React.FC = () => {
  const { addTask, theme } = useContext(AppContext)!;
  const [newTaskText, setNewTaskText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null); // Посилання на інпут

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      addTask(newTaskText);
      setNewTaskText('');
      inputRef.current?.focus(); // Фокусування на інпуті після додавання
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
          ref={inputRef} // Прив'язка посилання до інпута
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskFilter />
    </div>
  );
};

export default App;