import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Container, Content,Image,CardTitle,CardSubTitleBlue,CardSubTitleGrey} from './styles';
import {useNavigation} from '@react-navigation/native';

export function Card() {
  const navigation = useNavigation();
  const mock: object = [
    {
      id: 1,
      title: 'Jota Quest celebra 25 anos ',
      data: 'Sáb, 01 de Outubro de 2022',
      local: 'Espaço Patrick Ribeiro  • Vitória, ES',
      valor: 'R$150,00',
      abertura: 'Abertura: 21:00 • Início: 22:00',
      descricao:
        'De volta aos palcos após dois anos longe dos fãs, a banda Jota Quest lança hoje, dia 11 de abril, aguardada turnê comemorativa de seus 25 anos de carreira, com shows especiais que passarão por 10 capitais brasileiras, a partir do próximo mês de julho.\n' +
        '\n' +
        ' \n' +
        '\n' +
        'Batizada “JOTA 25 - De Volta ao Novo”, a série de shows propõe uma viagem “explosiva” pela trajetória musical do grupo, reativando memórias e emoções dos fãs, a partir de experiência audiovisual futurista, e marcando o início de um novo ciclo para a banda mineira. A estreia será no dia 02 de julho, sábado, em São Paulo, no Espaço das Américas.',
      classificacao: '16 anos',
      urlFotoCapa:
        'https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/auWRbuULPv3ftFMSO6xI3MzAvScqi5ZVCdF9zfSC.jpeg',
    },
    {
      id: 2,
      title: 'Fabio Junior Turne 2022',
      data: 'Sáb,20 de Agosto',
      local: 'Espaço Patrick Ribeiro Serra',
      valor: 'R$150,00',
      abertura: 'Abertura: 21:00 • Início: 22:00',
      descricao:
        'Após quase dois anos sem apresentações, por conta da pandemia causada pelo COVID-19, Fábio Jr. está de volta aos palcos para cantar e emocionar o público com sua atual turnê que já embalou milhares de pessoas por todo o país.\n' +
        '\n' +
        'Um dos grandes destaques da turnê é o cenário, que é revelado através de painéis de LED, colunas e elementos que valorizam a estética de forma simples e sofisticada. O conceito da proposta, criativa e versátil, permite que Fábio Jr. utilize a mesma cenografia em todos os shows, independente do tamanho, mantendo a dinâmica e beleza do espetáculo com o auxilio da iluminação que permite um resultado visualmente impactante, tornando-se um atrativo a parte.',
      classificacao: '16 anos',
      urlFotoCapa:
        'https://storage.googleapis.com/production-hostgator-brasil-v1-0-0/250/344250/gOQSKRZR/ee02e40644694be9bda8a32326c0b612',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Container>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsTickets', {item})}>
          <Image
            resizeMode={'stretch'}
            source={{
              uri: item.urlFotoCapa,
            }}
          />
          <Content>
            <CardTitle >
              {item.title}
            </CardTitle>
            <CardSubTitleBlue>{item.data}</CardSubTitleBlue>
            <CardSubTitleGrey >{item.local}</CardSubTitleGrey>
          </Content>
        </TouchableOpacity>
      </Container>
    );
  };

  return (
    <ScrollView style={{marginBottom: 150}}>
      <FlatList
        keyExtractor={item => item.id}
        data={mock}
        renderItem={renderItem}
      />
    </ScrollView>
  );
}
