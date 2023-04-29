import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Pass } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import InputField from 'components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

RegisterForm.propTypes = {

};

function RegisterForm(props) {
    const schema = yup.object().shape({
        'first-name': yup.string().required('Please enter your first name!'),
        'last-name': yup.string().required('Please enter your last name!'),
        'account-id': yup.string().required('Please enter your last name!'),
        'password': yup.string().required('Please enter your last name!')
    });
    const registerForm = useForm({
        mode: 'onBlur',
        defaultValues: {
            'first-name': '',
            'last-name': '',
            'account-id': '',
            'password': ''
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = (values) => {
        console.log("FORM SUBMIT: ", values);
    }

    return (
        <form onSubmit={registerForm.handleSubmit(handleSubmit)}>
            <InputField form={registerForm} name="account-id" label="Mobile number or email address" as={TextField} type="text" />
            <InputField form={registerForm} name="first-name" label="First name" as={TextField} type="text" />
            <InputField form={registerForm} name="last-name" label="Last name" as={TextField} type="text" />
            <InputField form={registerForm} name="password" label="Password" as={TextField} type="password" />
            <button type='submit'>Create a new account</button>
        </form >
    );
}

export default RegisterForm;