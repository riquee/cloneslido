import React from 'react';
import User from '../components/User';
import ListTasks from '../components/ListTasks';
const Home = () => {
  return (
    <>
      <h2>Faça sua pergunta</h2>
      <User />
      <ListTasks />
    </>
  );
};

export default Home;
