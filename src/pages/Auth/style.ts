import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 150,
    height: 90,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  animatedLoginBody: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  loginBody: {
    width: '90%',
    maxWidth: 300,
    backgroundColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.31,
    shadowRadius: 3.68,
    elevation: 5,
  },
  buttonPress: {
    backgroundColor: '#d1d5db',
    width: '90%',
    maxWidth: 300,
    height: 40,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 19,
    color: '#141c24',
    letterSpacing: 1.5,
  },
  registerText: {
    color: '#d1d5db',
    marginTop: 20,
    fontSize: 15,
  },
  registerTextLink: {
    fontWeight: '700',
  },
});

export default styles;
