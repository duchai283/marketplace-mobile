/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="30.857" height="20.571" viewBox="0 0 30.857 20.571">
  <path id="Icon_metro-keyboard" data-name="Icon metro-keyboard" d="M31.714,8.571H4.286a1.719,1.719,0,0,0-1.714,1.714V27.429a1.719,1.719,0,0,0,1.714,1.714H31.714a1.719,1.719,0,0,0,1.714-1.714V10.286a1.719,1.719,0,0,0-1.714-1.714ZM19.714,12h3.429v3.429H19.714Zm5.143,5.143v3.429H21.429V17.143h3.429ZM14.571,12H18v3.429H14.571Zm5.143,5.143v3.429H16.286V17.143h3.429ZM9.429,12h3.429v3.429H9.429Zm5.143,5.143v3.429H11.143V17.143h3.429ZM6,12H7.714v3.429H6Zm0,5.143H9.429v3.429H6Zm1.714,8.571H6V22.286H7.714v3.429Zm15.429,0H9.429V22.286H23.143v3.429Zm6.857,0H24.857V22.286H30v3.429Zm0-5.143H26.571V17.143H30Zm0-5.143H24.857V12H30Z" transform="translate(-2.571 -8.571)" fill="#fff"/>
</svg>
`

export default ({ style }) => (
  <SvgCss xml={xml} style={style} width="30.86" height="20.57" />
)
