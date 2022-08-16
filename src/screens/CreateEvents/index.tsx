import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../../components/Form/Input';
import {Container, SubTtitle,Title,Form} from './styles';
import {BoxTitles} from '../../components/BoxTitles';
import {TabButton} from "../../components/Form/TabButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function CreateEvents() {
  return (
    <Container>

      <BoxTitles title={'Criar Evento'} />
      <Form>
        <Title>Nenhum evento criado.</Title>
        <SubTtitle>Fique avontade para criar eventos,clique no botão inferior para começar ! </SubTtitle>
      </Form>

      <TabButton/>
      {/*<Form>*/}
      {/*  <Input placeholder="Nome do evento" />*/}
      {/*  <Input editable maxLength={100} placeholder="Descrição" />*/}
      {/*  <Input placeholder="Data e hora " />*/}
      {/*  <Input placeholder="Valor" />*/}
      {/*  <Input placeholder="Url foto" />*/}
      {/*  <Input placeholder="Local" />*/}
      {/*</Form>*/}

      {/*<View*/}
      {/*  style={{*/}
      {/*    flex: 1,*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'flex-end',*/}
      {/*    marginBottom: 10,*/}
      {/*  }}>*/}
      {/*  <TouchableOpacity*/}
      {/*    style={{*/}
      {/*      backgroundColor: '#0076cb',*/}
      {/*      width: '60%',*/}
      {/*      height: 40,*/}
      {/*      position: 'absolute',*/}
      {/*      borderRadius: 15,*/}
      {/*      justifyContent: 'center',*/}
      {/*      alignItems: 'center',*/}
      {/*    }}>*/}
      {/*    <Text*/}
      {/*      style={{*/}
      {/*        textAlign: 'center',*/}
      {/*        fontWeight: 'bold',*/}
      {/*        color: '#fff',*/}
      {/*        fontSize: 16,*/}
      {/*      }}>*/}
      {/*      Criar*/}
      {/*    </Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </Container>
  );
}
