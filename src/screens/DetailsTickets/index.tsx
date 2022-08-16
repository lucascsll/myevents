import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function DetailsTickets() {
  return (
    <>
      <Image
        blurRadius={7}
        source={{
          uri: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/250/344250/gOQSKRZR/ee02e40644694be9bda8a32326c0b612',
        }}
        style={{width: '100%', height: 200, backgroundColor: '#0076cb'}}
      />
      <View>
        <Image
          resizeMode={'cover'}
          style={{
            alignSelf: 'center',
            backgroundColor: '#fff',
            height: 200,
            width: '90%',
            padding: 30,
            marginTop: -150,
            borderRadius: 5,
            opacity: 10,
          }}
          source={{
            uri: 'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/250/344250/gOQSKRZR/ee02e40644694be9bda8a32326c0b612',
          }}
        />
      </View>
      <ScrollView>
        <View style={{alignSelf: 'flex-start'}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 20,
              paddingLeft: 15,
              paddingBottom: 10,
            }}>
            Fabio Junior - Turner 2022
          </Text>
          <Text style={{paddingLeft: 15, paddingBottom: 8}}>
            <MaterialCommunityIcons size={20} name="calendar" /> Sab, 20 de
            agosto de 2022
          </Text>
          <Text style={{paddingLeft: 15, paddingBottom: 8}}>
            <MaterialCommunityIcons size={20} name="clock" /> Abertura 20:00 -
            Inicio: 21:00
          </Text>
          <Text style={{paddingLeft: 15, paddingBottom: 5}}>
            <MaterialCommunityIcons size={20} name="google-maps" /> Shopping
            Vitoria
          </Text>
        </View>
        <View
          style={{
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            shadowColor: '#0076cb',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: '#fff',
            borderRadius: 5,
            padding: 15,
          }}>
          <View style={{width: 100, alignItems: 'center'}}>
            <Ionicons size={20} name="person" />
            <Text style={{textAlign: 'center'}}>Classificação 16 anos</Text>
          </View>
          <View style={{width: 80, alignItems: 'center'}}>
            <Ionicons
              style={{alignItems: 'center'}}
              size={30}
              name="ios-phone-portrait"
            />
            <Text style={{textAlign: 'center'}}>
              Acesso com o ingresso no celular
            </Text>
          </View>
          <View style={{width: 80, alignItems: 'center'}}>
            <Ionicons size={30} name="card" />
            <Text style={{textAlign: 'center'}}>Ate 10x no cartão</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              paddingTop: 30,
              paddingBottom: 20,
            }}>
            {' '}
            Turne 2022 Fabio junir{' '}
          </Text>
          <Text style={{marginBottom: 100}}>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0076cb',
            width: '60%',
            height: 40,
            position: 'absolute',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 16,
            }}>
            COMPRAR
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
