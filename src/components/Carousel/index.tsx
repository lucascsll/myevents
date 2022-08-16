import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Container, Content} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Carousel() {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Content>
        <TouchableOpacity>
          <MaterialCommunityIcons color="#ffff" size={30} name="music" />
          <Text style={{color: '#ffff'}}>Musica</Text>
        </TouchableOpacity>
      </Content>
      <Content>
        <TouchableOpacity>
          <MaterialCommunityIcons size={30} name="theater" />
          <Text>Teatro</Text>
        </TouchableOpacity>
      </Content>
      <Content>
        <TouchableOpacity>
          <MaterialCommunityIcons size={30} name="party-popper" />
          <Text>Festas</Text>
        </TouchableOpacity>
      </Content>
      <Content>
        <TouchableOpacity>
          <MaterialCommunityIcons size={30} name="run" />
          <Text>Esporte</Text>
        </TouchableOpacity>
      </Content>
      <Content>
        <TouchableOpacity>
          <MaterialCommunityIcons size={30} name="shopping-outline" />
          <Text>Promoções</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
}
