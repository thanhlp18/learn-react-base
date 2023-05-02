import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/userSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Login.propTypes = {};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();


    const handleSubmit = async (values) => {
        console.log('Form Submit:', values)
        try {
            values.username = values.email;
            console.log(values)
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // close diaglog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            // console.log('Failt to Login: ', error.message)
        }
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;