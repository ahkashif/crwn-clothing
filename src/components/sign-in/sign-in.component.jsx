import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle }  from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already Have an account</h2>
        <span className=''>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' label='Email' value={this.state.email} handleChange={this.handleChange} required />
          <FormInput name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange} required />
            <div className='buttons'>
              <CustomButton type='submit' value='submit form'>Sign in</CustomButton>
              <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in With Google</CustomButton>
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn;