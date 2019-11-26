import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import avatar from '../../assets/user.svg';

import { Container, InfoHeader } from './styles';

export default function Perfil() {
  function handleSubmit(data) {}

  return (
    <Container>
      <InfoHeader>
        <img src={avatar} alt="avatar" />
        <h1>Paulo</h1>
      </InfoHeader>

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu Endereço de email" />

        <hr />

        <Input
          type="password"
          name="oldPassaword"
          placeholder="Sua senha atual"
        />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
    </Container>
  );
}
