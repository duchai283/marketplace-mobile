import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  flatlist: {
    flex: 1,
    paddingHorizontal: 15
  },
  nodata: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ECEDEF',
    marginTop: 50,
    padding: 8
  },
  debug: {
    borderWidth: 1,
    borderColor: 'red'
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  lightMessageText: {
    fontSize: 14,
    color: 'white'
  },
  boldMessageText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '800'
  },

  productItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },
  imageProductWrapper: {
    padding: 3
  },
  redPrice: {
    marginTop: 5,
    fontSize: 17,
    color: '#EB5757',
    fontWeight: '600',
    lineHeight: 25
  },
  lineThroughPrice: {
    fontSize: 13,
    color: '#818792',
    fontWeight: '400',
    textDecorationLine: 'line-through'
  },
  darkSumPrice: {
    fontSize: 21,
    color: '#40485A',
    fontWeight: '600'
  },
  redSaveMoney: {
    fontSize: 13,
    color: '#EB5757',
    fontWeight: '400'
  },

  scanButtonPosition: {
    position: 'absolute',
    bottom: 110,
    left: Dimensions.get('window').width / 2 - 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 90
  },

  emptyCartButton: {
    width: 80,
    height: 45,
    backgroundColor: '#ECEDEF',
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  trashIcon: {
    marginRight: 7
  },
  emptyCartText: {
    color: '#818792',
    fontSize: 11
  },

  // Checkout Zone
  checkoutZoneColumn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: -5 }
  },
  darkTotalText: {
    color: '#40485A',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700'
  },
  lightTotalText: {
    color: '#818792',
    fontSize: 12,
    lineHeight: 15
  },
  dartTotalPrice: {
    color: '#40485A',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '700',
    letterSpacing: 1.2
  },
  pinkPriceView: {
    backgroundColor: '#EB5757',
    paddingVertical: 8,
    borderRadius: 5,

    alignItems: 'center',
    width: '100%'
  },
  whiteText: {
    color: 'white',
    fontSize: 14
  },
  rowVerticalCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  conditionText: {
    fontSize: 13,
    color: '#818792',
    marginRight: 10,
    textDecorationLine: 'underline',
    width: 60,
    textAlign: 'right'
  },
  checkoutButtonView: {
    borderRadius: 5,
    paddingHorizontal: 5,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  enableCheckoutBackgroundBtn: {
    backgroundColor: 'rgba(128, 175, 70, 1)'
  },
  disableCheckoutBackgroundBtn: {
    backgroundColor: 'rgba(128, 175, 70, 0.4)'
  },
  thickWhiteText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14
  },
  totalSavingLabel: {
    color: '#EB5757',
    fontSize: 12,
    lineHeight: 20
  },
  header: {
    flex: 1,
    fontSize: 18,
    marginLeft: 12,
    fontWeight: '500',
    color: '#80AF46',
    alignSelf: 'center',
    textAlign: 'center'
  }
})

export default styles
