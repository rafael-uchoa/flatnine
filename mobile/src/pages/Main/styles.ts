import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#171717',
  },
  sectionText: {
    marginTop: 20,
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  categoriesImage: {
    height: 150,
    width: 150,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  categoriesImageFilter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 15,
  },
  categoriesImageText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
