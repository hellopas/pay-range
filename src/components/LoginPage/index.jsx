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

  /**
   * Shows error if email is are not properly formatted or password is missing.
   * If email and pass is good, attempts to log in user.
   */
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

  /**
   * Runs through checks to make sure email address valid.
   *
   * @param {String} email
   */
  isEmailValid = (email) => {
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
  }

  /**
   * Checks if password has been entered.
   *
   * @param {String} password
   */
  isPasswordValid = (password) => {
    if ( password === '' ) {
        return false;
    } 

    return true;
  }

  /**
   * Uses the Login context to log user in. Using async to wait here
   * because we are mocking the process with a setTimeout in the Login context.
   */
  loginUser = async () => {
    const { loginUser } = this.context;
    await loginUser(this.state.email);
  }

  /**
   * Event listener for the password input field. Fires the tryLoginUser
   * function when Enter is hit after typing in password.
   *
   * @param {Obj} evt
   */
  keyPressed = (evt) => {
    if (evt.key === "Enter") {
        this.tryLoginUser();
    }
  }

  /**
   * Renders login page. This is what the user sees when logged out.
   */
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
