import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import Button from './Button';

const Task = ({ task }) => {
  const {
    state,
    state: { tasks, answered },
    setState,
  } = useContext(GlobalContext);

  const setLike = () => {
    const update = tasks.map((_task) => {
      if (_task.question === task.question) return { ..._task, likes: _task.likes + 1 };
      return _task;
    });
    setState({ ...state, tasks: update });
  };

  const updateAnswer = () => {
    const update = tasks.filter((_task) => _task.question !== task.question);
    setState({ ...state, answered: [...answered, task], tasks: update });
  };

  const { nameUser, question, likes } = task;
  return (
    <div className="task">
      <h3>{nameUser}</h3>
      <p>{question}</p>
      <p onClick={setLike}>{`Likes: ${likes}`}</p>
      <Button name="Respondida" callback={ updateAnswer }/>
    </div>
  );
};

export default Task;
