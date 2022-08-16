import React from 'react';
import {BoxTitles} from '../../components/BoxTitles';
import {Form,Title,SubTtitle} from "./styles";

export function Tickets() {
  return(
    <>
      <BoxTitles title={'Meus Ingressos'} />
      <Form >
        <Title >Sem ingressos ainda.</Title>
        <SubTtitle >Seus ingressos comprados ou enviados para você por e-mail e sms ficam salvos aqui.</SubTtitle>
      </Form>
    </>
  ) ;
}
