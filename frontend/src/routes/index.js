import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Projetos from '../pages/Projetos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" component={Home} isPrivate/>
      <Route path="/perfil" component={Perfil} isPrivate/>
      <Route path="/projetos" component={Projetos} isPrivate/>
    </Switch>
  );
}
