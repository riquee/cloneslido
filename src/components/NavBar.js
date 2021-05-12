import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="App-link">
            <Link to='/'>Home</Link>
            <Link to='/respondidas'>Respostas</Link>
        </nav>
    );
};

export default NavBar;