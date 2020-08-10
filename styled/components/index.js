import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import {
  colors, getColor, getPadding, rem,
} from './variables';

export const ScreenBase = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.brandDark};
`;

export const FlexView = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  ${getColor}
  ${getPadding}
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

export const Row = styled.View`
  ${getPadding}
  flex: ${(props) => props.flex};
  flex-direction: row;
`;

export const Col = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Center = styled.View`
  ${getPadding}
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

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${parseInt(StatusBar.currentHeight, 10)};
  backgroundColor: ${colors.brandDark}
`;

export const FlatList = styled.FlatList`
`;

export const ScrollView = styled.ScrollView``;

export default null;
