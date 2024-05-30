import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div
      className={`hero2-header5 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt="image"
        src="/orange%20minimalist%20modern%20warm%20blur%20gradient%20non%20profit%20presentation-1100h.jpg"
        className="hero2-image"
      />
      <div className="hero2-container">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1 className="hero2-text thq-heading-1">Personal information</h1>
              <p className="hero2-text01 thq-body-large">
                <span className="hero2-text02">Name: </span>
                <br className="hero2-text03"></br>
                <span className="hero2-text04">Email: user@mail.con</span>
                <br className="hero2-text05"></br>
                <span className="hero2-text06">Age:</span>
                <br className="hero2-text07"></br>
                <br className=""></br>
              </p>
              <div className="hero2-container01">
                <div className="hero2-container02"></div>
                <Link
                  to="/"
                  autoFocus="true"
                  className="hero2-button thq-button-filled"
                >
                  <span className="hero2-text09 thq-body-small">Edit</span>
                </Link>
              </div>
              <button className="hero2-button1 thq-button-outline">
                <span className="thq-body-small">Change password</span>
              </button>
              <div className="hero2-actions">
                <div className="hero2-container03"></div>
                <div className="hero2-container04"></div>
              </div>
            </div>
          </div>
          <div className="hero2-column1">
            <div className="hero2-content1">
              <h1 className="hero2-text11 thq-heading-1">Learning goals</h1>
              <p className="hero2-text12 thq-body-large">
                <span className="hero2-text13">Goal 1: keep my score up</span>
                <br className="hero2-text14"></br>
                <span className="hero2-text15">
                  Goal 2: learn the appropriate response
                </span>
                <br className="hero2-text16"></br>
                <span className="hero2-text17">
                  Goal 3: recognize emotions in social settings
                </span>
                <br className="hero2-text18"></br>
                <br className=""></br>
              </p>
              <div className="hero2-container05">
                <span className="hero2-text20">insert progress bar</span>
              </div>
              <div className="hero2-container06">
                <div className="hero2-container07"></div>
              </div>
              <div className="hero2-actions1">
                <div className="hero2-container08"></div>
                <div className="hero2-container09"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt2: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTEzODIwNzF8MA&ixlib=rb-4.0.3&w=1500',
  imageAlt: 'image',
  action1: 'Main action',
  text: 'Sign up',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  action2: 'Secondary action',
  text1: 'Text',
  rootClassName: '',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt1: 'image',
  image1Alt: 'image',
  text2: 'Text',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  heading1: 'Discover the Power of Our Products',
}

Hero2.propTypes = {
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  image1Src: PropTypes.string,
  imageAlt: PropTypes.string,
  action1: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  action2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  image1Alt: PropTypes.string,
  text2: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero2
