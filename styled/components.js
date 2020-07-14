import styled from 'styled-components/native';
import { Platform } from 'react-native';

console.log(Platform.OS);

const brandPrimary = '#78BA82';
const BrandPrimaryLight = '#BCDCC1';
const brandInfo = '#90C1E4';
const brandWarn = '#D4C348';
const brandError = '#B02E0C';
const brandDark = '#0D1821';
const brandLight = '#FBF5EE';
const rootFontSize = '20';

function rem(factor = 1) {
  return `${factor * rootFontSize}px`;
}

export const ScreenBase = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${brandDark};
`;

export const Text = styled.Text`
  color: ${brandLight};
  text-align: ${(props) => ((props.center) ? 'center;' : 'left')};
  font-size: ${rem()};
`;

export const Button = Platform.OS === 'ios'
  ? styled.TouchableOpacity`
    color: ${brandDark};
    backgroundColor: ${brandPrimary};
    height: ${rem(2)};
    border-radius: 20px;
    width: 300px;
    margin: 10px;
  `
  : styled.TouchableOpacity`
    color: ${brandDark};
    backgroundColor: ${brandPrimary};
    height: ${rem(2)};
    border-radius: 20px;
    width: 300px;
    margin: 10px;
  `;

export const TextInput = styled.TextInput`
  color: ${brandDark};
  border-color: ${brandLight};
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  background-color: ${BrandPrimaryLight};
  height: ${rem(2)}; 
  width: 300px;
  margin: 10px;
  padding: 10px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Col = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  height: ${rem(3)};
  backgroundColor: ${brandPrimary};
`;

export const Tab = Platform.OS === 'ios'
  ? styled.TouchableOpacity`
    color: ${brandDark};
    backgroundColor: ${brandPrimary};
    flex: 1;
    flex-direction: column;
    color: ${brandDark};
    backgroundColor: ${brandPrimary};
  `
  : styled.TouchableOpacity`
    color: ${brandDark};
    backgroundColor: ${brandPrimary};
    flex: 1;
    flex-direction: column;
    color: ${brandDark};
    backgroundColor: ${brandPrimary};
  `;
export default null;
