import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import TaskFilter from './components/TaskFilter';
import './styles/App.css'; // Підключення CSS

const App: React.FC = () => {
  const { tasks, addTask, theme } = useContext(AppContext)!;
  const [newTaskText, setNewTaskText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null); // Посилання на інпут
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      addTask(newTaskText);
      setNewTaskText('');
      setError(''); // Очищення помилки
    } else {
      setError('Task cannot be empty!'); // Встановлення повідомлення про помилку
    }
  };

  // Обробник події натискання клавіші
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { // Перевірка, чи натиснута клавіша Enter
      handleAddTask();
    }
  };
  // Фокусування на інпуті після оновлення DOM
  useEffect(() => {
    console.log('useEffect triggered. inputRef:', inputRef.current);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tasks]); // Залежність від tasks, щоб фокусувати після додавання завдання

  return (
    <div className={`app ${theme}`}>
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task"
          ref={inputRef} // Прив'язка посилання до інпута
          
        />
        <button onClick={handleAddTask}>Add Task</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <TaskFilter />
    </div>
  );
};

export default App;