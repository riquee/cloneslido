import React, { useContext } from 'react';
import { GlobalContext } from '../App';

const Answered = () => {
  const {
    state: { answered },
  } = useContext(GlobalContext);

  const listAnswered = answered.map(({ question, nameUser }, idx) => (
    <div key={`${nameUser} - answer - ${idx}`}>
      <h2>{nameUser}</h2>
      <p>{question}</p>
    </div>
  ));

  return (
    <div>
      <h2>Perguntas respondidas</h2>
      {listAnswered}
    </div>
  );
};

export default Answered;
