import styled from 'styled-components/native';

export const Container = styled.View`
  height: 117px;
  background: ${({theme})=> theme.colors.primary};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 30px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 26px;
`;
