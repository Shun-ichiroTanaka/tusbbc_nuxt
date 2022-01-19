<template>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    height="50"
    viewBox="0 0 64 38"
  >
    <defs>
      <filter
        id="a"
        x="22"
        y="7.49"
        width="42"
        height="27"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="1" dy="1" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="0.5" result="b" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="c"
        x="0"
        y="0"
        width="22"
        height="38"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="1" dy="1" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="0.5" result="d" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="d" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="translate(-48.5 -890.93)">
      <g transform="matrix(1, 0, 0, 1, 48.5, 890.93)" filter="url(#a)">
        <text
          transform="translate(22.5 27.99)"
          fill="#293c64"
          font-size="21"
          font-family="ArialRoundedMTBold, Arial Rounded MT Bold"
          letter-spacing="0.215em"
        >
          <tspan x="0" y="0">xia</tspan>
        </text>
      </g>
      <g transform="matrix(1, 0, 0, 1, 48.5, 890.93)" filter="url(#c)">
        <text
          transform="translate(0.5 28.5)"
          fill="#293c64"
          font-size="28"
          font-family="Krungthep"
        >
          <tspan x="0" y="0">A</tspan>
        </text>
      </g>
    </g>
  </svg>
</template>
<style lang="scss" scoped></style>
