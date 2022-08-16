import styled from 'styled-components/native';

export const ImageDesfoc = styled.Image`
  width: 100%;
  height: 200px;
  background-color: ${({theme})=> theme.colors.primary};
`;

export const Image = styled.Image`
  align-self: center;
  background-color: ${({theme})=> theme.colors.white};
  height: 200px;
  width: 90%;
  padding: 30px;
  margin-top: -150px;
  border-radius: 5px;
  opacity: 10;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: ${({theme})=> theme.colors.black};
  margin-top: 20px;
  padding-left: 15px;
  padding-bottom: 10px;
`;

export const Description = styled.Text`
  padding-left: 15px;
  padding-bottom: 8px;
`;
export const CardInfos = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  background-color: ${({theme})=> theme.colors.white};
  border-radius: 5px;
  padding: 15px;
`;

export const CardInfosText = styled.Text`
  text-align: center;
`;

export const Box = styled.View`
  width: 100px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme})=> theme.colors.primary};
  width: 60%;
  height: 40px;
  position: absolute;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-weight: bold;
  color: ${({theme})=> theme.colors.white};
  font-size: 16px;
`;
