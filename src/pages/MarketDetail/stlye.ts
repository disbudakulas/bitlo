import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  marketContainer: {
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
  cardContentRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  codeStyle: {
    color: '#fff',
    fontSize: 17,
  },
  valueDisplayText: {
    color: '#bbb',
    fontSize: 11,
  },
  priceDisplayText: {
    color: '#fff',
    fontSize: 14,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#1d2731',
    padding: 10,
  },
  // titleRow: {
  //   flexDirection: 'row',
  //   marginVertical: 5,
  //   paddingHorizontal: 5,
  // },
  titleText: {
    color: '#fff',
    fontSize: 11,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  columnRow: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: '#141c24',
  },
  columnText: {
    color: '#fff',
    fontSize: 11,
    flex: 1,
  },
  itemRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  itemText: {
    color: '#fff',
    fontSize: 11,
    flex: 1,
  },
});

export default styles;
