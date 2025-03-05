import React from 'react';
import { Task } from '../context/AppContext';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[]; // Описуємо пропс tasks
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;