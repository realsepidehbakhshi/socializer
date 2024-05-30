import React from 'react'

import PropTypes from 'prop-types'

import './logos6.css'

const Logos6 = (props) => {
  return (
    <div
      className={`logos6-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="logos6-container1 thq-section-max-width">
        <div className="logos6-container2">
          <img
            alt={props.logo1Alt}
            src="/orange_minimalist_modern_warm_blur_gradient_non_profit_presentation__1_-removebg-preview-1400w.png"
            className="logos6-logo1 thq-img-ratio-16-9"
          />
          <div className="logos6-container3"></div>
        </div>
      </div>
    </div>
  )
}

Logos6.defaultProps = {
  logo5Alt: 'Game Logo',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Alt: 'Scenarios Logo',
  logo3Alt: 'Lessons Logo',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  rootClassName: '',
  logo7Alt: 'Social Skills Logo',
  logo1Alt: 'Platform Logo',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Alt: 'Emotional Recognition Logo',
  heading1: 'Companies that trust us',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo2Alt: 'Tutorials Logo',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
}

Logos6.propTypes = {
  logo5Alt: PropTypes.string,
  logo7Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  rootClassName: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  heading1: PropTypes.string,
  logo2Src: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo1Src: PropTypes.string,
}

export default Logos6
