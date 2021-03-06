/** @jsx createElement **/
import { createElement, SFC } from 'react'

interface Props {
  id?: string
  viewbox?: string
}

const ReportIcon: SFC<Props> = props => {
  const { id, viewbox } = props

  return (
    <svg id={id} version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <path d="m47.605 94.793l-41.148-16.148v-73.438l41.148 16.148z" />
      <path d="m52.605 94.793l41.145-16.148v-73.438l-41.145 16.148z" />
      <path d="m62.918 94.793l27.707-3.125v-6.4609z" />
      <path d="m36.355 94.793l-26.773-3.125v-6.4609z" />
    </svg>
  )
}

ReportIcon.defaultProps = {
  viewbox: '0 0 100 100'
}

export default ReportIcon
