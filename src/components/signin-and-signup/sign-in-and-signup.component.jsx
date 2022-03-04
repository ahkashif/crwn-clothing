import React from 'react'
import SignIn from '../sign-in/sign-in.component';
import SignUn from '../sign-up/sign-up.component';
import './sign-in-and-signup.styles.scss'

const SignInandSignUpComponent = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUn />
    </div>
  )
}

export default SignInandSignUpComponent;