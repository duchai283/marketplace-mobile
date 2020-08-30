/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="21.254" height="21.254" viewBox="0 0 21.254 21.254">
  <g id="Group_1174" data-name="Group 1174" transform="translate(-287.786 -578)">
    <g id="Icon_ionic-md-help-circle-outline" data-name="Icon ionic-md-help-circle-outline" transform="translate(287.786 578)">
      <path id="Path_809" data-name="Path 809" d="M14,5.521A8.477,8.477,0,1,1,8,8a8.446,8.446,0,0,1,6-2.483m0-2.146A10.627,10.627,0,1,0,24.629,14,10.625,10.625,0,0,0,14,3.375Z" transform="translate(-3.375 -3.375)" fill="#40485a"/>
      <g id="Group_79" data-name="Group 79" transform="translate(6.376 4.24)">
        <path id="Path_810" data-name="Path 810" d="M16.523,23.836h2.146v2.146H16.523Z" transform="translate(-13.346 -13.209)" fill="#40485a"/>
        <path id="Path_811" data-name="Path 811" d="M17.463,18.765H15.338c0-3.423,3.188-3.178,3.188-5.3a2.135,2.135,0,0,0-2.125-2.13,2.156,2.156,0,0,0-2.125,2.12H12.15a4.251,4.251,0,0,1,8.5.005C20.651,16.113,17.463,16.415,17.463,18.765Z" transform="translate(-12.15 -9.211)" fill="#40485a"/>
      </g>
    </g>
  </g>
</svg>
`

export default () => (
  <SvgCss xml={xml} width="21.25" height="21.25" style={{ marginLeft: 20 }} />
)
