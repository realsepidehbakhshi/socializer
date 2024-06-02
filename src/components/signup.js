import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../api/user";
import PropTypes from "prop-types";

import Logos6 from "./logos6";
import "./signup.css";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useHistory();
  const registerUser = async () => {
    if (email === "" || password === "" || fullName === "") {
      alert("fill all please");
      return;
    }
    const result = await register({ email, password, fullName });
    if (result?.status === 200) {
      navigate.push("/login");
    } else {
      console.log("error");
    }
  };
  return (
    <div
      className={`signup-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="signup-max-width thq-section-max-width thq-section-padding">
        <div className="signup-form-root">
          <div className="signup-form">
            <Logos6
              logo1Src="/socializer%20logo-200h.png"
              logo2Src="/socializer%20logo-200h.png"
              logo3Src="/socializer%20logo-200h.png"
              logo4Src="/socializer%20logo-200h.png"
              logo5Src="/socializer%20logo-200h.png"
              logo6Src="/socializer%20logo-200h.png"
              logo7Src="/socializer%20logo-200h.png"
              rootClassName="logos6-root-class-name1"
              className=""
            ></Logos6>
            <form className="signup-form1">
              <label
                htmlFor="thq-sign-in-3-password"
                className="signup-text3 thq-body-large"
              >
                Full Name
              </label>
              <input
                type="text"
                id="thq-sign-in-3-password"
                required="true"
                placeholder="Full Name"
                className="signup-textinput2 thq-input thq-body-large"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
              <div className="signup-email">
                <label
                  htmlFor="thq-sign-in-1-password"
                  className="signup-text thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-3-email"
                  required="true"
                  name="email"
                  placeholder="Email address"
                  className="signup-textinput thq-input thq-body-large"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="signup-password">
                <div className="signup-container1">
                  <label
                    htmlFor="thq-sign-in-3-password"
                    className="signup-text1 thq-body-large"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-3-password"
                  required="true"
                  placeholder="Password"
                  className="signup-textinput1 thq-input thq-body-large"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </form>
            <div className="signup-container2" onClick={registerUser}>
              <div className="signup-button thq-button-filled">
                <span className="signup-text4 thq-body-small">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Signup.defaultProps = {
  action2: "Forgot Password?",
  content1:
    "Sign in to access personalized lessons and tutorials to improve your social skills.",
  rootClassName: "",
  text: "Sign up",
  action1: "Sign In",
};

Signup.propTypes = {
  action2: PropTypes.string,
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  action1: PropTypes.string,
};

export default Signup;
