import React from 'react'

import { Helmet } from 'react-helmet'

import Signup from '../components/signup'
import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>sign-up - Socializer</title>
        <meta property="og:title" content="sign-up - Socializer" />
      </Helmet>
      <Signup rootClassName="signup-root-class-name"></Signup>
    </div>
  )
}

export default SignUp
