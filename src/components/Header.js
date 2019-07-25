import React, { useContext } from 'react';
import AuthContext from '../auth-context';
import './Header.css';

const Header = ({ onLoadTodos, onLoadAuth }) => {
    const auth = useContext(AuthContext);

    return (
        <header className="Header">
            <button disabled={!auth.status} onClick={onLoadTodos}>Todo List</button>
            <button onClick={onLoadAuth}>Auth</button>            
        </header>
    )
}

export default Header;
