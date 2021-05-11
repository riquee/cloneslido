import React, { useState, useContext} from 'react';
import { GlobalContext } from '../App';

const INITIAL_STATE = {
  nameUser: '',
  question: '',
  likes: 0,
};

const User = () => {
  const { state, state: { tasks }, setState } = useContext(GlobalContext);
  const [user, setUser] = useState(INITIAL_STATE);
  const { question, nameUser} = user;

  const handle = ({ target: { name, value } }) => {
    setUser({...user, [name]: value });
  };

  const submitTask = () => {
    setState({...state, tasks: [...tasks, user] });
    setUser(INITIAL_STATE);
  }
  return (
    <div>
      <label htmlFor="question">
        Pergunta:
        <input type="text" name="question" value={ question } onChange={ handle } />
      </label>
      <label htmlFor="nameUser">
        Nome:
        <input type="text" name="nameUser" value={ nameUser } onChange={ handle } />
      </label>
      <button type='button' onClick={ submitTask }>Enviar</button>
    </div>
  );
};

export default User;
