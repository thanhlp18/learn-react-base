import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { TextField } from '@material-ui/core';



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    // Dinh nghia thang schema
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title!'),
    });

    // Chen thang resolver vao useForm va su dung thang schema
    const form = useForm({
        defaultValues: {
            title: ''
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField required name="title" label="Todo" form={form} as={TextField} />
        </form>
    );
}

export default TodoForm;