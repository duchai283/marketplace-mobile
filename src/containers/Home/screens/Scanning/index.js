import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { RNCamera } from 'react-native-camera'
import ProductTile from './ProductTile'
import { config } from 'global_config'

const Scanning = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [barcode, setBarcode] = useState(null)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(
          `${config.apiUrl}/products/search-by-sku?sku=${barcode}`
        )

        const data = await res.json()
        if (data.data) {
          setProduct(data.data)
        }
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      } catch (err) {
        console.log('err', err)
      }
    }
    if (barcode) {
      fetchProduct()
    }
  }, [barcode])

  const barcodeRecognized = barcodeObj => {
    let scanResult = barcodeObj.data
    if (!scanResult) {
      return
    }
    if (scanResult === barcode) {
      return
    }
    setBarcode(scanResult)
  }
  const handleViewCart = () => {
    navigation.navigate('Cart', { screen: 'CartPage' })
  }

  const handleContinue = () => {
    navigation.navigate('CartPage', { item: product })
    setBarcode('')
    setProduct(null)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <RNCamera
        style={styles.camera}
        rectOfInterest={{ x: 0.17, y: 0.05, width: 0.35, height: 0.9 }}
        onBarCodeRead={barcodeRecognized}
        captureAudio={false}
      />

      <View style={styles.opacityTopView}>
        <Text style={styles.guideText}>Align the barcode inside the area.</Text>
      </View>
      <View style={styles.opacityLeftView} />
      <View style={styles.opacityRightView} />
      <View style={styles.opacityBottomView} />
      <View style={styles.infoView}>
        <Text style={styles.infoText}>Where is the barcode number?</Text>
      </View>
      <View style={styles.horizontalLine} />

      <ProductTile
        isLoading={isLoading}
        product={product}
        barcode={barcode}
        handleViewCart={handleViewCart}
        handleContinue={handleContinue}
      />
    </View>
  )
}

export default Scanning
