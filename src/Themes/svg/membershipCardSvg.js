import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68" height="49.818" viewBox="0 0 68 49.818">
  <defs>
    <filter id="Rectangle_89" x="0" y="0" width="68" height="49.818" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <clipPath id="clip-path">
      <rect id="Rectangle_90" data-name="Rectangle 90" width="10.999" height="10.999" fill="#fff"/>
    </clipPath>
  </defs>
  <g id="Group_132" data-name="Group 132" transform="translate(8.754 6)">
    <g transform="matrix(1, 0, 0, 1, -8.75, -6)" filter="url(#Rectangle_89)">
      <g id="Rectangle_89-2" data-name="Rectangle 89" transform="translate(9 6)" fill="#80af46" stroke="#40485a" stroke-width="1.5">
        <rect width="50" height="31.818" rx="3" stroke="none"/>
        <rect x="0.75" y="0.75" width="48.5" height="30.318" rx="2.25" fill="none"/>
      </g>
    </g>
    <g id="Group_74" data-name="Group 74" transform="translate(17.922 4.949)">
      <circle id="Ellipse_21" data-name="Ellipse 21" cx="7.071" cy="7.071" r="7.071" transform="translate(0)" fill="#fff"/>
      <g id="Group_73" data-name="Group 73" transform="translate(1.465 1.571)" clip-path="url(#clip-path)">
        <path id="Path_236" data-name="Path 236" d="M48.329,8.989A2.738,2.738,0,1,1,45.59,6.25,2.739,2.739,0,0,1,48.329,8.989Z" transform="translate(-39.231 -6.174)" fill="#80af46"/>
        <path id="Path_237" data-name="Path 237" d="M36.727,14.96a2.738,2.738,0,1,1-2.738-2.739A2.738,2.738,0,0,1,36.727,14.96Z" transform="translate(-31.174 -10.32)" fill="#b2d566"/>
        <path id="Path_238" data-name="Path 238" d="M42.7,26.562a2.738,2.738,0,1,1-2.739-2.739A2.739,2.739,0,0,1,42.7,26.562Z" transform="translate(-35.321 -18.378)" fill="#7d9956"/>
        <path id="Path_239" data-name="Path 239" d="M54.3,20.59a2.738,2.738,0,1,1-2.739-2.738A2.739,2.739,0,0,1,54.3,20.59Z" transform="translate(-43.378 -14.231)" fill="#66883a"/>
        <path id="Path_240" data-name="Path 240" d="M48.547,9.819a2.74,2.74,0,0,1-3.377,1.8,2.894,2.894,0,0,0-1.822-3.542,2.742,2.742,0,0,1,5.2,1.745Z" transform="translate(-39.575 -6.167)" fill="#80af46"/>
        <path id="Path_241" data-name="Path 241" d="M50.4,27.6A2.823,2.823,0,0,1,48.7,26.248a2.655,2.655,0,0,1-.313-1.069,2.263,2.263,0,0,1,.182-1.095,3.1,3.1,0,0,0-.052,1.095,2.964,2.964,0,0,0,.287,1.043A2.784,2.784,0,0,0,50.4,27.6Z" transform="translate(-43.071 -18.56)" fill="#fff"/>
      </g>
    </g>
    <rect id="Rectangle_91" data-name="Rectangle 91" width="26.364" height="1.818" transform="translate(12.064 22.727)" fill="#fff"/>
  </g>
</svg>
`

export default () => <SvgCss xml={xml} width="75" height="48" />
