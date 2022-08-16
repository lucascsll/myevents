import React from 'react';
import {Container} from './styles';
import {Carousel} from '../../components/Carousel';
import {Card} from '../../components/Card';

export function Home() {
  return (
    <Container>
      <Carousel />
      <Card />
    </Container>
  );
}
