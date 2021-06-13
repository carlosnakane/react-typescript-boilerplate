import React from 'react';
import Jumbo, { Title, Lead, Separator } from './jumbo';

const Hello = () => (
  <div>
    <Jumbo>
      <Title>Olá, mundo 🦊</Title>
      <Lead>Esse é um exemplo de boilerplate React com Typescript</Lead>
      <Separator />
      <p>
        Leia o arquivo README.md para informações de utilização e configuração
      </p>
    </Jumbo>
  </div>
);

export default Hello;
