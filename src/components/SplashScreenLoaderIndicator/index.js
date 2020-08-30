import React from 'react'
import { Spinner, View } from 'native-base'
import { StyleSheet } from 'react-native'

export default function LoaderIndicator(props) {
  const { transparent } = props
  return (
    <View
      style={[
        styles.container,
        styles.horizontal,
        { backgroundColor: transparent ? 'transparent' : '#D3D5D9' }
      ]}
    >
      <Spinner color={'#83B151'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    opacity: 0.5,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  loaderStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'transparent'
  }
})
