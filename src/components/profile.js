import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Line } from "rc-progress";

import "./profile.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/slise";
import { getAnswers, userData } from "../api/user";
import { gameData } from "../lib/data";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0);
  const calculate = (data) => {
    gameData.map((item, index) => {
      if (item.answer === data[index].answer) {
        setProgress((prev) => prev + 10);
      }
    });
  };
  useEffect(async () => {
    const result2 = await userData();
    const answers = await getAnswers();
    calculate(answers);
    if (result2 && result2?.status === 200) {
      setUser(result2?.data);
    }
  }, []);

  return (
    <div className={`profile-container ${props.rootClassName} `}>
      <div className="profile-container01">
        <div className="profile-container02">
          <img
            alt={props.imageAlt}
            src="/New Folder/%C3%A2%C2%80%C2%94pngtree%C3%A2%C2%80%C2%94user%20icon_4479727-300h.png"
            className="profile-image"
          />
        </div>
        <div className="profile-container03">
          <div className="profile-container04">
            <div className="profile-content">
              <h1 className="profile-text thq-heading-1">
                Personal information
              </h1>
              <p className="profile-text01 thq-body-large">
                <span className="profile-text02">Name: {user?.fullName} </span>
                <br className="profile-text03"></br>
                <span className="profile-text04">Email: {user?.email}</span>
                <br className="profile-text05"></br>
                <span className="profile-text06">Role: {user?.type}</span>
                <br className="profile-text07"></br>
                <br className=""></br>
              </p>
              <div className="profile-container05">
                <div className="profile-container06"></div>
                <Link to="/" className="profile-button thq-button-filled">
                  <span className="profile-text09 thq-body-small">Edit</span>
                </Link>
              </div>
              <Link
                to="/forgot-password"
                className="profile-button1 thq-button-outline"
              >
                <span className="thq-body-small">Change password</span>
              </Link>
              <div className="profile-actions">
                <div className="profile-container07"></div>
                <div className="profile-container08"></div>
              </div>
            </div>
          </div>
          <div className="profile-container09">
            <div className="profile-content1">
              <h1 className="profile-text11 thq-heading-1">Learning goals</h1>
              <p className="profile-text12 thq-body-large">
                <span className="profile-text13">Goal 1: keep my score up</span>
                <br className="profile-text14"></br>
                <span className="profile-text15">
                  Goal 2: learn the appropriate response
                </span>
                <br className="profile-text16"></br>
                <span className="profile-text17">
                  Goal 3: recognize emotions in social settings
                </span>
                <br className="profile-text18"></br>
                <br className=""></br>
              </p>
              <div className="profile-container10">
                <span className="profile-text17">{progress}% Progress</span>
                <Line percent={progress} strokeWidth={4} strokeColor="green" />
              </div>
              <div className="profile-container11">
                <div className="profile-container12"></div>
              </div>
              <div className="profile-actions1">
                <div className="profile-container13"></div>
                <div className="profile-container14"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  text: "Sign up",
  rootClassName: "",
  imageAlt: "image",
  imageSrc: "https://play.teleporthq.io/static/svg/default-img.svg",
};

Profile.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Profile;
