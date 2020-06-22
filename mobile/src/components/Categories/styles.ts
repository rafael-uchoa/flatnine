import styled from 'styled-components/native';

const Header = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
  font-size: 32px;
  font-weight: bold;
`;

const CategoryImage = styled.ImageBackground`
  height: 150px;
  width: 150px;
  margin-right: 10px;
  border-radius: 15px;
  overflow: hidden;
`;

const CategoryImageFilter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const CategoryImageText = styled.Text`
  color: white;
  font-size: 18px;
  text-transform: capitalize;
`;

export { Header, CategoryImage, CategoryImageFilter, CategoryImageText };
