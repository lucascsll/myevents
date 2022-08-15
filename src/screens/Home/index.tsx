import React from 'react';
import {Container} from './styles';
import {Carousel} from '../../components/Carousel';
import {Card} from '../../components/Card';
import {Text} from 'react-native';

export function Home() {
  return (
    <Container>
      <Carousel />
      <Text> 10 experiencias encontradas </Text>
      <Card />
    </Container>
  );
}
