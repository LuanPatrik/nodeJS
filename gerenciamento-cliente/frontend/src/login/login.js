import React, { useState } from "react";
import Register from './register.js'

function Login() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }; 

    const handleSubmit = (values) => {
        console.log(values);
    }

    return(
        <div>
            <label>Email</label>
            <input type="email" name='email' onChange={handleChangeValues}/>
            <label>Senha</label>
            <input type="password" name='senha' onChange={handleChangeValues}/>
            <button type='submit' onClick={handleSubmit}>Entrar</button>
            <a onClick={Register}>Criar Conta</a>
        </div>
    );
}

export default Login;