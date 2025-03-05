import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
    completedAt?: string;
  }[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const { toggleTask, deleteTask, editTask } = useContext(AppContext)!;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;