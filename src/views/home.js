import React from "react";
import { Link } from "react-router-dom";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import "./home.css";
import { Footer } from "../components/Footer";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Socializer</title>
        <meta property="og:title" content="Socializer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">Improve your emotional recognition</h1>
          <p className="home-caption">
            <span>
              learn to distinguish between different facial expressions 
            </span>
            <br></br>
            <span>through an easy game</span>
            <br></br>
          </p>
        </div>
        <div className="home-buttons">
          <Link to="/game-page" className="home-view button">
            START GAME
          </Link>
          <Link to="/tutorial" className="home-learn button-clean button">
            start tutorial
          </Link>
        </div>
        <img
          alt="image"
          src="/New Folder/image__3_-removebg1-1000h.png"
          className="home-image"
        />
      </section>
      <section className="home-description">
        <div className="home-container1">
          <div className="home-description1">
            <div className="home-content">
              <p className="home-paragraph">
                <span className="home-text04">
                  We are a dedicated team of students who have embraced the
                  opportunity to make a positive impact on the lives of
                  individuals with autism. Our project centers around the
                  creation of a simple yet effective game designed to enhance
                  emotional recognition skills.
                </span>
                <br></br>
              </p>
              <p className="home-paragraph1">
                By combining our knowledge, creativity, and passion, we aim to
                provide a valuable tool that can assist those with autism in
                better understanding and interpreting emotions, ultimately
                fostering improved social interactions and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card">
            <div className="home-main">
              <div className="home-content1">
                <h2 className="home-header1">100+ different scenarios</h2>
                <p className="home-description2">
                  <br></br>
                  <span className="home-text07">
                    You can browse the avatars by emotions, this will help you
                    personalize your learning.
                  </span>
                </p>
              </div>
              <button className="home-learn1 button">
                <span className="home-text08">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image1"
                />
              </button>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-main1">
              <div className="home-content2">
                <h2 className="home-header2">Follow the tutorial</h2>
                <p className="home-description3">
                  <br></br>
                  <span>
                    our comprehensive tutorial can help you understand the
                    concept of the game before diving in.
                  </span>
                </p>
              </div>
              <button className="home-learn2 button">
                <Link to="/tutorial" className="home-navlink">
                  Learn more
                </Link>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image2"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="home-card2">
          <div className="home-row1">
            <div className="home-main2">
              <div className="home-content3">
                <h2 className="home-header3">
                  <span>
                    Check
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <br></br>
                  <span>our lessons</span>
                </h2>
                <p className="home-description4">
                  if you feel in need of general tips and tricks on how to
                  distinguish between different emotions, we got you. our lesson
                  page can help you learn.
                </p>
              </div>
              <button className="home-learn3 button">
                <Link to="/lessons" className="home-navlink1">
                  Learn more
                </Link>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image3"
                />
              </button>
            </div>
            <img
              alt="image"
              src="/image%20(2)-1600h.png"
              className="home-image4"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
