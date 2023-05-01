import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = (formState.touched[name] && errors[name]) || errors[name];
    return (
        <Controller
            form={form}
            name={name}
            control={form.control}

            label={label}
            disabled={disabled}
            as={TextField}
            fullWidth
            variant='outlined'
            margin='normal'
            error={!!hasError}
            helperText={errors[name]?.message}
        >

        </Controller>
    );
}

export default InputField;