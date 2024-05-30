import React from 'react'

import { Helmet } from 'react-helmet'

import SignIn3 from '../components/sign-in3'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>login - Socializer</title>
        <meta property="og:title" content="login - Socializer" />
      </Helmet>
      <SignIn3
        action2="Sign up"
        image1Src="/orange%20minimalist%20modern%20warm%20blur%20gradient%20non%20profit%20presentation-200h.jpg"
        rootClassName="sign-in3-root-class-name"
      ></SignIn3>
    </div>
  )
}

export default Login
