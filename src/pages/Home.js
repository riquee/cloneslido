import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import User from '../components/User';
import ListTasks from '../components/ListTasks';
import Button from '../components/Button';

const Home = () => {
  const {
    state,
    state: { sorted },
    setState,
  } = useContext(GlobalContext);
  return (
    <>
      <h2>Faça sua pergunta</h2>
      <User />
      <Button disabled={ !sorted } name='Ordenar por chegada' callback={() => setState({ ...state, sorted: false })} />
      <Button disabled={ sorted } name='Ordenar por likes' callback={() => setState({ ...state, sorted: true })} />
      <ListTasks />
    </>
  );
};

export default Home;
