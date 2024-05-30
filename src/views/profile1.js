import React from "react";
import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";
import { Line } from "rc-progress";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "./profile1.css";

const Profile1 = (props) => {
  return (
    <div className="profile1-container">
      <Helmet>
        <title>Profile1 - Socializer</title>
        <meta property="og:title" content="Profile1 - Socializer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <Profile rootClassName="profile-root-class-name"></Profile>

      {/* Include the WithLabelExample component here */}
      <div className="progress-bar-container">
        <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
      </div>

      <footer className="profile1-footer">
        <div className="profile1-main">
          <div className="profile1-branding">
            <div className="profile1-heading">
              <h2 className="profile1-logo">SOCIALIZER</h2>
              <p className="profile1-caption">
                A platform designed for helping people with autism or people who
                struggle with emotional recognition to improve this social skill
              </p>
            </div>
          </div>
          <div className="profile1-links">
            <div className="profile1-list">
              <h3 className="profile1-heading1">Site</h3>
              <div className="profile1-items">
                <button className="profile1-link button-clean button">
                  home
                </button>
                <button className="profile1-link01 button-clean button">
                  browse scenarios
                </button>
                <button className="profile1-link02 button-clean button">
                  Tutorial
                </button>
                <button className="profile1-link03 button-clean button">
                  <span>
                    <span>lessons</span>
                    <br></br>
                  </span>
                </button>
                <button className="profile1-link04 button-clean button">
                  profile
                </button>
              </div>
            </div>
            <div className="profile1-list1">
              <h3 className="profile1-heading2">Creators</h3>
              <div className="profile1-items1">
                <button className="profile1-link05 button-clean button">
                  name
                </button>
                <button className="profile1-link06 button-clean button">
                  name
                </button>
                <button className="profile1-link07 button-clean button">
                  name
                </button>
                <button className="profile1-link08 button-clean button">
                  name
                </button>
                <button className="profile1-link09 button-clean button">
                  name
                </button>
              </div>
            </div>
          </div>
          <div className="profile1-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="profile1-twitter social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="profile1-image"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="profile1-discord social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="profile1-image1"
              />
            </a>
          </div>
        </div>
      </footer>
      <div>
        <div className="profile1-container2">
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
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
