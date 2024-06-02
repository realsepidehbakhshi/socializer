import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import PropTypes from "prop-types";

import "../components/forgotpass.css";
import { recoverP, setNP } from "../api/user";
import Logos6 from "../components/logos6";

const FGP = (props) => {
  const [email, setEmail] = useState("");

  const setPassword = async () => {
    if (email === "") {
      alert("Please fill the form first");
      return;
    }
    const res = await recoverP({
      email: email,
    });
    if (res && res.status === 200) {
      alert("check your email");
    } else {
      alert("server error");
    }
  };

  return (
    <>
      <div
        className={`forgotpass-container `}
        style={{ flexDirection: "column" }}
      >
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
        <div className="forgotpass-max-width thq-section-max-width thq-section-padding">
          <div className="forgotpass-form-root">
            <div className="forgotpass-form">
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
                    placeholder="Email Address"
                    className="forgotpass-textinput thq-input thq-body-large"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    Recover password
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

export default FGP;
