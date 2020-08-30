import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  flexColumn: {
    flex: 1,
    flexDirection: 'column'
  },

  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  rowSpaceBetween: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
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
  productItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },
  imageProductWrapper: {
    paddingHorizontal: 6,
    paddingVertical: 3
  },
  redPrice: {
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
  darkTotalPrice: {
    fontSize: 21,
    color: '#69862C',
    fontWeight: '600'
  },
  redTotalSave: {
    fontSize: 13,
    color: '#EB5757',
    fontWeight: '400'
  },
  scanButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    left: Dimensions.get('window').width / 2 - 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 90
  }
})

export default styles
