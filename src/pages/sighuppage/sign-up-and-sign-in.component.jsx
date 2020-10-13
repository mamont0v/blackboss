import React from 'react';
import './sign-up-and-sign-in.component.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component';

const SignUpAndSignIn = () => (
    <div className='sign-up-sign-in'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignUpAndSignIn;