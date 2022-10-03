import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#1d2731',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  cardContentLeft: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  cardContentMid: {
    flex: 1,
  },
  cardContentRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  codeStyle: {
    color: '#fff',
    fontSize: 13.5,
  },
  currencyStyle: {
    fontSize: 11.5,
  },
  valueDisplay: {
    width: 70,
    height: 25,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueDisplayText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default styles;
