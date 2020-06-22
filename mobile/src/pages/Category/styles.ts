import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#171717',
  },
  productsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25262a',
    width: Dimensions.get('window').width - 20,
    marginBottom: 20,
  },
  productImage: {
    height: 240,
    width: '100%',
  },
  productTextContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 14,
  },
  productName: {
    color: 'white',
    fontSize: 22,
    textTransform: 'capitalize',
  },
  productPrice: {
    color: '#ff0132',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
