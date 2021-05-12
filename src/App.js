import React, { useState, createContext } from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Answered from './pages/Answered'
import NavBar from './components/NavBar'

import './App.css';

const INITIAL_STATE = {
  tasks: [],
  answered: [],
};

export const GlobalContext = createContext();

function App() {
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <header className="App-header">
        <h1>Slido</h1>
      </header>
      <NavBar />
      <Switch>
        <Route path='/respondidas' component={ Answered }/>
        <Route path='/' component={ Home }/>
      </Switch>
    </GlobalContext.Provider>
  );
}

export default App;
