import React, { useState } from 'react'
import '../styles/login.css'

function LoginForm(props) {
    const initialValues = {
        username: "",
        password: "",
    }
    const [form, setForm] = useState(initialValues);

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
    }

    return (
        <div id="form-login" className="form form-login">
            <h1>Login Form</h1>
            <label id="label-username" htmlFor="username">Username
                <input id="username" name="username" type="text" 
                    onChange={handleChange} value={form.username} />
            </label>
            <label id="label-password" htmlFor="password">Password
                <input id="password" name="password" type="text"
                onChange={handleChange} value={form.password} />
            </label>
            {props.children}
        </div>
    )
}

export {
    LoginForm
}
