import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = (formState.touched[name] && errors[name]) || errors[name];
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        return setShowPassword(x => !x)
    }
    return (
        <FormControl error={!!hasError} fullWidth margin='normal' variant="outlined">
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                label={label}
                as={OutlinedInput}

                id={name}
                disabled={disabled}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }


            />

            <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;