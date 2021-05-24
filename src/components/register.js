import React, { useState } from 'react'
import '../styles/login.css'

function RegisterForm(props) {
    const initialValues = {
        username: "",
        password: "",
        confirmPassword: "",
        role: ""
    }
    const [form, setForm] = useState(initialValues);

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        console.log(form);
    }

    return (
        <div id="form-register" className="form form-register">
            <h1>Register Form</h1>
            <label id="label-username" htmlFor="username">Username
                <input id="username" name="username" type="text" 
                    onChange={handleChange} value={form.username}/>
            </label>
            <label id="label-password" htmlFor="password">Password
                <input id="password" name="password" type="password"
                    onChange={handleChange} value={form.password} />
            </label>
            <label id="label-confirm-password" htmlFor="confirmPassword">Password
                <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange} 
                value={form.confirmPassword} />
            </label>
            <label id="label-role" htmlFor="role" onChange={handleChange} 
                value={form.role} >Role
                <select id="role" name="role">
                <option value="">Select Role</option>
                <option value="client">Client</option>
                <option value="instructor">Instructor</option>
                </select>
            </label>
            {props.children}
        </div>
    )
}

export {
    RegisterForm
}
