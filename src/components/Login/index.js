import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../../API';

import Button from '../Button';

//styles
import { Wrapper} from  './Login.styles';
 
import { Context } from '../../context';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();


    const handleLogin = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };
    const handleSubmit = async ()=> {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );
            console.log(sessionId);

            setUser({ sessionId: sessionId.session_id, username})

            navigate('/');
        } catch(error){
            setError(true);

        }
    };
    return (
        <Wrapper>
            { error && <div className='error'> There was a Login Error</div>}
            <label>Username:</label>
            <input 
                type='text'
                value={username}
                name='username'
                onChange={handleLogin}
            />

            <label>Password:</label>
            <input 
                type='text'
                value={password}
                name='password'
                onChange={handleLogin}
            />
            <Button text='Login' callback={handleSubmit}/>
        </Wrapper>
    )
}

export default Login;