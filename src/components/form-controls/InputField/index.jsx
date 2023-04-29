import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { propagateErrors } from 'yup/lib/util/runValidations';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: propagateErrors.string
};

function InputField(props) {
    return (
        <div>
            <TextField fullWidth />
        </div>
    );
}
fasdfa

export default InputField;