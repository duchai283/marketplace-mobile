import {Platform, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 40,
    paddingVertical: 20,
  },
  textWelcome: {
    fontSize: 31,
    color: '#83B151',
    fontWeight: '200',
  },
  btn: {
    height: 50,
    borderRadius: 5,
    shadowColor: '#3e3e3e',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  textEnter: {
    fontWeight: '200',
    color: '#40485A',
    fontSize: 14,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '200',
  },
  btnForgot: {
    color: '#80AF46',
  },
  btnLogin: {
    color: '#fff',
  },
  textError: {
    color: '#EB5757',
    fontWeight: '300',
  },
  marginTop: {
    marginTop: 25,
  },
  body: {
    paddingHorizontal: 5,
  },
});
