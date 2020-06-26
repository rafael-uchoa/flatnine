import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerContainer, MainLogo } from './styles';

import logo from '../../assets/logo.png';
import categories from '../../constants/categories';
import NavigationButton from '../../components/NavigationButton';

const Drawer: React.FC = () => {
  const navigation = useNavigation();

  function navigateToCategory(category: any) {
    navigation.navigate('Category', category);
  }

  function capitalizeString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <DrawerContainer>
      <MainLogo source={logo} />
      <NavigationButton
        name="Home"
        onPress={() => navigation.navigate('Main')}
      />
      {categories.map((category) => (
        <NavigationButton
          key={category.key}
          name={capitalizeString(category.key)}
          onPress={() => navigateToCategory(category.key)}
        />
      ))}
    </DrawerContainer>
  );
};

export default Drawer;
