import styled from 'styled-components/native';
import Constants from 'expo-constants';

const STATUSBAR_HEIGHT = `${Constants.statusBarHeight + 20}px`;

const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  padding-top: ${STATUSBAR_HEIGHT};
  background-color: #171717;
`;

export { Container };
