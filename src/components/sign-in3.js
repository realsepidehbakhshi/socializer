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
    if (result?.status === 200) {
      const token = result.data.token;
      localStorage.setItem("token", token);
      const result2 = await userData();
      if (result2.status === 200) {
        dispatch(userDataAction(result2?.data));
      }
      navigate.push("/");
    } else {
      alert("Wrong email or password");
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
                <Link to="/fgpass" className="sign-in3-navlink thq-body-small">
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
