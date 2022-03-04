import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './sign-up.styles.scss';

class SignUp extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      email: '', password: '', displayName: '',confirmPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
        console.log(user.user);
        await createUserProfileDocument(user.user, { displayName });
        this.state = {
          displayName: '', email: '', password: '',confirmPassword: '',
        }
      })
      // const { user } = await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({ 
      [name]: value
    })
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2>I do nat have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
            required
          />
          <FormInput 
            type='text'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
            required
          />
          <FormInput 
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
            required
          />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form> 
      </div>
    )
  }
}

export default SignUp;