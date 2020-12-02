import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const {email, password} = userCredentials;


    const handleClick = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }


    const handleName = async event => {
        const { value, name } = event.target;

       setCredentials({...userCredentials, [name]: value })
    }



    return (
        <div className='sign-in'>
            <h2>У меня уже есть аккаунт</h2>
            <span>Войдите с помощью вашей почты и пароля</span>

            <form onSubmit={handleClick}>
                <input
                    name='email'
                    value={email}
                    onChange={handleName}
                    required

                />
                <label>E-mail</label>
                <input
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleName}
                    required
                />
                <label>Пароль</label>
                <div className='buttons-sign'>
                    <CustomButton type='submit'>
                        Войти
                        </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn>
                        Google
                         </CustomButton>
                </div>
            </form>

        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))

})

export default connect(null, mapDispatchToProps)(SignIn);