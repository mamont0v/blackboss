import React from 'react';
// import { useHistory } from 'react-router-dom';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    //Изменение всей формы очистка и превент дефолт
    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            email: '', password: ''
        })
    }

    handleName = event => {
        //чтобы не писать event.target.value и event.target.name
        const { value, name } = event.target;
        //[name] будет сам выбираться если name='password' будет passsword если email то так же мыло.

        this.setState({ [name]: value })
    }




    render() {
        return (
            <div className='sign-in'>
                <h2>У меня уже есть аккаунт</h2>
                <span>Войдите с помощью вашей почты и пароля</span>

                <form>
                    <input
                        name='email'
                        value={this.state.email}
                        onChange={this.handleName}
                        required

                    />
                    <label>E-mail</label>
                    <input
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleName}
                        required
                    />
                    <label>Пароль</label>
                    <div className='buttons-sign'>
                        <CustomButton
                            type='submit'
                        >
                            Войти
                    </CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Войти через Google
                    </CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;