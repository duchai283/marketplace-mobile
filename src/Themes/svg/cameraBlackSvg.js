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
  <g id="Group_1174" data-name="Group 1174" transform="translate(-152 -601)">
    <g transform="matrix(1, 0, 0, 1, 152, 601)" filter="url(#Ellipse_2)">
      <circle id="Ellipse_2-2" data-name="Ellipse 2" cx="30" cy="30" r="30" transform="translate(9 6)" fill="#80af46"/>
    </g>
    <g id="Group_131" data-name="Group 131" transform="translate(-417.268 -6079.536)">
      <g id="Icon_ionic-ios-barcode" data-name="Icon ionic-ios-barcode" transform="translate(590.893 6698.786)">
        <path id="Path_882" data-name="Path 882" d="M8.613,12.375a.986.986,0,0,0-.984.977v9.288a.984.984,0,0,0,1.969,0V13.352A.986.986,0,0,0,8.613,12.375Z"/>
        <path id="Path_883" data-name="Path 883" d="M27.387,23.625a.986.986,0,0,0,.984-.977v-9.3a.984.984,0,0,0-1.969,0v9.288A.987.987,0,0,0,27.387,23.625Z"/>
        <path id="Path_884" data-name="Path 884" d="M22.957,10.125a1,1,0,0,0-.984,1.012V24.855a.985.985,0,1,0,1.969,0V11.137A1,1,0,0,0,22.957,10.125Z"/>
        <path id="Path_885" data-name="Path 885" d="M13.043,10.125a1,1,0,0,0-.984,1.012V24.855a.985.985,0,1,0,1.969,0V11.137A1,1,0,0,0,13.043,10.125Z"/>
        <path id="Path_886" data-name="Path 886" d="M18,11.25a1,1,0,0,0-.984,1v11.5a.984.984,0,1,0,1.969,0v-11.5A1,1,0,0,0,18,11.25Z"/>
      </g>
      <g id="Group_130" data-name="Group 130" transform="translate(593.268 6701.536)">
        <path id="Path_874" data-name="Path 874" d="M603.515,6701.537h-8.54a1.707,1.707,0,0,0-1.708,1.708v8.54" transform="translate(-593.268 -6701.537)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_875" data-name="Path 875" d="M624.89,6711.784v-8.54a1.707,1.707,0,0,0-1.708-1.708h-8.54" transform="translate(-594.89 -6701.537)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_876" data-name="Path 876" d="M593.268,6722.911v8.54a1.708,1.708,0,0,0,1.708,1.708h8.54" transform="translate(-593.268 -6703.159)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path id="Path_877" data-name="Path 877" d="M614.643,6733.159h8.54a1.708,1.708,0,0,0,1.708-1.708v-8.54" transform="translate(-594.89 -6703.159)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
      <rect id="Rectangle_377" data-name="Rectangle 377" width="27.079" height="2" transform="translate(595.793 6715.492)" fill="#40485a"/>
    </g>
  </g>
</svg>

`

export default ({ style }) => (
  <SvgCss xml={xml} style={style} width="78" height="78" />
)
