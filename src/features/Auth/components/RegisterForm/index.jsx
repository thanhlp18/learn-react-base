import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from 'components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, Typography, makeStyles, Grid } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(1),
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(1, 0, 4, 0)
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 0)
    },
    fixedSpacing: {
        marginTop: '-16px '
    }
}))

RegisterForm.propTypes = {
    onSubmit: PropTypes.func
};

function RegisterForm(props) {
    const classes = useStyles()

    const schema = yup.object({
        firstName: yup.string().required('Please enter your first name!'),
        lastName: yup.string().required('Please enter your last name!'),
        email: yup.string().required('Please enter your email!')
            .email('Please enter a valid email address!'),
        password: yup.string().required('Please enter your your password!')
            .min(6, 'Please enter at least 6 charaters'),
        confirmationPassword: yup.string().required('Please enter the confirmation password!')
            .oneOf([yup.ref('password')], 'Please enter the same password!'),


    }).required();

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmationPassword: '',
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        } else {
            console.log('Chua truyen phuong thuc on submit xu ly form!')
        }
    }

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component='h3' variant='h5'>
                Create a new account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Grid container spacing={2}>
                    <Grid className={classes.fixedSpacing} item xs={12} sm={6}>
                        <InputField form={form} name='firstName' label='First name' />
                    </Grid>
                    <Grid className={classes.fixedSpacing} item xs={12} sm={6}>
                        <InputField form={form} name='lastName' label='Last name' />
                    </Grid>
                </Grid>
                <InputField form={form} name='email' label='Email' />
                <PasswordField form={form} name='password' label='Password' />
                <PasswordField form={form} name='confirmationPassword' label='Confirmation password' />
                <Button size="large" type='submib' variant='contained' color='primary' className={classes.submit} fullWidth>
                    Create a new account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;