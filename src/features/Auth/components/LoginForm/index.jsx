import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from 'components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, Typography, makeStyles, Grid, LinearProgress } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(1),
    },
    avatar: {
        margin: '8px auto',
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
    },
    progress: {
        position: 'absolute',
        top: -theme.spacing(1),
        left: 0,
        right: 0

    }
}))

LoginForm.propTypes = {
    onSubmit: PropTypes.func
};

function LoginForm(props) {
    const classes = useStyles()

    const schema = yup.object({
        identifier: yup.string().required('Please enter your email!')
            .email('Please enter a valid email address!'),
        password: yup.string().required('Please enter your your password!')
    }).required();

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        } else {
            console.log('Chua truyen phuong thuc on submit xu ly form!')
        }
    }

    const { isSubmitting } = form.formState

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component='h3' variant='h5'>
                Sign in
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField form={form} name='identifier' label='Email' />
                <PasswordField form={form} name='password' label='Password' />
                <Button disabled={isSubmitting} size="large" type='submib' variant='contained' color='primary' className={classes.submit} fullWidth>
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;