import React from 'react';
import './styles.scss';

import Routes from './routes';
import { ProductsProvider } from '../../context/products';

const App: React.FC = () => (
  <div className="container">
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
  </div>
);

export default App;
