import React, { useState } from "react";
import Axios from "axios"

function Register() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }; 

    const handleAddUser = () => {
        Axios.post("http://localhost:8800/",{
            nome: values.nome,
            email: values.email,
            senha: values.senha,
        })
        .then((response) => {
            console.log(response)
        })
    }

    return(
        <div className="conatiner">
            <label>Nome</label>
            <input type="text" name="nome" onChange={handleChangeValues}/>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChangeValues}/>
            <label>Senha</label>
            <input type="password" name="senha" onChange={handleChangeValues}/>
            <button onClick={handleAddUser}>Salvar</button>
        </div>
    )
}

export default Register;