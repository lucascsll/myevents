import styled from 'styled-components/native';

export const Container = styled.View`
  height: 200px;
  background: #fff;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Content = styled.View`
  padding: 10px;
`;

export const Image = styled.Image`
  height: 120px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.black};;
`
export const CardSubTitleBlue = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.primary};;
`
export const CardSubTitleGrey = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({theme})=> theme.colors.grey};;
`
