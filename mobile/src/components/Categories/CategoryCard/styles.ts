import styled from 'styled-components/native';

const CategoryImage = styled.ImageBackground`
  height: 190px;
  width: 190px;
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
  font-size: 22px;
  text-transform: capitalize;
`;

export { CategoryImage, CategoryImageFilter, CategoryImageText };
