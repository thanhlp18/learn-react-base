import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from 'features/Register/components/RegisterForm';

RegisterPage.propTypes = {

};

function RegisterPage(props) {
    return (
        <div>
            <h3>Register</h3>
            <p>Register an account to explore the world!</p>
            <div>
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;