import React, { useContext } from 'react';
import AuthContext from '../auth-context';

const Auth = () => {
    const auth = useContext(AuthContext);
    // console.log('auth :', auth);
    return (
        <div>
            <h1>Auth Page</h1>
            <h2>Auth status from context: {auth.status.toString()}</h2>
            <button onClick={auth.login}>Log-in!</button>
        </div>
    )
}

export default Auth;
