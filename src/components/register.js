import React, { useState } from 'react'
import '../styles/login.css'
import * as yup from 'yup'
import { schema } from '../schema/loginSchema'

function RegisterForm(props) {
    const initialValues = {
        username: "",
        password: "",
        confirmPassword: "",
        role: ""
    }
    const [form, setForm] = useState(initialValues);
    const [shaped, setShaped] = useState({});

    const checkSchema = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => {
                setShaped({...shaped, [name]: ''});
            }).catch((err) => {
                if (err.errors) { 
                    setShaped({...shaped, [name]: err.errors[0]});
                }
        });
    }

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        checkSchema(name, updateData);
    }

    return (
        <div id="form-register" className="form form-register">
            <h1>Register Form</h1>
            <div id="error-register" className="error error-register" ></div>
            <div id="error-username" className="error error-username" >{shaped.username}</div>
            <label id="label-username" htmlFor="username">Username
                <input id="username" name="username" type="text" 
                    onChange={handleChange} value={form.username}/>
            </label>
            <div id="error-password" className="error error-password" >
                {shaped.password}</div>
            <label id="label-password" htmlFor="password">Password
                <input id="password" name="password" type="password"
                    onChange={handleChange} value={form.password} />
            </label>
            <div id="error-confirm-password" className="error error-confirm-password" >{shaped.confirmPassword}</div>
            <label id="label-confirm-password" htmlFor="confirmPassword">Confirm Password
                <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange} 
                value={form.confirmPassword} />
            </label>
            <div id="error-role" className="error error-role" >{shaped.role}</div>
            <label id="label-role" htmlFor="role" onChange={handleChange} 
                value={form.role} >Role
                <select id="role" name="role">
                <option value="">Select Role</option>
                <option value="client">Client</option>
                <option value="instructor">Instructor</option>
                </select>
            </label>
            <button id="button-register" className="btn btn-register">Register</button>
            {props.children}
        </div>
    )
}

export {
    RegisterForm
}
