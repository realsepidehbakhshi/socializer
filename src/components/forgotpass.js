import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import PropTypes from "prop-types";

import Logos6 from "./logos6";
import "./forgotpass.css";
import { setNP } from "../api/user";

const Forgotpass = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const setPassword = async () => {
    if (oldPassword === "" || newPassword === "") {
      alert("Please fill the form first");
      return;
    }
    const res = await setNP({
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
    if (res && res.status === 200) {
      alert("success");
    } else {
      alert("Old password is wrong");
    }
  };

  return (
    <>
      <Helmet>
        <title>set new passwpod - Socializer</title>
        <meta property="og:title" content="game-page - Socializer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className={`forgotpass-container `}>
        <div className="forgotpass-max-width thq-section-max-width thq-section-padding">
          <div className="forgotpass-form-root">
            <div className="forgotpass-form">
              <form className="forgotpass-form1">
                <div className="forgotpass-email">
                  <label
                    htmlFor="thq-sign-in-1-password"
                    className="forgotpass-text thq-body-large"
                  >
                    Old password
                  </label>
                  <input
                    type="password"
                    id="thq-sign-in-3-email"
                    required="true"
                    placeholder="*********"
                    className="forgotpass-textinput thq-input thq-body-large"
                    onChange={(e) => setOldPassword(e.target.value)}
                    value={oldPassword}
                  />
                  New password
                  <input
                    type="password"
                    id="thq-sign-in-3-email"
                    required="true"
                    placeholder="*********"
                    className="forgotpass-textinput thq-input thq-body-large"
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                  />
                </div>
              </form>
              <br />
              <div className="forgotpass-container1">
                <div
                  onClick={setPassword}
                  className="forgotpass-button thq-button-filled"
                >
                  <span className="forgotpass-text1 thq-body-small">
                    Send new password
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Forgotpass.defaultProps = {
  text: "Sign up",
  rootClassName: "",
};

Forgotpass.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Forgotpass;
