import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="game-page-footer">
      <div className="game-page-main">
        <div className="game-page-branding">
          <div className="game-page-heading1">
            <h2 className="game-page-logo">SOCIALIZER</h2>
            <p className="game-page-caption1">
              A platform designed to assist individuals with autism or those who
              struggle with emotional recognition can significantly enhance
              their social skills. It would feature interactive video scenarios,
              personalized social stories, and real-time feedback to help users
              practice and understand emotional cues. Additionally, a community
              feature would allow users to connect with peers and mentors for
              support. Regular assessments and progress tracking would ensure
              continuous improvement. This platform aims to empower users to
              develop better social interactions and improve their overall
              quality of life.
            </p>
          </div>
        </div>
        <div className="game-page-links">
          <div className="game-page-list">
            <h3 className="game-page-heading2">Site Map</h3>
            <div className="game-page-items">
              <Link className="game-page-link button-clean button" to="/">
                home
              </Link>
              <Link
                to="/game-page"
                className="game-page-link01 button-clean button"
              >
                browse scenarios
              </Link>
              <Link
                className="game-page-link02 button-clean button"
                to="/tutorial"
              >
                Tutorial
              </Link>
              <Link
                className="game-page-link03 button-clean button"
                to="/lessons"
              >
                <span>
                  <span>lessons</span>
                  <br></br>
                </span>
              </Link>
              <Link
                className="game-page-link04 button-clean button"
                to="/profile1"
              >
                profile
              </Link>
            </div>
          </div>
          <div className="game-page-list1">
            <h3 className="game-page-heading3">Powered By</h3>
            <button className="game-page-link03 button-clean button">
              <span>Sepideh Bakhshi</span>
            </button>

            <button className="game-page-link03 button-clean button">
              <span>Cordero Jara Pedro Alejandro</span>
            </button>

            <button className="game-page-link03 button-clean button">
              <span>Ben Elkbaier Amira</span>
            </button>

            <button className="game-page-link03 button-clean button">
              <span>Khurramov Sardor</span>
            </button>

            <button className="game-page-link03 button-clean button">
              <span>Gyursoy Alexander-Efe</span>
            </button>
          </div>
        </div>
        <div className="game-page-socials">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="game-page-twitter social button"
          >
            <img
              alt="image"
              src="/Icons/twitter.svg"
              className="game-page-image"
            />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer noopener"
            className="game-page-discord social button"
          >
            <img
              alt="image"
              src="/Icons/discord.svg"
              className="game-page-image1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
