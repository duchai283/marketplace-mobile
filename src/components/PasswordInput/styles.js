import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapInputPass: {
    position: 'relative',
    width: '100%',
    height: 40,
  },
  passwordInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    color: '#000',
    backgroundColor: '#fff',
    borderColor: 'transparent',
    shadowColor: '#3e3e3e',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
    fontSize: 14,
    paddingLeft: 10,
    height: 50,
  },
  buttonSeePass: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    zIndex: 100,
    elevation: 100,
  },
  iconButton: {
    width: 19,
    height: 15,
  },
  warning: {
    borderColor: 'red',
  },
});
