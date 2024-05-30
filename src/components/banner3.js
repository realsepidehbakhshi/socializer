import React from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div
      className={`banner3-container thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container1"></div>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  rootClassName: '',
  content1:
    'Enhance your ability to recognize facial expressions and improve your social interactions through fun and engaging games.',
  heading1: 'Improve Your Social Skills',
  image1Src:
    'https://images.unsplash.com/photo-1558967925-2b4c9983d93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MTQ4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Get Started',
  image1Alt: 'Facial expressions game',
}

Banner3.propTypes = {
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Banner3
