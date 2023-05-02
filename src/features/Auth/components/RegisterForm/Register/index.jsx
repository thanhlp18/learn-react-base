import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import { SnackbarProvider, useSnackbar } from 'notistack';

Register.propTypes = {};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();


    const handleSubmit = async (values) => {
        console.log('Form Submit:', values)
        try {
            values.username = values.email;
            console.log(values)
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // close diaglog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            // Todo something when register successful
            console.log('New user: ', user);
            enqueueSnackbar('This is a success message!', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            // console.log('Failt to register: ', error.message)
        }
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;