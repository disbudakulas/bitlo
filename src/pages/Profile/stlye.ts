import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    flex: 1,
  },
  buttonPress: {
    width: '90%',
    maxWidth: 350,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#141c24',
  },
  save: {
    color: '#eee',
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
    padding: 5,
  },
});

export default styles;
