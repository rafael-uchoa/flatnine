import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Categories from '../../components/Categories';
import InstagramFeed from '../../components/InstagramFeed';

const Main: React.FC = () => (
  <Container>
    <Header title="Home" />
    <Categories />
    <InstagramFeed />
  </Container>
);

export default Main;
