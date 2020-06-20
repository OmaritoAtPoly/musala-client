import React from "react";

const CheckIn = props => (
  <svg width={53.425} height={53.425} viewBox="0 0 53.425 53.425" {...props}>
    <defs>
      <clipPath id="a">
        <path
          data-name="Rect\xE1ngulo 456"
          fill="#fff"
          opacity={0.54}
          d="M0 0H53.425V53.425H0z"
        />
      </clipPath>
      <filter
        id="b"
        x={9.259}
        y={16.344}
        width={48.123}
        height={34.956}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={1} dy={1} />
        <feGaussianBlur stdDeviation={1.5} result="blur" />
        <feFlood floodOpacity={0.078} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name="Enmascarar grupo 80">
      <g data-name="Grupo 804" clipPath="url(#a)">
        <g data-name="Grupo 789">
          <g
            transform="translate(2.226 6.678) translate(0 13.166) translate(-2.23 -19.84)"
            filter="url(#b)"
          >
            <g data-name="Trazado 113" fill="#fff">
              <path
                d="M38.873 25.706H.25V.25h38.623v25.456z"
                transform="translate(12.76 19.84)"
              />
              <path
                d="M.5.5v24.956h38.123V.5H.5M0 0h39.123v25.956H0V0z"
                fill="#dfdfdf"
                transform="translate(12.76 19.84)"
              />
            </g>
          </g>
          <g
            data-name="Grupo 802"
            transform="translate(2.226 6.678) translate(0 13.166) translate(15.047 4.514)"
            fill="#dfdfdf"
          >
            <path data-name="Rect\xE1ngulo 265" d="M0 0H7.9V7.147H0z" />
            <path
              data-name="Rect\xE1ngulo 270"
              transform="translate(0 9.781)"
              d="M0 0H7.9V7.147H0z"
            />
            <path
              data-name="Rect\xE1ngulo 266"
              transform="translate(11.285)"
              d="M0 0H7.9V7.147H0z"
            />
            <path
              data-name="Rect\xE1ngulo 269"
              transform="translate(11.285 9.781)"
              d="M0 0H7.9V7.147H0z"
            />
            <path
              data-name="Rect\xE1ngulo 267"
              transform="translate(22.571)"
              d="M0 0H7.9V7.147H0z"
            />
            <path
              data-name="Rect\xE1ngulo 268"
              transform="translate(22.571 9.781)"
              d="M0 0H7.9V7.147H0z"
            />
          </g>
          <g
            data-name="Grupo 784"
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeWidth={1}
          >
            <path
              data-name="Trazado 109"
              d="M7.668 0l4.633 4.632-4.633 4.633"
              strokeLinejoin="round"
              transform="translate(2.226 6.678) translate(0 13.166) translate(0 8.486)"
            />
            <path
              data-name="Trazado 110"
              d="M12.301 4.632H.001"
              transform="translate(2.226 6.678) translate(0 13.166) translate(0 8.486)"
            />
          </g>
        </g>
        <g
          data-name="Grupo 803"
          transform="translate(2.226 6.678) translate(10.533)"
        >
          <path
            data-name="Rect\xE1ngulo 271"
            d="M2 0h35.123a2 2 0 012 2v7.4H0V2a2 2 0 012-2z"
            transform="translate(0 3.762)"
            fill="#ee1e1e"
          />
          <path
            data-name="Rect\xE1ngulo 272"
            transform="translate(6.395 .376)"
            fill="#dfdfdf"
            d="M0 0H3.386V7.9H0z"
          />
          <path
            data-name="Rect\xE1ngulo 273"
            transform="translate(29.342)"
            fill="#dfdfdf"
            d="M0 0H3.386V7.9H0z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default CheckIn;
