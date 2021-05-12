import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../App';
import Task from './Task';

const ListTasks = () => {
  const {
    state: { tasks, sorted },
  } = useContext(GlobalContext);

  const list = tasks.sort((a, b) => (sorted ? b.likes - a.likes : a.id - b.id));

  return list.map((task, idx) => {
    return <Task key={`${task.nameUser} - ${idx}`} task={task} />;
  });
};

export default ListTasks;
