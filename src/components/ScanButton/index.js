import React from 'react'
import { TouchableOpacity } from 'react-native'
import Pulse from 'react-native-pulse'
import { SvgCameraBlack, SvgCamera } from '../../Themes/svg'
import styles from './styles'

const ScanButton = ({ onPress, isBlackIcon }) => (
  <TouchableOpacity accessibilityLabel="scan_btn" onPress={onPress}>
    <Pulse
      color="#80AF46"
      numPulses={3}
      diameter={110}
      speed={20}
      duration={3000}
    />
    {isBlackIcon ? (
      <SvgCameraBlack style={styles.cameraSvg} />
    ) : (
      <SvgCamera style={styles.cameraSvg} />
    )}
  </TouchableOpacity>
)

export default ScanButton
