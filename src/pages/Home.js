import React from 'react';
import User from '../components/User';
import ListTasks from '../components/ListTasks';
const Home = () => {
  return (
    <main className="Home">
      <h2>Faça sua pergunta</h2>
      <User />
      <ListTasks />
    </main>
  );
};

export default Home;
