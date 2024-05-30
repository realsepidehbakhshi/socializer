import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Logos6 from './logos6'
import './forgotpass.css'

const Forgotpass = (props) => {
  return (
    <div
      className={`forgotpass-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="forgotpass-max-width thq-section-max-width thq-section-padding">
        <div className="forgotpass-form-root">
          <div className="forgotpass-form">
            <Logos6
              logo1Src="/socializer%20logo-200h.png"
              logo2Src="/socializer%20logo-200h.png"
              logo3Src="/socializer%20logo-200h.png"
              logo4Src="/socializer%20logo-200h.png"
              logo5Src="/socializer%20logo-200h.png"
              logo6Src="/socializer%20logo-200h.png"
              logo7Src="/socializer%20logo-200h.png"
              rootClassName="logos6-root-class-name2"
              className=""
            ></Logos6>
            <form className="forgotpass-form1">
              <div className="forgotpass-email">
                <label
                  htmlFor="thq-sign-in-1-password"
                  className="forgotpass-text thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-3-email"
                  required="true"
                  placeholder="Email address"
                  className="forgotpass-textinput thq-input thq-body-large"
                />
              </div>
            </form>
            <div className="forgotpass-container1">
              <Link
                to="/login"
                autoFocus="true"
                className="forgotpass-button thq-button-filled"
              >
                <span className="forgotpass-text1 thq-body-small">
                  Send new password
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Forgotpass.defaultProps = {
  text: 'Sign up',
  rootClassName: '',
}

Forgotpass.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Forgotpass
