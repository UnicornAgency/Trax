import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

const Logo: React.SFC<TIconProps> = (props) => {
  const { id, viewbox } = props

  return (
    <svg id={id} version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <defs>
          <rect id="path-1" x="108" y="93" width="800" height="800" rx="20"></rect>
          <filter x="-2.2%" y="-1.6%" width="104.4%" height="104.4%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.199699955 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
          </filter>
      </defs>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-253.000000, -123.000000)">
          <g id="trax" transform="translate(253.000000, 123.000000)">
              <g id="Rectangle-3">
                  <use fill="black" fill-opacity="1" filter="url(#filter-2)"></use>
                  <use fill="#F4F0E8" fill-rule="evenodd"></use>
                  <rect stroke="#DDD4C4" stroke-width="5" x="110.5" y="95.5" width="795" height="795" rx="20"></rect>
              </g>
              <rect id="pink" fill="#FF80FA" x="168" y="0" width="140" height="858" rx="10"></rect>
              <rect id="yellow" fill="#F6D262" x="408" y="161" width="140" height="858" rx="10"></rect>
              <rect id="purple" fill="#7E32D5" x="0" y="572" width="858" height="140" rx="10"></rect>
              <rect id="teal" fill="#54E4B3" x="78" y="342" width="858" height="140" rx="10"></rect>
              <rect id="pink-copy" fill="#FF80FA" x="168" y="0" width="140" height="858" rx="10"></rect>
              <rect id="purple-copy" fill="#7E32D5" x="0" y="572" width="858" height="140" rx="10"></rect>
              <rect id="yellow-copy" fill="#F6D262" x="408" y="541" width="140" height="478" rx="10"></rect>
              <path d="M796.106036,291 C791.864579,291 788.50681,289.767618 786.032626,287.302817 C783.558443,284.838016 782.32137,281.563401 782.32137,277.478873 L782.32137,163.394366 L743.724307,163.394366 C735.241393,163.394366 731,159.662009 731,152.197183 C731,144.732357 735.241393,141 743.724307,141 L848.275693,141 C856.758607,141 861,144.732357 861,152.197183 C861,159.662009 856.758607,163.394366 848.275693,163.394366 L809.67863,163.394366 L809.67863,277.478873 C809.67863,281.563401 808.441557,284.838016 805.967374,287.302817 C803.49319,289.767618 800.206111,291 796.106036,291 Z" id="T" fill="#7C705F"></path>
          </g>
      </g>
    </svg>
  )
}

Logo.defaultProps = {
  color: '#fff',
  viewbox: '0 0 936 1019'
}

export default Logo