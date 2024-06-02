import React from "react";

import PropTypes from "prop-types";

import "./tutorial.css";

const Tutorial = (props) => {
  return (
    <div className={`tutorial-container ${props.rootClassName} `}>
      <video
        src={"/" + props.videoSrc}
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="tutorial-video"
        controls
      ></video>
    </div>
  );
};

Tutorial.defaultProps = {
  rootClassName: "",
  videoSrc: "",
};

Tutorial.propTypes = {
  rootClassName: PropTypes.string,
  videoSrc: PropTypes.string,
};

export default Tutorial;
