import styled from 'styled-components/native';
import Constants from 'expo-constants';

const STATUSBAR_HEIGHT = `${Constants.statusBarHeight + 20}px`;

const DrawerContainer = styled.View`
  flex: 1;
  padding: 0 10px;
  padding-top: ${STATUSBAR_HEIGHT};
  background-color: #171717;
  justify-content: center;
  align-items: center;
`;

const MainLogo = styled.Image`
  height: 200px;
  width: 200px;
  margin-bottom: 70px;
`;

export { DrawerContainer, MainLogo };
