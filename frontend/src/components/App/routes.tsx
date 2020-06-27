import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Instruments from '../../pages/Instruments';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/instruments" component={Instruments} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
