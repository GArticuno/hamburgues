import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  txt: {
    color: '#fff',
    fontSize: 17,
    alignSelf: 'center',
    maxWidth: 263,
  },
  paragrafo: {
    fontStyle: 'italic',
    color: '#fff',
  },
  title: {
    fontSize: 25,
    color: '#fff',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#242424',
    margin: 10,
  },
  procura: {
    backgroundColor: '#242424',
    borderRadius: 0
  },
  viewdesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewpreco: {
    flexDirection: 'row',
    width: 250,
    top: 5,
    bottom: 20,
  },
  txtpreco: {
    fontSize: 19,
    color: '#fff',
  },
  content: {
    marginVertical: 8,
  },
});
