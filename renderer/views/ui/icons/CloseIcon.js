import React from 'react'
import PropTypes from 'prop-types'

const CloseIcon = ({ id, viewbox, ...props }) => {
  return (
    <svg
      {...props}
      id={id}
      version="1.1"
      viewBox={viewbox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m50 86.602c20.199 0 36.602-16.398 36.602-36.602 0-20.199-16.398-36.602-36.602-36.602-20.199 0-36.602 16.402-36.602 36.602s16.402 36.602 36.602 36.602zm0-67.203c16.898 0 30.602 13.699 30.602 30.602 0 16.898-13.699 30.602-30.602 30.602-16.898 0-30.602-13.703-30.602-30.602s13.703-30.602 30.602-30.602z" />
        <path d="m35.898 64.102c0.60156 0.60156 1.3984 0.89844 2.1016 0.89844 0.69922 0 1.5-0.30078 2.1016-0.89844l9.8984-9.8984 9.8984 9.8984c0.60156 0.60156 1.3984 0.89844 2.1016 0.89844 0.69922 0 1.5-0.30078 2.1016-0.89844 1.1992-1.1992 1.1992-3.1016 0-4.1992l-9.9023-9.9023 9.8984-9.8984c1.1992-1.1992 1.1992-3.1016 0-4.1992-1.1992-1.1992-3.1016-1.1992-4.1992 0l-9.8984 9.8984-9.8984-9.8984c-1.1992-1.1992-3.1016-1.1992-4.1992 0-1.1992 1.1992-1.1992 3.1016 0 4.1992l9.8984 9.8984-9.8984 9.8984c-1.2031 1.2031-1.2031 3.1016-0.003906 4.2031z" />
      </g>
    </svg>
  )
}

CloseIcon.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  viewBox: PropTypes.string,
}

CloseIcon.defaultProps = {
  color: '#fff',
  viewbox: '0 0 100 100',
}

export default CloseIcon
