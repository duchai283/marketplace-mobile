import React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="17.864" height="21.5" viewBox="0 0 17.864 21.5">
  <g id="Icon_feather-map-pin" data-name="Icon feather-map-pin" transform="translate(0.75 0.75)">
    <path id="Path_1046" data-name="Path 1046" d="M20.864,9.682c0,6.364-8.182,11.818-8.182,11.818S4.5,16.045,4.5,9.682a8.182,8.182,0,0,1,16.364,0Z" transform="translate(-4.5 -1.5)" fill="none" stroke="#818792" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    <path id="Path_1047" data-name="Path 1047" d="M18.955,13.227A2.727,2.727,0,1,1,16.227,10.5a2.727,2.727,0,0,1,2.727,2.727Z" transform="translate(-8.045 -5.045)" fill="none" stroke="#818792" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>
`;

export default () => <SvgCss xml={xml} width="17" height="20" />;
