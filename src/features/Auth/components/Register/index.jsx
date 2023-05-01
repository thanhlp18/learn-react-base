import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice'
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {};

function Register(props) {
    const dispatch = useDispatch();


    const handleSubmit = async (values) => {
        console.log('Form Submit:', values)
        try {
            values.username = values.email;
            console.log(values)
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('New user: ', user);
        } catch (error) {
            console.log('Failt to register: ', error)
        }
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;