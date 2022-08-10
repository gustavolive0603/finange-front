import React from 'react';
import { Container } from './style';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <h1>Finange</h1>
      <nav>
        <ul>
          <li>
            <Link to="#">Sobre</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="#">Contato</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
