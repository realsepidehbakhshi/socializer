import React from 'react'

import { Helmet } from 'react-helmet'

import Forgotpass from '../components/forgotpass'
import './forgot-password.css'

const ForgotPassword = (props) => {
  return (
    <div className="forgot-password-container">
      <Helmet>
        <title>forgot-password - Socializer</title>
        <meta property="og:title" content="forgot-password - Socializer" />
      </Helmet>
      <Forgotpass rootClassName="forgotpass-root-class-name"></Forgotpass>
    </div>
  )
}

export default ForgotPassword
