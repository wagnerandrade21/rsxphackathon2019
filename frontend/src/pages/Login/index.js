import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from  "./logo.png";

import {Content} from './style'

export default function Login(props) {
 
  function handleSubmit(data) {
    props.history.push("/home");
  }

  return (
    <Content>
        <div className="container">
          <img src={logo} alt="logo" />
          <div class="content">
            
            <Form onSubmit={handleSubmit} autoComplete="off">
              <h3>PIRÂMIDE EDUCACIONAL</h3>

              <Input
                name="user"
                type="text"
                className="input-user"
                placeholder="usuario"
              />

              <Input
                name="password"
                type="password"
                className="input-password"
                placeholder="senha"
              />

              <button type="submit">Acessar</button>

            </Form>
          </div>
        </div>
    </Content>
  );
}
