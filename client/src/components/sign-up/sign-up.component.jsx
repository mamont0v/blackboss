import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.action'
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    //prevent submitting
    const handleSubmit = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return;
        }

        signUpStart({ displayName, email, password })
    }


    const handleChange = async event => {
        const { name, value } = event.target
        setCredentials({
            ...userCredentials, [name]: value
        })
    }

    return (
        <div className='sign-up'>
            <h2>У меня нет учетной записи</h2>
            <span>Зарегистрироваться по Email</span>
            <form className='sign-up-form' onClick={handleSubmit}>
                <input
                    placeholder="Name"
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                ></input>
                <input
                    placeholder="E-mail"
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Display Name'
                    required
                ></input>
                <input
                    placeholder="Password"
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                ></input>
                <input
                    placeholder="Confirm password"
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm password'
                    required
                ></input>
                <CustomButton type='submit'>Зарегистрироваться</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)