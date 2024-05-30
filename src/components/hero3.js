import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className={`hero3-header9 ${props.rootClassName} `}>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
    </div>
  )
}

Hero3.defaultProps = {
  image1Alt: 'Illustration of diverse group of people playing a game together',
  image1Src:
    'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDg2MjM5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Get started',
  heading1: 'Enhance Your Social Skills Through Gaming',
  rootClassName: '',
  content1: 'Improve your social skills through fun and engaging games!',
  action1: 'Learn More',
}

Hero3.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero3
