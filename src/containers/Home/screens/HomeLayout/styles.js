import {StyleSheet, Platform} from 'react-native';

const mainGreenColor = '#80AF46';
const darkColor = '#40485A';
const lightBorderColor = '#ECEDEF';

export const styles = StyleSheet.create({
  debug: {
    borderWidth: 1,
    borderColor: 'red',
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowFlexStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  column: {
    flexDirection: 'column',
  },
  homeScreen: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
      android: {
        marginTop: 30,
      },
    }),
  },
  coverBackground: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  homeTitleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: lightBorderColor,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  homeTitle: {
    color: mainGreenColor,
    fontSize: 18,
    lineHeight: 24,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  threeButtonsWrappedView: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  longVerticalCenterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,

    borderRadius: 5,
    width: '100%',
  },
  whiteWithShadowButton: {
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {width: 3, height: 3},
    elevation: 5,
  },
  greenButton: {
    backgroundColor: mainGreenColor,

    borderWidth: 1,
    borderColor: '#fff',

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {width: 3, height: 3},
    elevation: 5,
  },
  whiteWithBorderButton: {
    backgroundColor: 'white',
    borderColor: '#E4E4E4',
    borderWidth: 1,
  },
  disableStyle: {
    opacity: 0.3,
  },
  greenBorderCircle: {
    backgroundColor: 'white',
    borderColor: mainGreenColor,
    width: 24,
    height: 24,

    borderWidth: 1,
    borderRadius: 100,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  greenNumber: {
    color: mainGreenColor,
    fontWeight: '800',
    fontSize: 18,
  },
  thinDarkText: {
    color: darkColor,
    fontWeight: '500',
    fontSize: 15,
  },
  thickGreenText: {
    color: mainGreenColor,
    fontWeight: '700',
    fontSize: 22,
  },
  endIcon: {
    width: 70,
    height: 70,
  },
  checkOutIcon: {
    width: 72.22,
    height: 68.49,
  },
  whiteCirle: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 100,
    width: 24,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  thickWhiteText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 5,
  },
  thinWhiteText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  thickDarkText: {
    color: darkColor,
    fontSize: 18,
    fontWeight: '700',
  },
  arrowDownGreen: {
    width: 18,
    height: 18,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: mainGreenColor,
    transform: [{rotate: '-45deg'}],
    alignSelf: 'center',
    marginVertical: 15,
  },
  scanZoneWrapped: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  startScanText: {
    color: darkColor,
    fontSize: 21,
    fontWeight: '400',
    lineHeight: 28,
    textAlign: 'center',
  },
  scanGoText: {
    color: darkColor,
    fontSize: 14,
    fontWeight: '400',
    alignContent: 'center',
    textAlign: 'center',
    lineHeight: 19,
  },
  camera: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    backgroundColor: 'rgba(128, 175, 70, 0.14)',
    borderRadius: 100,
  },
});
