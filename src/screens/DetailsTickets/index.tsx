import React from 'react';
import {ScrollView, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import {
  ImageDesfoc,
  Image,
  Title,
  Description,
  CardInfos,
  CardInfosText,
  Box,
  Button,
  TextButton,
} from './styles';

export function DetailsTickets() {
  const route = useRoute();
  const {item} = route.params;
  return (
    <>
      <ImageDesfoc
        blurRadius={7}
        source={{
          uri: item.urlFotoCapa,
        }}
      />
      <View>
        <Image
          resizeMode={'cover'}
          source={{
            uri: item.urlFotoCapa,
          }}
        />
      </View>
      <ScrollView>
        <View style={{alignSelf: 'flex-start'}}>
          <Title>{item.title}</Title>
          <Description>
            <MaterialCommunityIcons size={20} name="calendar" /> {item.data}
          </Description>
          <Description>
            <MaterialCommunityIcons size={20} name="clock" /> {item.abertura}
          </Description>
          <Description>
            <MaterialCommunityIcons size={20} name="google-maps" /> {item.local}
          </Description>
        </View>
        <CardInfos
          style={{
            shadowColor: '#0076cb',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Box>
            <Ionicons size={20} name="person" />
            <CardInfosText>Classificação 16 anos</CardInfosText>
          </Box>
          <Box>
            <Ionicons
              style={{alignItems: 'center'}}
              size={30}
              name="ios-phone-portrait"
            />
            <CardInfosText>Acesso com o ingresso no celular</CardInfosText>
          </Box>
          <Box>
            <Ionicons size={30} name="card" />
            <CardInfosText>Ate 10x no cartão</CardInfosText>
          </Box>
        </CardInfos>
        <View>
          <Title>{item.title}</Title>
          <Description style={{marginBottom: 100}}>
            {item.descricao}
          </Description>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}>
        <Button>
          <TextButton>COMPRAR</TextButton>
        </Button>
      </View>
    </>
  );
}
