import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool
};

function InputField(props) {
    const { form, name, label, disabled, required, as, type } = props;
    const { errors, formState } = form;
    const hasError = formState.touched[name] && errors[name]
    return (
        <Controller
            name={name}
            control={form.control}
            as={as}

            fullWidth
            label={label}
            disabled={disabled}
            required={required}
            type={type}

            error={!!hasError}
            helperText={errors[name]?.message}
        />

    );
}

export default InputField;