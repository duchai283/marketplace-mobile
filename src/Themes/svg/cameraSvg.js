/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78">
  <defs>
    <filter id="Ellipse_2" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_1175" data-name="Group 1175" transform="translate(-289 -668)">
    <g transform="matrix(1, 0, 0, 1, 289, 668)" filter="url(#Ellipse_2)">
      <circle id="Ellipse_2-2" data-name="Ellipse 2" cx="30" cy="30" r="30" transform="translate(9 6)" fill="#80af46"/>
    </g>
    <g id="Group_131" data-name="Group 131" transform="translate(-281.268 -6012.536)">
      <g id="Group_130" data-name="Group 130" transform="translate(593.268 6701.536)">
        <path id="Path_874" data-name="Path 874" d="M603.515,6701.537h-8.54a1.707,1.707,0,0,0-1.708,1.708v8.54" transform="translate(-593.268 -6701.537)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_875" data-name="Path 875" d="M624.89,6711.784v-8.54a1.707,1.707,0,0,0-1.708-1.708h-8.54" transform="translate(-594.89 -6701.537)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_876" data-name="Path 876" d="M593.268,6722.911v8.54a1.708,1.708,0,0,0,1.708,1.708h8.54" transform="translate(-593.268 -6703.159)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_877" data-name="Path 877" d="M614.643,6733.159h8.54a1.708,1.708,0,0,0,1.708-1.708v-8.54" transform="translate(-594.89 -6703.159)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
      <rect id="Rectangle_376" data-name="Rectangle 376" width="17.051" height="17.051" rx="1.759" transform="translate(599.883 6707.854)" fill="#fff" opacity="0.5"/>
      <rect id="Rectangle_377" data-name="Rectangle 377" width="27.079" height="1.774" rx="0.887" transform="translate(595.793 6715.492)" fill="#fff"/>
    </g>
  </g>
</svg>
`

export default ({ style }) => (
  <SvgCss xml={xml} style={style} width="78" height="78" />
)
