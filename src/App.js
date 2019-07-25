import React, { useState } from 'react';
import Todo from './components/Todo';
import Auth from './components/Auth';
import Header from './components/Header';
import AuthContext from './auth-context';
import './App.css';

const App = () => {
    const [state, setState] = useState({list: false, auth: true});
    const [authStatus, setAuthStatus] = useState(false);

    console.log(AuthContext);

    const login = () => {
        setAuthStatus(!authStatus);
    }
    
    return (
        <div className="App">
            <AuthContext.Provider value={{ status: authStatus, login }}>
                <h1>Another todo App!</h1>
                <Header 
                    onLoadAuth={() => setState({list: false, auth: true})} 
                    onLoadTodos={() => setState({list: true, auth: false})}
                    />
                <hr />
                {state.list && <Todo />}
                {state.auth && <Auth />}
            </AuthContext.Provider>
        </div>
    );
}

export default App;
