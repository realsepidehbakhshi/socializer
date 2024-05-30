import React from "react";
import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import TutorialCom from "../components/tutorial";

import "./tutorial.css";

const Tutorial = (props) => {
  return (
    <div className="tutorial-container">
      <Helmet>
        <title>Tutorial - Socializer</title>
        <meta property="og:title" content="Tutorial - Socializer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <TutorialCom rootClassName="tutorial-root-class-name" />
      <footer className="tutorial-footer">
        <div className="tutorial-main">
          <div className="tutorial-branding">
            <div className="tutorial-heading">
              <h2 className="tutorial-logo">SOCIALIZER</h2>
              <p className="tutorial-caption">
                A platform designed for helping people with autism or people who
                struggle with emotional recognition to improve this social skill
              </p>
            </div>
          </div>
          <div className="tutorial-links">
            <div className="tutorial-list">
              <h3 className="tutorial-heading1">Site</h3>
              <div className="tutorial-items">
                <button className="tutorial-link button-clean button">
                  home
                </button>
                <button className="tutorial-link01 button-clean button">
                  browse scenarios
                </button>
                <button className="tutorial-link02 button-clean button">
                  Tutorial
                </button>
                <button className="tutorial-link03 button-clean button">
                  <span>
                    <span>lessons</span>
                    <br></br>
                  </span>
                </button>
                <button className="tutorial-link04 button-clean button">
                  profile
                </button>
              </div>
            </div>
            <div className="tutorial-list1">
              <h3 className="tutorial-heading2">Creators</h3>
              <div className="tutorial-items1">
                <button className="tutorial-link05 button-clean button">
                  name
                </button>
                <button className="tutorial-link06 button-clean button">
                  name
                </button>
                <button className="tutorial-link07 button-clean button">
                  name
                </button>
                <button className="tutorial-link08 button-clean button">
                  name
                </button>
                <button className="tutorial-link09 button-clean button">
                  name
                </button>
              </div>
            </div>
          </div>
          <div className="tutorial-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="tutorial-twitter social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="tutorial-image"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="tutorial-discord social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="tutorial-image1"
              />
            </a>
          </div>
        </div>
      </footer>
      <div>
        <div className="tutorial-container2">
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

export default Tutorial;
