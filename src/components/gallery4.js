import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./gallery4.css";
import RadioSelect from "./RadioSelect";

const Gallery4 = (props) => {
  const { data, onSelect, currentAnswer } = props;
  return (
    <div
      className="gallery4-gallery3 thq-section-padding"
      style={{ marginTop: -50, paddingBottom: 0 }}
    >
      <div className="gallery4-max-width thq-section-max-width">
        <div className="gallery4-container">
          <div className="gallery4-content">
            <div className="gallery4-container1">
              <img
                alt={"img"}
                src={data.img}
                className="gallery4-image1 thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
        <div className="content-holder">
          <div className="gallery4-section-title">
            <span className="gallery4-text1 thq-body-large">{data.text}</span>
          </div>
          <RadioSelect
            data={data.radioOptions}
            onSelect={onSelect}
            question_id={data.id}
            currentAnswer={currentAnswer}
          />
        </div>
      </div>
    </div>
  );
};

Gallery4.defaultProps = {
  button4: "Button",
  image3Alt: "Social Skills Scenario",
  button2: "Button",
  heading1: "Gallery",
  image2Src:
    "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTAxMDM0OHw&ixlib=rb-4.0.3&q=80&w=1080",
  image1Src:
    "https://images.unsplash.com/photo-1596704017254-9b121068fb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTAxMDM0OHw&ixlib=rb-4.0.3&q=80&w=1400",
  action1: "Sign In",
  image1Alt: "Facial Expression Tutorial",
  content1:
    "Explore our gallery featuring tutorials, lessons, and scenarios designed to enhance social skills through a game-based approach.",
  image3Src:
    "https://images.unsplash.com/photo-1622475444932-f1b0bf96ecff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTAxMDM0OHw&ixlib=rb-4.0.3&q=80&w=1080",
  text: "Text",
  button3: "Button",
  text1: "Text",
  button1: "Button",
  text2: "Text",
  button: "Button",
  image2Alt: "Emotion Recognition Lesson",
  text3: "Text",
};

Gallery4.propTypes = {
  button4: PropTypes.string,
  image3Alt: PropTypes.string,
  button2: PropTypes.string,
  heading1: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image3Src: PropTypes.string,
  text: PropTypes.string,
  button3: PropTypes.string,
  text1: PropTypes.string,
  button1: PropTypes.string,
  text2: PropTypes.string,
  button: PropTypes.string,
  image2Alt: PropTypes.string,
  text3: PropTypes.string,
};

export default Gallery4;
