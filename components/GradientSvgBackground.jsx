'use client';

import React from 'react';

/**
 * Exact background color gradient SVG extracted from public/assets/Gradient SVG.svg
 * Features the signature #1D0B06 deep chocolate base, dual glowing arched wings,
 * and high-power gaussian blurred orange/peach radiance rising from bottom-center.
 */
export default function GradientSvgBackground() {
  return (
    <svg
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="card-gradient-svg"
      aria-hidden="true"
    >
      {/* Base deep background */}
      <rect width="1920" height="1080" fill="#1D0B06" />

      <g clipPath="url(#clip1_gradient_card)">
        <rect x="-159" y="-89" width="2239" height="1257.9" rx="70.0782" fill="#1D0B06" />

        {/* Dual Arched Glowing Ribbon Wings */}
        <path
          d="M221.417 808.429C235.702 929.21 332.458 1028.76 454.575 1040.99C605.025 1056.08 708.225 949.821 805.575 853.243C900.846 758.744 992.613 660.296 1089.01 566.747C1190.1 468.685 1277.39 390.401 1427.48 387.609C1633.76 383.749 1787.95 530.753 1808.62 733.412C1836.9 1010.64 1563.79 1213.06 1303.31 1128.84C1220.72 1102.14 1158.77 1048.15 1099.61 987.151C1059.23 945.515 1018.72 894.256 973.22 858.767C970.399 856.569 960.717 848.729 958.133 848.551C954.748 848.343 948.482 854.58 945.541 857.193C903.756 894.494 865.773 936.783 824.73 975.034C698.603 1092.49 564.25 1183.66 382.588 1132.08C141.381 1063.56 26.9846 755.715 175.296 549.285C310.154 361.594 602.59 325.125 760.791 504.292C868.416 626.202 836.728 804.093 656.076 808.429L221.447 808.37L221.417 808.429ZM222.932 710.782H662.045C682.537 710.782 698.425 686.875 701.573 668.73C712.472 605.978 662.639 546.76 610.193 519.943C466.306 446.441 273.656 526.506 228.218 681.797C226.436 687.885 221.892 703.15 221.833 708.674C221.833 709.862 221.951 709.98 222.932 710.752V710.782ZM1409.6 493.601C1329.92 498.828 1266.78 542.187 1209.38 593.475C1149.42 647.021 1094.83 706.832 1040.16 765.605C1038.23 768.188 1039.21 771.425 1041.23 773.712C1114.61 841.542 1175.28 932.982 1256.42 991.517C1476.84 1150.46 1783.56 938.803 1688.82 675.026C1645.67 554.927 1537.39 485.256 1409.63 493.601H1409.6Z"
          fill="url(#paint0_linear_card)"
        />

        {/* Primary Radiant Bottom Flare (White to #F14C0C, 227px Gaussian Blur) */}
        <g filter="url(#filter0_f_card)">
          <path
            d="M-291.593 224.6L206.283 482.138L960.5 510.169L1718.22 482.138L2171.1 200.073L3297.61 1343.22L-1402.89 1374.76L-291.593 224.6Z"
            fill="url(#paint1_linear_card)"
          />
        </g>

        {/* Soft Peach Atmospheric Base Haze */}
        <g filter="url(#filter1_f_card)">
          <path
            d="M-328.939 932.39L35.4674 1063.79H1823.34L2223.66 913.995L2200.89 1291.54L-276.381 1241.61L-328.939 932.39Z"
            fill="#FDC6AE"
          />
        </g>

        {/* Deep Peach Low-Horizon Bloom */}
        <g filter="url(#filter2_f_card)">
          <path
            d="M-314.924 932.39L612.737 1570.98L1044.59 1521.49L2237.68 913.995L2214.9 1291.54L-262.365 1241.61L-314.924 932.39Z"
            fill="#FDC6AE"
          />
        </g>
      </g>

      <defs>
        <filter
          id="filter0_f_card"
          x="-1858.4"
          y="-255.436"
          width="5611.52"
          height="2085.7"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="227.754" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter1_f_card"
          x="-449.824"
          y="793.11"
          width="2794.37"
          height="619.317"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="60.4425" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter2_f_card"
          x="-577.717"
          y="651.201"
          width="3078.19"
          height="1182.57"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="131.397" result="effect1_foregroundBlur" />
        </filter>

        <linearGradient
          id="paint0_linear_card"
          x1="1013.93"
          y1="992.833"
          x2="1013.93"
          y2="416.439"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#99321A" stopOpacity="0" />
          <stop offset="0.996331" stopColor="#FF8935" stopOpacity="0.23" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_card"
          x1="960.5"
          y1="1181.17"
          x2="960.5"
          y2="749.311"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F14C0C" />
        </linearGradient>

        <clipPath id="clip1_gradient_card">
          <rect x="-159" y="-89" width="2239" height="1257.9" rx="70.0782" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
