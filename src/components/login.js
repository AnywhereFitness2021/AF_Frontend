import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/login.css'
import * as yup from 'yup'
import { loginSchema as schema } from '../schema/loginSchema'

function LoginForm(props) {
    const initialValues = {
        username: "",
        password: "",
    }
    const [disabled, setDisabled] = useState(true);
    const [form, setForm] = useState(initialValues);
    const [shaped, setShaped] = useState({});
    let history = useHistory();

    const checkSchema = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => {
                setShaped({...shaped, [name]: ''});
            }).catch((err) => {
                if (err.errors) { 
                    setShaped({...shaped, [name]: err.errors[0]});
                }
        });
 
        schema.isValid(form)
            .then((valid) => {
                setDisabled(!valid);
                console.log(form)
                console.log(!valid); 
            });
    }

    const goRegister = () => {
        history.push("/");
    }

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        checkSchema(name, updateData);
    }

    return (
        <div id="form-login" className="form form-login">
            <h1>Login Form</h1>
            <div id="error-login" className="error error-login" >
                {shaped.username}</div>
            <div id="error-username" className="error error-username" ></div>
            <label id="label-username" htmlFor="username">Username
                <input id="username" name="username" type="text" 
                    onChange={handleChange} value={form.username} />
            </label>
            <div id="error-password" className="error error-password" >
                {shaped.password}
            </div>
            <label id="label-password" htmlFor="password">Password
                <input id="password" name="password" type="password"
                onChange={handleChange} value={form.password} />
            </label>
            <button id="button-login" className="btn btn-login" 
                disabled={disabled} >Login</button>
            <button id="button-nav-register" className="btn btn-nav btn-nav-register" onClick={goRegister}>Register</button>
            {props.children}
        </div>
    )
}

export default LoginForm;
