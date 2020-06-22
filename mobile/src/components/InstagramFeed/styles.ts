import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: 150,
    marginRight: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageFilter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 15,
  },
});
