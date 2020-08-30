import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import images from '../../../../Themes/Images';

const CameraButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <FastImage source={images.camera} style={styles.camera} />
  </TouchableOpacity>
);

export default CameraButton;
