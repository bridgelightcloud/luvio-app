import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const colors = {
  brandPrimary: '#78BA82',
  brandPrimaryLight: '#BCDCC1',
  brandInfo: '#90C1E4',
  brandWarn: '#D4C348',
  brandError: '#B02E0C',
  brandDark: '#0D1821',
  brandLight: '#FBF5EE',
};

function getColor(props) {
  const propKeys = Object.keys(props);
  for (let i = 0; i < propKeys.length; i++) {
    const color = colors[`brand${propKeys[i]}`];
    if (color) {
      return `color: ${color};`;
    }
  }
  return `color: ${colors.brandLight};`;
}

const rootFontSize = '20';

function rem(factor = 1) {
  return `${factor * rootFontSize}px`;
}

export const ScreenBase = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.brandDark};
`;

export const FlexView = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  ${getColor}
  text-align: ${(props) => ((props.center) ? 'center;' : 'left')};
  font-size: ${rem()};
`;

export const Button = Platform.OS === 'ios'
  ? styled.TouchableOpacity`
    color: ${colors.brandDark};
    backgroundColor: ${colors.brandPrimary};
    height: ${rem(2)};
    border-radius: 20px;
    width: 300px;
    margin: 10px;
  `
  : styled.TouchableOpacity`
    color: ${colors.brandDark};
    backgroundColor: ${colors.brandPrimary};
    height: ${rem(2)};
    border-radius: 20px;
    width: 300px;
    margin: 10px;
  `;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.brandDark,
})`
  color: ${colors.brandDark};
  border-color: ${colors.brandLight};
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  background-color: ${colors.brandPrimaryLight};
  height: ${rem(2)}; 
  width: 300px;
  margin: 10px;
  padding: 10px;
`;

export const Row = styled.View`
  flex: ${(props) => props.flex};
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
  backgroundColor: ${(props) => (props.show ? colors.brandPrimary : colors.brandDark)};
`;

export const Tab = Platform.OS === 'ios'
  ? styled.TouchableOpacity`
    color: ${colors.brandDark};
    backgroundColor: ${colors.brandPrimary};
    flex: 1;
    flex-direction: column;
    color: ${colors.brandDark};
    backgroundColor: ${colors.brandPrimary};
  `
  : styled.TouchableOpacity`
    color: ${colors.brandDark};
    backgroundColor: ${colors.brandPrimary};
    flex: 1;
    flex-direction: column;
    color: ${colors.brandDark};
    backgroundColor: ${colors.brandPrimary};
  `;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: colors.brandPrimary,
  size: 'large',
})`
  padding: ${rem(1)}
`;

export default null;
