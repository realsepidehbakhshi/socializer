import React from "react";

import PropTypes from "prop-types";

import "./lesson.css";

const Lesson = (props) => {
  return (
    <div className={`lesson-container ${props.rootClassName} `}>
      <div
        data-thq="slider"
        data-navigation="true"
        data-pagination="true"
        className="lesson-slider swiper"
      >
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/2.jpg" />
          </div>

          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/3.jpg" />
          </div>

          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/7.jpg" />
          </div>

          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/9.jpg" />
          </div>

          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/12.jpg" />
          </div>

          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/15.jpg" />
          </div>

          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/17.jpg" />
          </div>

          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/19.jpg" />
          </div>
          <div
            data-thq="slider-slide"
            className="lesson-slider-slide swiper-slide"
          >
            <img src="/21.jpg" />
          </div>
        </div>
        <div
          data-thq="slider-pagination"
          className="lesson-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
          <div
            data-thq="slider-pagination-bullet"
            className="swiper-pagination-bullet"
          ></div>
        </div>
        <div data-thq="slider-button-prev" className="swiper-button-prev"></div>
        <div data-thq="slider-button-next" className="swiper-button-next"></div>
      </div>
    </div>
  );
};

Lesson.defaultProps = {
  videoSrc: "",
  rootClassName: "",
};

Lesson.propTypes = {
  videoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Lesson;
