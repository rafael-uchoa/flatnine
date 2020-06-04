import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#171717',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    height: 40,
    width: 40,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categories: {
    marginTop: 24,
  },
  categoriesImage: {
    height: 150,
    width: 150,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  categoriesImageFilter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    borderRadius: 15,
  },
  categoriesImageText: {
    color: 'white',
    fontSize: 18,
  },
});
