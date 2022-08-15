import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Container, Content} from './styles';

export function Card() {
  return (
    <ScrollView style={{}}>
      <Container>
        <TouchableOpacity>
          <Image
            resizeMode={'stretch'}
            style={{
              height: 120,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            source={{
              uri: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/250/344250/gOQSKRZR/ee02e40644694be9bda8a32326c0b612',
            }}
          />
          <Content>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
              Fabio Junior Turne 2022
            </Text>
            <Text style={{fontSize: 12, color: '#0076cb'}}>
              Sáb,20 de Agosto
            </Text>
            <Text style={{fontSize: 12, color: '#808080'}}>
              Espaço Patrick Ribeiro Serra
            </Text>
          </Content>
        </TouchableOpacity>
      </Container>
      <Container>
        <TouchableOpacity>
          <Image
            resizeMode={'stretch'}
            style={{
              height: 120,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            source={{
              uri: 'https://f.i.uol.com.br/fotografia/2019/12/01/15752476555de45f27df93f_1575247655_3x2_md.jpg',
            }}
          />
          <Content>
            <Text>Fabio Junior Turne 2022</Text>
            <Text>Fabio Junior Turne 2022</Text>
            <Text>Fabio Junior Turne 2022</Text>
          </Content>
        </TouchableOpacity>
      </Container>
      <Container>
        <TouchableOpacity>
          <Image
            resizeMode={'stretch'}
            style={{
              height: 120,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            source={{
              uri: 'https://s2.glbimg.com/wl2hQbkdxTeEnAb-EDGp1uZ_QCI=/0x204:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/m/m/5fg9FlSy2SThA0KoSQyQ/gusttavo-lima-florianopolis.jpeg',
            }}
          />
          <Content>
            <Text>Fabio Junior Turne 2022</Text>
            <Text>Fabio Junior Turne 2022</Text>
            <Text>Fabio Junior Turne 2022</Text>
          </Content>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
}
