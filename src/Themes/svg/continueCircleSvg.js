/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="Group_1144" data-name="Group 1144" transform="translate(0.206)">
    <circle id="Ellipse_107" data-name="Ellipse 107" cx="12" cy="12" r="12" transform="translate(-0.206 0)" fill="#fff" opacity="0.37"/>
    <path id="Path_1081" data-name="Path 1081" d="M11.758.137A11.758,11.758,0,0,0,0,11.895H11.758Z" transform="translate(0 -0.137)" fill="#fff"/>
  </g>
</svg>
`

export default () => (
  <SvgCss xml={xml} width="24" height="24" style={{ marginLeft: 5 }} />
)
