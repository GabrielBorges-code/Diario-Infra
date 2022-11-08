import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

// import { Container } from './styles';

export default function NoPage() {
  return (
    <Container>
        <h1>404 Not Found</h1>
        <p>Essa página não existe, voltar para a página <Link to="/">principal</Link>.</p>
    </Container>
  )
}

