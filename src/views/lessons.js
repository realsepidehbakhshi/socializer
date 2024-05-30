import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Lesson from '../components/lesson'
import './lessons.css'

const Lessons = (props) => {
  return (
    <div className="lessons-container">
      <Helmet>
        <title>Lessons - Socializer</title>
        <meta property="og:title" content="Lessons - Socializer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <Lesson rootClassName="lesson-root-class-name"></Lesson>
      <footer className="lessons-footer">
        <div className="lessons-main">
          <div className="lessons-branding">
            <div className="lessons-heading">
              <h2 className="lessons-logo">SOCIALIZER</h2>
              <p className="lessons-caption">
                A platform designed for helping people with autism or people who
                struggle with emotional recognition to improve this social skill
              </p>
            </div>
          </div>
          <div className="lessons-links">
            <div className="lessons-list">
              <h3 className="lessons-heading1">Site</h3>
              <div className="lessons-items">
                <button className="lessons-link button-clean button">
                  home
                </button>
                <button className="lessons-link01 button-clean button">
                  browse scenarios
                </button>
                <button className="lessons-link02 button-clean button">
                  Tutorial
                </button>
                <button className="lessons-link03 button-clean button">
                  <span>
                    <span>lessons</span>
                    <br></br>
                  </span>
                </button>
                <button className="lessons-link04 button-clean button">
                  profile
                </button>
              </div>
            </div>
            <div className="lessons-list1">
              <h3 className="lessons-heading2">Creators</h3>
              <div className="lessons-items1">
                <button className="lessons-link05 button-clean button">
                  name
                </button>
                <button className="lessons-link06 button-clean button">
                  name
                </button>
                <button className="lessons-link07 button-clean button">
                  name
                </button>
                <button className="lessons-link08 button-clean button">
                  name
                </button>
                <button className="lessons-link09 button-clean button">
                  name
                </button>
              </div>
            </div>
          </div>
          <div className="lessons-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="lessons-twitter social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="lessons-image"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="lessons-discord social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="lessons-image1"
              />
            </a>
          </div>
        </div>
      </footer>
      <div>
        <div className="lessons-container2">
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
  )
}

export default Lessons
