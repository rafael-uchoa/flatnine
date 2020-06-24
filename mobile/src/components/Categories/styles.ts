import styled from 'styled-components/native';

const Header = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

const CategoriesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export { Header, CategoriesContainer };
