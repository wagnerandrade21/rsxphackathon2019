import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Projetos from '../pages/Projetos';
import Feed from '../pages/Feed';
import Instituicao from '../pages/Instituicao';
import Trilhas from '../pages/Trilhas';
import Seed from '../pages/Seed';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/perfil" component={Perfil} isPrivate />
      <Route path="/projetos" component={Projetos} isPrivate />
      <Route path="/Instituicao" component={Instituicao} isPrivate />
      <Route path="/Trilhas" component={Trilhas} isPrivate />
      <Route path="/Seed" component={Seed} isPrivate />
      <Route path="/feed" component={Feed} isPrivate />
    </Switch>
  );
}
