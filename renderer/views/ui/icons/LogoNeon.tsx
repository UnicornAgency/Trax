import * as React from 'react'

type TIconProps = {
  id?: string;
  viewbox?: string;
  color?: string;
}

const Logo: React.SFC<TIconProps> = (props) => {
  const { id, viewbox } = props

  return (
    <svg id={id} width="504px" height="140px" version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M209.270616,15 C210.657086,15 211.802432,16.1542056 211.802432,17.5514019 L211.802432,29.5794393 C211.802432,31.0373832 210.657086,32.1308411 209.270616,32.1308411 L198.419976,32.1308411 C197.033505,32.1308411 195.88816,31.0373832 195.88816,29.5794393 C195.88816,28.182243 197.033505,27.0280374 198.419976,27.0280374 L206.7388,27.0280374 L206.7388,20.1028037 L188.292712,20.1028037 L188.292712,103.448598 C188.292712,104.906542 187.147367,106 185.760896,106 L173.101817,106 C171.715346,106 170.570001,104.906542 170.570001,103.448598 L170.570001,20.1028037 L152.063632,20.1028037 L152.063632,27.0280374 L160.442737,27.0280374 C161.829208,27.0280374 162.974553,28.182243 162.974553,29.5794393 C162.974553,31.0373832 161.829208,32.1308411 160.442737,32.1308411 L149.531816,32.1308411 C148.145345,32.1308411 147,31.0373832 147,29.5794393 L147,17.5514019 C147,16.1542056 148.145345,15 149.531816,15 L173.101817,15 C174.488287,15 175.633633,16.1542056 175.633633,17.5514019 L175.633633,100.897196 L183.22908,100.897196 L183.22908,17.5514019 C183.22908,16.1542056 184.374426,15 185.760896,15 L209.270616,15 Z M260.184969,15 C281.161375,15 292.835201,27.6962617 292.835201,43.8551402 C292.835201,53.8785047 288.822323,62.2616822 281.647784,67.3037383 C281.161375,67.6074766 280.674966,67.7897196 280.127755,67.7897196 C278.729328,67.7897196 277.574106,66.635514 277.574106,65.1775701 C277.574106,64.3878505 277.999714,63.5981308 278.729328,63.1121495 C284.748644,58.8598131 287.727902,51.8130841 287.727902,43.8551402 C287.727902,29.2149533 276.844491,20.1028037 260.184969,20.1028037 L233.858059,20.1028037 L233.858059,100.897196 L241.519007,100.897196 L241.519007,59.2242991 C241.519007,57.7663551 242.67423,56.6728972 244.072657,56.6728972 L244.619867,56.6728972 C246.018294,56.6728972 247.295119,57.2803738 248.146336,58.4345794 L279.33734,100.897196 L288.335914,100.897196 L257.874524,59.8317757 C257.570518,59.4672897 257.448916,59.0420561 257.448916,58.6168224 C257.448916,57.5841121 258.300132,56.6728972 259.455355,56.6728972 L260.488975,56.6728972 C271.676391,56.6728972 274.959655,50.6588785 274.959655,43.8551402 C274.959655,36.2009346 269.54835,32.1308411 261.096986,32.1308411 L246.626306,32.1308411 L246.626306,47.1962617 C246.626306,48.5934579 245.471084,49.7476636 244.072657,49.7476636 C242.67423,49.7476636 241.519007,48.5934579 241.519007,47.1962617 L241.519007,29.5794393 C241.519007,28.1214953 242.67423,27.0280374 244.072657,27.0280374 L261.096986,27.0280374 C272.64921,27.0280374 280.066954,33.6495327 280.066954,43.8551402 C280.066954,53.5140187 274.655649,60.0140187 265.353069,61.3504673 L296.118465,102.841121 C296.422471,103.205607 296.544073,103.630841 296.544073,103.995327 C296.544073,105.028037 295.692856,106 294.537634,106 L278.911731,106 C277.513304,106 276.23648,105.331776 275.446064,104.238318 L246.626306,64.9953271 L246.626306,103.448598 C246.626306,104.845794 245.471084,106 244.072657,106 L231.304409,106 C229.905982,106 228.75076,104.845794 228.75076,103.448598 L228.75076,17.5514019 C228.75076,16.0934579 229.905982,15 231.304409,15 L260.184969,15 Z M352.610207,15 C354.240197,15 355.628707,15.9719626 356.172037,17.4906542 L387.141845,103.205607 C387.624805,104.542056 386.658885,106 385.210005,106 L372.290826,106 C370.660836,106 369.272326,104.96729 368.728996,103.509346 L361.484596,83.3411215 L318.199309,83.3411215 L311.860459,100.897196 L319.527449,100.897196 L322.787429,91.9065421 C323.149649,90.9345794 324.115568,90.2663551 325.141858,90.2663551 C326.892588,90.2663551 328.160358,92.0280374 327.556658,93.6682243 L323.994828,103.509346 C323.451499,104.96729 322.062989,106 320.432999,106 L307.574189,106 C306.125309,106 305.15939,104.542056 305.64235,103.205607 L313.731929,80.728972 C314.275259,79.2102804 315.663769,78.2383178 317.293759,78.2383178 L362.390146,78.2383178 C364.020136,78.2383178 365.408646,79.2102804 365.951976,80.728972 L373.196376,100.897196 L380.923735,100.897196 L351.704657,20.1028037 L341.079538,20.1028037 L324.417418,66.2102804 L355.326857,66.2102804 L346.392097,41.4859813 L340.536208,57.5841121 C340.173988,58.6168224 339.208068,59.2850467 338.181778,59.2850467 C336.431048,59.2850467 335.163278,57.5233645 335.766978,55.8831776 L344.641367,31.4018692 C344.943217,30.5514019 345.667657,30.1869159 346.392097,30.1869159 C347.116537,30.1869159 347.840977,30.6121495 348.142827,31.4018692 L361.544966,68.5186916 C362.027926,69.8551402 361.062006,71.3130841 359.613127,71.3130841 L320.131149,71.3130841 C318.682269,71.3130841 317.716349,69.8551402 318.199309,68.5186916 L336.612158,17.4906542 C337.155488,15.9719626 338.543998,15 340.173988,15 L352.610207,15 Z M457.946373,106 C456.48435,106 455.083244,105.271028 454.291315,103.995327 L428.157651,63.4158879 L404.034269,100.897196 L412.867325,100.897196 L426.086451,80.4252336 C426.573793,79.635514 427.365722,79.271028 428.218569,79.271028 C429.619674,79.271028 430.777109,80.4252336 430.777109,81.8224299 C430.777109,82.3084112 430.655274,82.7943925 430.350686,83.2196262 L416.948807,103.995327 C416.156878,105.271028 414.755772,106 413.293749,106 L398.125259,106 C396.602318,106 395.749471,104.359813 396.5414,103.084112 L426.39104,56.7336449 C426.817463,56.0654206 427.487557,55.7616822 428.157651,55.7616822 C428.827745,55.7616822 429.497839,56.0654206 429.924262,56.7336449 L458.372796,100.897196 L467.205853,100.897196 L441.437695,60.8037383 C441.011271,60.1962617 440.767601,59.4065421 440.767601,58.6775701 C440.767601,57.9485981 441.011271,57.2196262 441.437695,56.5514019 L464.890983,20.1028037 L456.118844,20.1028037 L437.417131,49.1401869 C436.990707,49.7476636 436.320614,50.0514019 435.65052,50.0514019 C434.980426,50.0514019 434.310332,49.7476636 433.883908,49.1401869 L415.121278,20.1028037 L406.349139,20.1028037 L422.857817,45.6775701 C423.162405,46.1028037 423.28424,46.588785 423.28424,47.0747664 C423.28424,48.4719626 422.126805,49.6261682 420.7257,49.6261682 C419.872853,49.6261682 419.080924,49.2616822 418.593583,48.4719626 L398.85627,17.9158879 C398.673517,17.6121495 398.551682,17.2476636 398.551682,16.8831776 C398.551682,15.911215 399.343611,15 400.440129,15 L415.547701,15 C417.009724,15 418.41083,15.728972 419.202759,16.9439252 L435.65052,42.3971963 L452.037362,17.0046729 C452.829292,15.728972 454.230397,15 455.69242,15 L470.799993,15 C471.89651,15 472.688439,15.911215 472.688439,16.8831776 C472.688439,17.2476636 472.627522,17.5514019 472.383851,17.9158879 L446.128352,58.6775701 L474.698721,103.084112 C475.490651,104.359813 474.637804,106 473.114863,106 L457.946373,106 Z" id="path-1"></path>
            <filter x="-9.3%" y="-33.5%" width="118.6%" height="167.0%" filterUnits="objectBoundingBox" id="filter-2">
                <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.48627451   0 0 0 0 0.188235294   0 0 0 0 0.831372549  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter2"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowSpreadOuter2" result="shadowOffsetOuter2"></feOffset>
                <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>
                <feComposite in="shadowBlurOuter2" in2="SourceAlpha" operator="out" result="shadowBlurOuter2"></feComposite>
                <feColorMatrix values="0 0 0 0 0.203921569   0 0 0 0 0.176470588   0 0 0 0 0.129411765  0 0 0 1 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                </feMerge>
            </filter>
            <path d="M59.9106461,0.000343516937 C92.2738127,-0.108346913 118.870869,25.5889867 119.965148,58.0317544 C121.059427,90.4705456 96.2544504,117.912228 63.9573635,119.998554 L63.8133099,119.998554 C62.6714536,120.04097 61.7172635,119.144937 61.6749726,117.999711 C61.6340032,116.85581 62.5274,115.897479 63.6679346,115.856388 C79.6975348,114.75888 94.4729432,106.775436 104.214404,93.9605688 C113.950579,81.1404001 117.698617,64.7321217 114.503005,48.9401976 C111.307393,33.1482735 101.473421,19.5102756 87.5240078,11.5149016 C73.5745949,3.52085304 56.8643745,1.95279477 41.676629,7.20704919 C39.1365275,7.97981163 37.855904,4.2511997 40.3338907,3.29286823 C46.6326023,1.1084557 53.2458531,-0.00495845523 59.9106461,0.000343516937 Z M8.93033507,70.61768 C9.24193236,71.7512628 8.47761076,72.8992112 7.24938646,73.1277561 L2.88283252,73.985779 L2.42451902,73.985779 C-0.484653881,74.2704807 -0.942967382,70.1893216 1.96620552,69.9046199 L6.33275946,69.046597 C7.51766754,68.8076043 8.68021886,69.5115227 8.93033507,70.61768 Z M12.8167876,81.2619793 C13.2938622,82.3414925 12.8061564,83.6106316 11.737722,84.0765695 L7.93707222,85.7913295 C5.40419162,86.9345028 3.72180609,83.0607164 6.25468668,81.9175431 L10.0765988,80.182466 C11.1250998,79.7070468 12.3543309,80.1933018 12.8167876,81.2619793 Z M14.9207723,90.3921856 C16.989809,88.9245322 19.2500601,91.9432961 17.1810233,93.4097572 L14.078694,95.6082567 C12.0096573,97.0747178 9.75063198,94.0571461 11.818443,92.590685 L14.9207723,90.3921856 Z M18.6606871,101.52494 C20.9773882,98.9874897 22.7921458,97.048242 24.1049599,95.7071969 C26.074181,93.6956293 29.3628085,96.4114401 27.3935874,98.4230077 L21.9267123,104.240751 C21.1328083,105.152506 19.6650746,105.258856 18.7270812,104.474202 C17.7834372,103.693439 17.7551844,102.340721 18.6606871,101.52494 Z M34.0034341,105.29074 C34.9601908,105.888427 35.2859498,107.214934 34.7254904,108.244667 L32.7209184,111.975726 C31.3486267,114.305739 28.0666691,112.261456 29.2542786,109.819635 L31.2588506,106.088577 C31.8090498,105.0478 33.0415474,104.691673 34.0034341,105.29074 Z M44.4278439,110.100188 C45.6263149,110.450247 46.2759124,111.594117 45.8876136,112.661209 L44.4745565,116.524863 C44.1198325,117.633598 42.8031202,118.258237 41.5710745,117.897769 C40.344868,117.541204 39.6952704,116.347882 40.1405002,115.263873 L41.5550171,111.40152 C41.9476951,110.333127 43.2308327,109.754034 44.4278439,110.100188 Z M53.9620747,111.012494 C55.2013839,111.130694 56.1078089,112.229083 55.9896422,113.467294 L55.5169754,117.971843 C55.3973677,119.12645 54.4246541,120.005738 53.264603,119.999972 L53.0167412,119.999972 C51.778873,119.870241 50.8839765,118.76032 51.0122306,117.522109 L51.4863384,113.01756 C51.6145925,111.777907 52.7242066,110.882763 53.9620747,111.012494 Z M10.8725849,62 C8.03603145,62 4.96396855,62 2.12741509,62 C-0.709138364,62 -0.709138364,58 2.12741509,58 L10.8725849,58 C13.7091384,58 13.7091384,62 10.8725849,62 Z M2.77098315,49.9561858 C-0.129456395,49.2722942 0.785811991,44.3801998 3.68625153,45.0656564 L8.03969705,46.0922764 C10.9401366,46.4350047 10.4831989,51.325534 7.58275941,50.9828057 L7.12582176,50.9828057 L2.77098315,49.9561858 Z M6.2370182,38.0742867 C3.71064838,36.9039928 5.44069149,33.0473117 7.96706132,34.2189616 L11.7406095,35.9140571 C14.2829859,37.0572295 12.5942931,40.9356079 10.0519167,39.7910794 L6.2370182,38.0742867 Z M22.5693768,15.6703541 C24.380946,17.5845152 26.6257657,19.8192451 28.4388751,21.7321539 C30.2589845,23.6524481 27.2246058,26.245214 25.4044964,24.3249199 L19.5557106,18.2446793 C17.7511356,16.3379083 20.7648018,13.7635831 22.5693768,15.6703541 Z M14.5494166,23.8121135 L17.5559439,26.5507612 C19.5621916,28.40274 16.8645451,31.4715094 14.8582974,29.6195307 L11.8701012,26.8591466 C9.88065639,25.0199289 12.5599718,21.9728957 14.5494166,23.8121135 Z M32.7342629,8.90350228 L34.7447368,12.1946316 C35.9366055,14.3485376 32.6441648,16.1517794 31.2656645,14.0964977 L29.2551905,10.8053684 C28.0633219,8.6514624 31.3570496,6.84822061 32.7342629,8.90350228 Z M52.6855302,76.9999466 C52.1379357,76.9999466 51.6157176,76.7819444 51.2243878,76.4001102 L34.529434,59.8847918 C32.8545962,57.9505177 35.5164397,55.3173153 37.4717527,56.974132 L52.6855302,72.0242114 L82.528094,42.523889 C84.4847426,40.8670723 87.1452505,43.4989534 85.4704127,45.4345487 L54.1667065,76.4001102 C53.7753768,76.7872293 53.2384671,77.0039102 52.6855302,76.9999466 Z" id="path-3"></path>
            <filter x="-12.9%" y="-12.9%" width="125.8%" height="125.8%" filterUnits="objectBoundingBox" id="filter-4">
                <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.317647059   0 0 0 0 0.698039216   0 0 0 0 0.580392157  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter2"></feMorphology>
                <feOffset dx="0" dy="0" in="shadowSpreadOuter2" result="shadowOffsetOuter2"></feOffset>
                <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>
                <feComposite in="shadowBlurOuter2" in2="SourceAlpha" operator="out" result="shadowBlurOuter2"></feComposite>
                <feColorMatrix values="0 0 0 0 0.203921569   0 0 0 0 0.176470588   0 0 0 0 0.129411765  0 0 0 1 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                </feMerge>
            </filter>
        </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Neon-B" transform="translate(-33.000000, -30.000000)" fillRule="nonzero">
          <g id="Group" transform="translate(43.000000, 40.000000)">
            <g id="TRAX">
              <use fill="black" fillOpacity="1" filter="url(#filter-2)" href="#path-1"></use>
              <use stroke="#7C30D4" strokeWidth="1" fill="#D8B6FF" href="#path-1"></use>
            </g>
            <g id="Combined-Shape">
              <use fill="black" fillOpacity="1" filter="url(#filter-4)" href="#path-3"></use>
              <use stroke="#30D4AD" strokeWidth="1" fill="#B6FFE2" href="#path-3"></use>
            </g>
          </g>
        </g>
      </g>

    </svg>
  )
}

Logo.defaultProps = {
  color: '#fff',
  viewbox: '0 0 504 140'
}

export default Logo
