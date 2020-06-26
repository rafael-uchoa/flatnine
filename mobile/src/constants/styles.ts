import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const SCREEN_WIDTH = `${Dimensions.get('window').width - 20}px`;
const STATUSBAR_HEIGHT = `${Constants.statusBarHeight + 20}px`;

const FLATNINE_BLACK = '#171717';
const FLATNINE_GREY = '#25262a';
const FLATNINE_RED = '#ff0132';

export {
  SCREEN_WIDTH,
  STATUSBAR_HEIGHT,
  FLATNINE_BLACK,
  FLATNINE_GREY,
  FLATNINE_RED,
};
