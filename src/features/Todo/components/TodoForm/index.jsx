import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from 'components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object({
        todo: yup.string().required('Please enter your todo!'),
    }).required();

    const form = useForm({
        defaultValues: {
            todo: ''
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="todo" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;