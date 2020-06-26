import styled from 'styled-components/native';
import { STATUSBAR_HEIGHT, FLATNINE_BLACK } from '../../constants/styles';

const DrawerContainer = styled.View`
  flex: 1;
  padding: 0 10px;
  padding-top: ${STATUSBAR_HEIGHT};
  background-color: ${FLATNINE_BLACK};
  justify-content: center;
  align-items: center;
`;

const MainLogo = styled.Image`
  height: 200px;
  width: 200px;
  margin-bottom: 70px;
`;

export { DrawerContainer, MainLogo };
