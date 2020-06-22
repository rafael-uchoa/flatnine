import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.Image`
  height: 40px;
  width: 40px;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
`;

export { Container, HeaderLogo, HeaderText };
