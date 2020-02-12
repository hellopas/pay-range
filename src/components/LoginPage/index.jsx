/* Import 3rd party libraries */
import React, { Component } from 'react';

/* Import styles */
import './LoginPage.scss';


/* Import my components */
import Header from 'components/Header';
import RectButton from 'components/RectButton';
import { LoginContext } from 'context/LoginContext';


export default class LoginPage extends Component {
  
  state = {
    loading: false,
    email: '',
    password: '',
    emailError: false,
    passError: false,
  };


  componentDidMount() {

  }

  tryLoginUser = () => {
    let emailValid = this.isEmailValid(this.state.email);
    let passwordValid = this.isPasswordValid(this.state.password);

    if ( !emailValid ) {
        this.setState({
          emailError: true,
          passError: false
        });
    } else if ( !passwordValid ) {
        this.setState({
          emailError: false,
          passError: true
        });
    } else {
        this.setState({
          emailError: false, 
          passError: false,
          loading: true,
        }, () => {
          this.loginUser();
        });
    }

    
  }

  isEmailValid = (email) => {
    let indexOfAt = email.indexOf('@');
    let indexOfDot = email.indexOf('.');

    if ( email === '') {
        return false;
    }

    if( indexOfAt < 1 || indexOfDot < 3 ) {
        return false;
    }

    if ( indexOfAt > indexOfDot ) {
        return false;
    }

    if ( email.charAt(indexOfAt + 1) === '.' ) {
        return false;
    }

    if ( email.charAt(indexOfDot + 1) === '' ) {
        return false;
    }

    return true;
  }

  isPasswordValid = (password) => {
    if ( password === '' ) {
        return false;
    } 

    return true;
  }

  loginUser = async () => {
    const { loginUser } = this.context;
    await loginUser(this.state.email);
  }

  keyPressed = (evt) => {
    if (evt.key === "Enter") {
        this.tryLoginUser();
    }
  }


  render() {

    const { email, password, loading, emailError, passError } = this.state;

    return (
      <div className='loginpage'>
        <Header text='Welcome' />


          <div className='loginpage__form'>

            <div className='loginpage__form-header'>
               Login
            </div>

            <div className='loginpage__form-inputs'>
              <input className='loginpage__form-email' type='text' placeholder='Email' value={email} onChange={ (evt) => this.setState({email: evt.target.value})  } />
              {emailError && <div className='loginpage__form-email-error'>Please enter a valid email.</div>}
              <input className='loginpage__form-password' type='password' placeholder='Password' value={password} 
                onChange={ (evt) => this.setState({password: evt.target.value})} onKeyPress={this.keyPressed}/>
              {passError && <div className='loginpage__form-email-error'>Please enter a password.</div>}
            </div>

            <div className='loginpage__form-button'>
              <RectButton text='Login' loading={loading} cb={this.tryLoginUser} />
            </div>

          </div>


      </div>

    );
  }
}

LoginPage.contextType = LoginContext;
