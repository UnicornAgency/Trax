/** @jsx createElement **/
import { createElement, SFC } from 'react'

interface Props {
  id?: string
  viewbox?: string
  color?: string
}

const ChevronRightIcon: SFC<Props> = props => {
  const { id, viewbox } = props

  return (
    <svg id={id} version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <path d="m69.203 47.047l-32.75-32.75c-1.5625-1.5625-4.0938-1.5625-5.6562 0s-1.5625 4.0938 0 5.6562l29.934 29.934-29.945 30.172c-1.5547 1.5664-1.5469 4.1016 0.019532 5.6562 0.78125 0.77344 1.8008 1.1602 2.8164 1.1602 1.0273 0 2.0586-0.39453 2.8398-1.1836l32.75-33c1.5547-1.5625 1.5508-4.0859-0.007813-5.6445z" />
    </svg>
  )
}

ChevronRightIcon.defaultProps = {
  color: '#000',
  viewbox: '0 0 100 100'
}

export default ChevronRightIcon
