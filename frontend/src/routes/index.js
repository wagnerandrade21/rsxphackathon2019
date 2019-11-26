import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Projetos from '../pages/Projetos';
import Instituicao from '../pages/Instituicao';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact to="/home" />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/perfil" component={Perfil} isPrivate />
      <Route path="/projetos" component={Projetos} isPrivate />
      <Route path="/Instituicao" component={Instituicao} isPrivate />
    </Switch>
  );
}
