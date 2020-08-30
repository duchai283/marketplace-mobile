/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path id="Icon_Gasoline_Voucher_Icon" data-name="Icon_Gasoline Voucher Icon" d="M13.125,17.5H.625A.627.627,0,0,0,0,18.125v1.25A.627.627,0,0,0,.625,20h12.5a.627.627,0,0,0,.625-.625v-1.25A.627.627,0,0,0,13.125,17.5ZM19.266,4.191,16.1,1.027a.627.627,0,0,0-.883,0l-.441.441a.627.627,0,0,0,0,.883L16.25,3.824V6.25a2.184,2.184,0,0,0,1.875,2.156v6.281a.938.938,0,0,1-1.875,0v-1.25A3.438,3.438,0,0,0,12.813,10H12.5V2.5A2.5,2.5,0,0,0,10,0H3.75a2.5,2.5,0,0,0-2.5,2.5V16.25H12.5V11.875h.313a1.562,1.562,0,0,1,1.563,1.563v1.086a2.929,2.929,0,0,0,2.52,2.965A2.82,2.82,0,0,0,20,14.687V5.961a2.5,2.5,0,0,0-.734-1.77ZM10,7.5H3.75v-5H10Z" fill="#40485a"/>
</svg>
`

export default () => (
  <SvgCss xml={xml} width="20" height="20" style={{ marginLeft: 5 }} />
)
