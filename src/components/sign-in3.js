import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";
import Logos6 from "./logos6";
import "./sign-in3.css";
import { login, userData } from "../api/user";
import { useDispatch } from "react-redux";
import { userDataAction } from "../redux/slise";

const SignIn3 = (props) => {
  const navigate = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
    if (email === "" || password === "") {
      alert("fill all please");
      return;
    }
    const result = await login({ email, password });
    if (result.status === 200) {
      const token = result.data.token;
      localStorage.setItem("token", token);
      const result2 = await userData();
      if (result2.status === 200) {
        dispatch(userDataAction(result2?.data));
      }
      navigate.push("/");
    } else {
      console.log("error");
    }
  };
  return (
    <div
      className={`sign-in3-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="sign-in3-max-width thq-section-max-width thq-section-padding">
        <div className="sign-in3-form-root">
          <div className="sign-in3-form">
            <Logos6
              logo1Src="/socializer%20logo-200h.png"
              logo2Src="/socializer%20logo-200h.png"
              logo3Src="/socializer%20logo-200h.png"
              logo4Src="/socializer%20logo-200h.png"
              logo5Src="/socializer%20logo-200h.png"
              logo6Src="/socializer%20logo-200h.png"
              logo7Src="/socializer%20logo-200h.png"
              rootClassName="logos6-root-class-name"
              className=""
            ></Logos6>
            <form className="sign-in3-form1">
              <div className="sign-in3-email">
                <label
                  htmlFor="thq-sign-in-1-password"
                  className="sign-in3-text thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-3-email"
                  required="true"
                  name="email"
                  placeholder="Email address"
                  className="sign-in3-textinput thq-input thq-body-large"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="sign-in3-password">
                <div className="sign-in3-container1">
                  <label
                    htmlFor="thq-sign-in-3-password"
                    className="sign-in3-text1 thq-body-large"
                  >
                    Password
                  </label>
                  <div className="sign-in3-hide-password">
                    <svg viewBox="0 0 1024 1024" className="sign-in3-icon">
                      <path
                        d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"
                        className=""
                      ></path>
                    </svg>
                    <span className="sign-in3-text2 thq-body-small">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-3-password"
                  required="true"
                  name="password"
                  placeholder="Password"
                  className="sign-in3-textinput1 thq-input thq-body-large"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Link
                  to="/forgot-password"
                  className="sign-in3-navlink thq-body-small"
                >
                  Forgot password
                </Link>
              </div>
            </form>
            <div className="sign-in3-container2">
              <div
                onClick={loginUser}
                className="sign-in3-button thq-button-filled"
              >
                <span className="sign-in3-text3 thq-body-small">
                  {props.action1}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-in3-container3">
          <div className="sign-in3-divider">
            <div className="sign-in3-divider1"></div>
            <p className="sign-in3-text4 thq-body-large">
              Sign up to access personalized lessons and tutorials to improve
              your social skills.
            </p>
            <div className="sign-in3-divider2"></div>
          </div>
          <Link
            to="/sign-up"
            autoFocus="true"
            className="sign-in3-button1 thq-button-outline"
          >
            <span className="sign-in3-text5 thq-body-small">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

SignIn3.defaultProps = {
  image1Src:
    "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2NTYyOXw&ixlib=rb-4.0.3&q=80&w=1080",
  image1Alt: "Illustration of a person signing in",
  content1:
    "Sign in to access personalized lessons and tutorials to improve your social skills.",
  action2: "Forgot Password?",
  action1: "Sign In",
  rootClassName: "",
  heading1: "Welcome back!",
};

SignIn3.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
};

export default SignIn3;
