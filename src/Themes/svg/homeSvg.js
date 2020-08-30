/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22.121" height="20.121" viewBox="0 0 22.121 20.121">
  <g id="Group_1130" data-name="Group 1130" transform="translate(1.061 0.75)">
    <path id="Path_867" data-name="Path 867" d="M1115.5,1188.5v8.276h4.828v-6.207h4.828v6.207h4.828V1188.5" transform="translate(-1112.741 -1178.155)" fill="none" stroke="#818792" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"/>
    <path id="Path_868" data-name="Path 868" d="M1111.5,1183.5l10-10,10,10" transform="translate(-1111.5 -1173.5)" fill="none" stroke="#818792" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    <path id="Path_869" data-name="Path 869" d="M1130.5,1174.5h3.448v3.448" transform="translate(-1117.397 -1173.81)" fill="none" stroke="#818792" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"/>
  </g>
</svg>
`;

export default () => <SvgCss xml={xml} width="20" height="18.62" />;
