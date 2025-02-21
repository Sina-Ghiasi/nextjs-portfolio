export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className={className}
    >
      <defs>
        <linearGradient
          id="a"
          x1="285.98"
          x2="-52.92"
          y1="323.29"
          y2="524.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#a56dcd"></stop>
          <stop offset="0.13" stopColor="#9b5dc8"></stop>
          <stop offset="0.52" stopColor="#8032b9"></stop>
          <stop offset="0.82" stopColor="#6f17af"></stop>
          <stop offset="1" stopColor="#690dac"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="304.33"
          x2="476.6"
          y1="353.69"
          y2="353.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#668a96"></stop>
          <stop offset="0.44" stopColor="#386777"></stop>
          <stop offset="1" stopColor="#013c51"></stop>
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="d"
          x1="292.08"
          x2="476.18"
          y1="685.22"
          y2="685.22"
        ></linearGradient>
        <linearGradient
          id="e"
          x1="119.8"
          x2="292.08"
          y1="670.32"
          y2="670.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#013c51"></stop>
          <stop offset="0.56" stopColor="#386777"></stop>
          <stop offset="1" stopColor="#668a96"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="-3308.01"
          x2="-3278.04"
          y1="546.79"
          y2="516.82"
          gradientTransform="matrix(-1 0 0 1 -2622.38 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#690dac"></stop>
          <stop offset="0.18" stopColor="#6f17af"></stop>
          <stop offset="0.48" stopColor="#8032b9"></stop>
          <stop offset="0.87" stopColor="#9b5dc8"></stop>
          <stop offset="1" stopColor="#a56dcd"></stop>
        </linearGradient>
        <linearGradient
          xlinkHref="#b"
          id="f"
          x1="-3593.08"
          x2="-3593.08"
          y1="305.75"
          y2="777.29"
          gradientTransform="matrix(-1 0 0 1 -3044.93 0)"
        ></linearGradient>
        <linearGradient
          xlinkHref="#c"
          id="g"
          x1="512.06"
          x2="904.2"
          y1="708.72"
          y2="708.72"
        ></linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="h"
          x1="-2848.94"
          x2="-2848.94"
          y1="471.11"
          y2="747.11"
          gradientTransform="matrix(-1 0 0 1 -1978.06 0)"
        ></linearGradient>
        <linearGradient
          xlinkHref="#c"
          id="i"
          x1="512.06"
          x2="904.2"
          y1="312.47"
          y2="312.47"
        ></linearGradient>
      </defs>
      <circle
        cx="512"
        cy="512"
        r="498"
        fill="#f8fafc"
        stroke="#2c3532"
        strokeMiterlimit="10"
        strokeWidth="28"
      ></circle>
      <path
        fill="url(#a)"
        d="m120.21 365.34 184.12-109.78v110.63l-84.45 53.21Z"
      ></path>
      <path
        fill="url(#c)"
        d="m304.33 366.19 172.27 85.62V342.15l-172.27-86.59Z"
      ></path>
      <path
        fill="url(#d)"
        d="m476.18 657.35-184.1 109.78V656.51l84.44-53.2Z"
      ></path>
      <path
        fill="url(#e)"
        d="M292.08 657.82 119.8 572.19v109.66l172.28 86.59Z"
      ></path>
      <path
        fill="#1d1d1d"
        d="M298.42 459.95v-.02l-178.21-94.59v106.42l177.78 90.98v.03l178.19 94.58V550.94z"
      ></path>
      <path
        fill="url(#b)"
        d="m705.2 471.11-66.64 77.46 1.35 47.77 73.48-74.95z"
      ></path>
      <path
        fill="url(#f)"
        d="m584.25 275.57-72.19 73.79v397.75l72.19-76.79z"
      ></path>
      <path fill="url(#g)" d="M837.57 747.11H512.06l72.19-76.79H904.2z"></path>
      <path fill="url(#h)" d="M904.2 670.32V471.11l-66.63 77.46v198.54z"></path>
      <path
        fill="#1d1d1d"
        d="M638.56 548.57h199.01l66.63-76.77-199-.69z"
      ></path>
      <path fill="url(#i)" d="M832.01 349.36H512.06l72.19-73.79H904.2z"></path>
    </svg>
  );
}
