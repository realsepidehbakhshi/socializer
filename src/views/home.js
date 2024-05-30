import React from "react";
import { Link } from "react-router-dom";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import "./home.css";

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
      <footer className="home-footer">
        <div className="home-main3">
          <div className="home-branding">
            <div className="home-heading1">
              <h2 className="home-logo">SOCIALIZER</h2>
              <p className="home-caption1">
                A platform designed for helping people with autism or people who
                struggle with emotional recognition to improve this social skill
              </p>
            </div>
          </div>
          <div className="home-links">
            <div className="home-list">
              <h3 className="home-heading2">Site</h3>
              <div className="home-items">
                <button className="home-link button-clean button">home</button>
                <button className="home-link01 button-clean button">
                  browse scenarios
                </button>
                <button className="home-link02 button-clean button">
                  Tutorial
                </button>
                <button className="home-link03 button-clean button">
                  <span>
                    <span>lessons</span>
                    <br></br>
                  </span>
                </button>
                <button className="home-link04 button-clean button">
                  profile
                </button>
              </div>
            </div>
            <div className="home-list1">
              <h3 className="home-heading3">Creators</h3>
              <div className="home-items1">
                <button className="home-link05 button-clean button">
                  name
                </button>
                <button className="home-link06 button-clean button">
                  name
                </button>
                <button className="home-link07 button-clean button">
                  name
                </button>
                <button className="home-link08 button-clean button">
                  name
                </button>
                <button className="home-link09 button-clean button">
                  name
                </button>
              </div>
            </div>
          </div>
          <div className="home-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image5"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image6"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
