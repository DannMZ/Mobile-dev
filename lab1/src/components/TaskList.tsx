import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const { tasks } = useContext(AppContext)!;

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;