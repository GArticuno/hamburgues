import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  txt: {
    color: '#000',
    fontSize: 17,
    alignSelf: 'center',
    maxWidth: 263,
  },
  paragrafo: {
    fontStyle: 'italic'
  },
  title: {
    fontSize: 25,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#9e9e9e',
    margin: 10
  },
  viewdesc: {
    alignItems: 'center',
    paddingLeft: 30,
    width: 263
  },
  viewpreco: {
    flexDirection: 'row',
    width: 250,
    bottom: 20,
    top: 5,
  },
  txtpreco: {
    fontSize: 19
  },
  content: {
    marginVertical: 8,
  },
});
