import React, { useContext, useState } from 'react';
import { AppContext } from './context/AppContext';
import TaskList from './components/TaskList';
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
}

export default App;
  // 1. Створіть головний компонент App, який використовує Context для зберігання списку
  // завдань та налаштувань (наприклад, тема додатку).
  // 2. Реалізуйте можливість додавання, редагування, відмітки виконаних завдань і
  // видалення завдань.
  // 3. Використовуйте useState для управління локальним станом кожного компоненту
  // (наприклад, для форми введення завдання).
  // 4. Застосуйте useEffect для синхронізації стану із локальним сховищем (localStorage) або
  // для логування змін.
  // 5. Розбийте інтерфейс на окремі компоненти, наприклад, TaskList, TaskItem та TaskFilter
  // (для фільтрації завдань: всі, активні, виконані).
  // 6. Використовуйте useCallback для мемоізації обробників подій, що допоможе запобігти
  // зайвим перерендеруванням.
  // 7. Застосуйте useMemo для обчислення відфільтрованого списку завдань або підрахунку
  // завдань, що залишилися.
  // 8. Застосуйте useRef для зберігання посилань на елементи (наприклад, інпут для
  // додавання завдання) та для фокусування після додавання нового завдання.
  // Додаткові вимоги:
  // • Використовуйте деструктуризацію пропсів і встановлюйте значення за замовчуванням для
  // компонентів (див. «Default property values»).
  // • Під час реалізації фільтрації завдань зверніть увагу на унікальний key для кожного
  // елементу при використанні методу map (див. «Mapping collections to elements»).
