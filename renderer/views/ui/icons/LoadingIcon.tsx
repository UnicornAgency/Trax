import * as React from 'react'

interface Props {
  id?: string
  viewbox?: string
}

const LoadingIcon: React.SFC<Props> = (props) => {
  const { id, viewbox } = props

  return (
    <svg id={id} version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <path d="m33.398 28.301c4.8008-3.6016 10.5-5.6016 16.5-5.6016 15 0 27.301 12.199 27.301 27.301 0 1.3008-0.10156 2.6016-0.30078 3.8984l-2.8008-2.8984c-1.1992-1.1992-3.1016-1.1992-4.1992 0-1.1992 1.1992-1.1992 3.1016 0 4.1992l9.8008 10 10.898-9.8984c1.1992-1.1016 1.3008-3 0.19922-4.1992-1.1016-1.1992-3-1.3008-4.1992-0.19922l-3.5 3.1992c0.19922-1.3984 0.30078-2.6992 0.30078-4.1016 0-18.301-14.898-33.301-33.301-33.301-7.3984 0-14.301 2.3008-20.102 6.8008-1.3008 1-1.6016 2.8984-0.60156 4.1992 0.80469 1.3008 2.707 1.6016 4.0039 0.60156z"/>
      <path d="m11.5 49.5c0.69922 0 1.3984-0.30078 2-0.80078l3.3984-3.1016c-0.19922 1.3984-0.30078 2.8984-0.30078 4.3984 0 18.301 14.898 33.301 33.301 33.301 7.5 0 14.602-2.5 20.5-7.1016 1.3008-1 1.5-2.8984 0.5-4.1992-1-1.3008-2.8984-1.5-4.1992-0.5-4.8008 3.8008-10.699 5.8008-16.801 5.8008-15 0-27.301-12.199-27.301-27.301 0-1.3984 0.10156-2.8984 0.30078-4.3008l2.8008 2.8984c1.1992 1.1992 3.1016 1.1992 4.1992 0 1.1992-1.1992 1.1992-3.1016 0-4.1992l-9.8008-10-10.598 9.9062c-1.1992 1.1016-1.3008 3-0.19922 4.1992 0.59766 0.69922 1.3984 1 2.1992 1z"/>
    </svg>
  )
}

LoadingIcon.defaultProps = {
  viewbox: '0 0 100 100'
}

export default LoadingIcon
