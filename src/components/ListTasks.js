import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import Task from './Task';

const ListTasks = () => {
  const {
    state: { tasks },
  } = useContext(GlobalContext);
  return tasks
    .sort((a, b) => b.likes - a.likes)
    .map((task, idx) => {
      return <Task key={`${task.nameUser} - ${idx}`} task={task} />;
    });
};

export default ListTasks;
