/** @jsx createElement **/
import { createElement, SFC } from 'react'

interface Props {
  id?: string
  viewbox?: string
  color?: string
}

const Logo: SFC<Props> = props => {
  const { id, viewbox } = props

  return (
    <svg id={id} version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-23.000000, -15.000000)">
          <g transform="translate(23.000000, 15.000000)">
            <path
              d="M220.235899,481.416432 L221.96064,464.595031 C222.409674,459.779768 218.965259,455.508254 214.255884,455.048589 C209.551985,454.54408 205.335452,458.025196 204.848086,462.846065 L203.125232,479.597993 C192.209507,478.036152 181.533904,475.730648 171.151376,472.734447 C171.151739,472.733191 171.152103,472.73193 171.152467,472.73067 L176.569186,456.31014 C178.057664,451.774998 175.56754,446.913548 170.973402,445.425801 C166.384859,443.954645 161.466165,446.415789 159.960899,450.956461 L154.57042,467.275082 C144.306171,463.467763 134.377502,458.969866 124.840824,453.837815 L132.810458,440.573086 C135.239116,436.582869 133.827493,431.442656 129.681548,429.126619 C125.513372,426.805232 120.172549,428.185227 117.788353,432.218235 L110.017262,445.152505 C101.071674,439.465709 92.5332995,433.19568 84.4556351,426.395926 L104.634991,402.718933 C112.314953,394.069192 99.4893058,382.391206 91.8093435,391.040947 C86.890748,396.580632 80.1655358,404.494223 71.6337068,414.781719 C64.0819162,407.425121 57.0192502,399.568877 50.4990702,391.26636 L62.4901,382.343907 C71.3574003,375.744832 61.6706102,362.160395 52.80331,368.764835 L40.6647154,377.79709 C34.4562744,368.635434 28.8722907,359.016088 23.9738618,349.000164 L39.6353185,342.62685 C44.1761648,340.840754 46.2489143,335.975721 44.2213473,331.837587 C42.2559064,327.74099 37.0316741,325.877013 32.5755451,327.699453 L17.2625799,333.969705 C13.0588579,323.596115 9.56834742,312.857141 6.85184685,301.813596 L23.1920585,298.511025 C27.9684863,297.596845 30.9408481,293.005051 29.7290808,288.47072 C28.7564067,284.046091 24.2353738,281.230417 19.6273979,282.186388 L3.4388842,285.458299 C1.56164846,274.541959 0.430973566,263.370208 0.101297114,251.997496 C0.182260054,251.999127 0.263833109,252 0.346013059,252 C11.4740305,252 23.5259695,252 34.6539869,252 C45.7820044,252 45.7820044,236 34.6539869,236 L0.346013059,236 C0.28622973,236 0.226767577,236.000462 0.167626599,236.00138 C0.559001958,225.513712 1.63163368,215.200446 3.34256599,205.104538 L19.8226402,208.934089 L21.5996199,208.934089 C32.879107,210.24788 34.6560867,191.500851 23.3765996,190.187059 L7.28631316,186.446889 C9.80699533,176.525419 12.9534287,166.853851 16.6811432,157.476655 L32.4706458,164.164318 C43.2757455,168.742432 50.45269,153.228918 39.6475903,148.656228 L23.6100106,141.875847 C23.5925127,141.868209 23.5750237,141.860625 23.5575438,141.853094 C28.8100654,131.002455 34.8655869,120.613191 41.6469497,110.762459 L52.6713812,120.946417 C60.8635593,128.508664 71.8789492,115.977855 63.686771,108.415608 L51.5697143,97.3781732 C57.6253999,89.7812062 64.1382188,82.5648131 71.06656,75.7706051 C71.1176189,75.8312579 71.1697085,75.8917671 71.2228425,75.9521209 L94.6179855,102.097155 C101.898423,110.35442 114.035938,99.2055269 106.7555,90.948262 C99.5030629,82.722754 90.5237839,73.1134154 83.2775074,64.8825225 C83.2299344,64.8284854 83.1821514,64.7752852 83.1341652,64.7229157 C91.5138114,57.5643307 100.398713,50.9798496 109.728013,45.0303309 L117.817879,58.1278474 C123.791381,66.9361974 138.058624,59.2080183 132.89386,49.9769927 L124.480347,36.3554909 C157.95435,18.2675575 196.276628,8 237,8 C367.89984,8 474,114.094743 474,245 C474,375.89984 367.89984,482 237,482 C231.363811,482 225.773615,481.803314 220.235899,481.416432 Z"
              fill="#BDB3A2"
            />

            <path
              d="M413,246.502705 C413,344.528686 333.528686,424 235.502705,424 C137.471314,424 58,344.528686 58,246.502705 C58,148.471314 137.471314,69 235.502705,69 C333.528686,69 413,148.471314 413,246.502705"
              fill="#F4F0E8"
            />

            <path
              d="M236.449677,0.00140269416 C209.214536,-0.0202470255 182.190017,4.52619411 156.450837,13.4458786 C146.324743,17.3590655 151.557909,32.5842308 161.93783,29.4287842 C224.001333,7.97391197 292.286308,14.3768166 349.289464,47.0191814 C406.292621,79.6669587 446.478361,135.35545 459.536971,199.83914 C472.595581,264.32283 457.279527,331.3233 417.49343,383.672323 C377.685731,435.999695 317.30721,468.598761 251.803535,473.080252 C247.142832,473.248038 243.492038,477.161225 243.659456,481.832152 C243.832274,486.508491 247.731496,490.167294 252.3976,489.994096 L252.986263,489.994096 C384.965717,481.474931 486.329265,369.421395 481.857582,236.962997 C477.385899,104.488362 368.69916,-0.442416559 236.449677,0.00140269416 Z"
              fill="#99896F"
            />

            <path
              d="M210.820132,312.999782 C213.06378,313.015976 215.242394,312.13068 216.83029,310.549022 L343.851098,184.032585 C350.647074,176.124295 339.851552,165.371181 331.912074,172.140461 L210.820132,292.67035 L149.087304,231.180025 C141.153246,224.410745 130.352304,235.169258 137.14828,243.072149 L204.891266,310.549022 C206.479162,312.109087 208.598162,312.999782 210.820132,312.999782"
              stroke="#34A680"
              strokeWidth="5"
              fill="#34A680"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

Logo.defaultProps = {
  color: '#fff',
  viewbox: '0 0 530 530'
}

export default Logo
