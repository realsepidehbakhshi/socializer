import React from "react";
import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";
import { Line } from "rc-progress";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "./profile1.css";
import { Footer } from "../components/Footer";

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

      <Footer />
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
