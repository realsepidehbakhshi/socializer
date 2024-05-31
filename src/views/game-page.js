import React, { useState } from "react";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Gallery4 from "../components/gallery4";
import "./game-page.css";
import { gameData } from "../lib/data";

const GamePage = (props) => {
  const [step, setStep] = useState(1);
  return (
    <div className="game-page-container">
      <Helmet>
        <title>game-page - Socializer</title>
        <meta property="og:title" content="game-page - Socializer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <section className="game-page-hero">
        <div className="game-page-heading">
          <p className="game-page-caption">
            <span>Choose the right emotion</span>
            <br></br>
          </p>
          {step === 1 ? (
            <Gallery4 data={gameData[0]}></Gallery4>
          ) : step === 2 ? (
            <Gallery4 data={gameData[1]}></Gallery4>
          ) : step === 3 ? (
            <Gallery4 data={gameData[2]}></Gallery4>
          ) : step === 4 ? (
            <Gallery4 data={gameData[3]}></Gallery4>
          ) : step === 5 ? (
            <Gallery4 data={gameData[4]}></Gallery4>
          ) : step === 6 ? (
            <Gallery4 data={gameData[5]}></Gallery4>
          ) : step === 7 ? (
            <Gallery4 data={gameData[6]}></Gallery4>
          ) : step === 8 ? (
            <Gallery4 data={gameData[7]}></Gallery4>
          ) : step === 9 ? (
            <Gallery4 data={gameData[8]}></Gallery4>
          ) : (
            <Gallery4 data={gameData[9]}></Gallery4>
          )}
          <div style={{ display: "flex", gap: 10 }}>
            {step > 1 ? (
              <div
                className="gallery4-button thq-button-filled"
                onClick={() => setStep(step - 1)}
                style={{ height: 42 }}
              >
                <span className="gallery4-text5 thq-body-small">Prevoius</span>
              </div>
            ) : (
              ""
            )}
            {step !== 10 ? (
              <div
                className="gallery4-button thq-button-filled"
                onClick={() => setStep(step + 1)}
                style={{ height: 42 }}
              >
                <span className="gallery4-text5 thq-body-small">Next</span>
              </div>
            ) : (
              <div
                className="gallery4-button thq-button-filled"
                style={{ height: 42 }}
              >
                <span className="gallery4-text5 thq-body-small">Submit</span>
              </div>
            )}
          </div>
        </div>
      </section>
      <footer className="game-page-footer">
        <div className="game-page-main">
          <div className="game-page-branding">
            <div className="game-page-heading1">
              <h2 className="game-page-logo">SOCIALIZER</h2>
              <p className="game-page-caption1">
                A platform designed for helping people with autism or people who
                struggle with emotional recognition to improve this social skill
              </p>
            </div>
          </div>
          <div className="game-page-links">
            <div className="game-page-list">
              <h3 className="game-page-heading2">Site</h3>
              <div className="game-page-items">
                <button className="game-page-link button-clean button">
                  home
                </button>
                <button className="game-page-link01 button-clean button">
                  browse scenarios
                </button>
                <button className="game-page-link02 button-clean button">
                  Tutorial
                </button>
                <button className="game-page-link03 button-clean button">
                  <span>
                    <span>lessons</span>
                    <br></br>
                  </span>
                </button>
                <button className="game-page-link04 button-clean button">
                  profile
                </button>
              </div>
            </div>
            <div className="game-page-list1">
              <h3 className="game-page-heading3">Creators</h3>
              <div className="game-page-items1">
                <button className="game-page-link05 button-clean button">
                  name
                </button>
                <button className="game-page-link06 button-clean button">
                  name
                </button>
                <button className="game-page-link07 button-clean button">
                  name
                </button>
                <button className="game-page-link08 button-clean button">
                  name
                </button>
                <button className="game-page-link09 button-clean button">
                  name
                </button>
              </div>
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
      <div>
        <div className="game-page-container2">
          <Script
            html={`<script>
            (function() {
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
})();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
