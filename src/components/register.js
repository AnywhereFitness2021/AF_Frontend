import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/login.css'
import * as yup from 'yup'
import { schema } from '../schema/loginSchema'
import axios from 'axios'
import { connect } from 'react-redux';
import { createUser } from '../actions/Actions';

function RegisterForm(props) {
    const initialValues = {
        username: "",
        password: "",
        confirmPassword: "",
        role: "",
    }
    const [disabled, setDisabled] = useState(true);
    const [form, setForm] = useState(initialValues);
    const [shaped, setShaped] = useState({});
    let history = useHistory();

    const postNewUsers = (user) => {
        axios
          .post('https://anywhere-fitness-2021.herokuapp.com/api/users/register', user)
          .then((res) => {
            console.log(res.data);
            history.push('/login');
          })
          .catch((err) => {
            console.log({err});
          });
    };

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
            .then((valid) => setDisabled(!valid));
    }

    const gotoLogin = () => {
        history.push("/login");
    }

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        checkSchema(name, updateData);
    }

    const handleSubmit = () => {
        postNewUsers(form)
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
                value={form.role}>Role
                <select id="role" name="role">
                <option value="">Select Role</option>
                <option value="client">Client</option>
                <option value="instructor">Instructor</option>
                </select>
            </label>
            <button id="button-register" className="btn btn-register"
                disabled={disabled} onClick={handleSubmit}>Register</button>
            <button id="button-nav-login" className="btn nav-btn nav-login"
                onClick={gotoLogin} >Login</button>
            {props.children}
        </div>
    )
}

export default connect(null, { createUser })(RegisterForm);
