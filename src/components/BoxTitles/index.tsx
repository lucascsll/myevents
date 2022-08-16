import React from 'react';
import {Text} from 'react-native';
import {Container, Title} from './styles';

interface Boxprops {
  title: string;
}

export function BoxTitles({title}: Boxprops) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
