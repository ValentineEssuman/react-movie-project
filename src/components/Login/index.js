import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../../API';

import Button from '../Button';

//styles
import { Wrapper} from  './Login.styles';

import { Context } from '../../context';


const Login = () => {

    const handleLogin = e => {};
    const handleSubmit =()=> {};
    return (
        <Wrapper>
            <label>Username:</label>
            <input 
                type='text'
                value="state value"
                onChange={handleLogin}
            />

            <label>Password:</label>
            <input 
                type='text'
                value="state value"
                onChange={handleLogin}
            />
            <Button text='Login' callback={handleSubmit}/>
        </Wrapper>
    )
}

export default Login;