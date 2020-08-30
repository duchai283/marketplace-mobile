/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="25" viewBox="0 0 17.5 25">
  <g id="Group_1174" data-name="Group 1174" transform="translate(-321 -187)">
    <path id="Icon_material-edit-location" data-name="Icon material-edit-location" d="M16.25,3A8.76,8.76,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.76,8.76,0,0,0,16.25,3ZM14.3,15.5H12.5V13.7l4.188-4.175,1.788,1.788Zm5.563-5.562-.875.875-1.8-1.8.875-.875a.475.475,0,0,1,.675,0l1.125,1.125A.475.475,0,0,1,19.862,9.938Z" transform="translate(313.5 184)" fill="#80af46"/>
  </g>
</svg>
`

export default ({ style }) => (
  <SvgCss xml={xml} style={style} width="17.5" height="25" />
)
