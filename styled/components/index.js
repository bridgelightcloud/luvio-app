import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import {
  colors, getColor, getPadding, getAlignment, rem, getFlex, getFocused, getFocusColor,
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
  font-size: ${(props) => rem(props.fontSize)};
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
  ${getFlex}  
  ${getPadding}
  flex-direction: row;
`;

export const Col = styled.View`
  ${getFlex}
  flex-direction: column;
`;

export const Center = styled.View`
  ${getPadding}
  flex: 1;
  ${getAlignment}
`;

export const Footer = styled.View`
  height: ${rem(3)};
  backgroundColor: ${colors.brandPrimaryLight};
`;

export const Tab = Platform.OS === 'ios'
  ? styled.TouchableOpacity`
    color: ${colors.brandDark};
    backgroundColor: ${getFocusColor};
    flex: 1;
    flex-direction: column;
    color: ${colors.brandDark};
  `
  : styled.TouchableOpacity`
    color: ${colors.brandDark};
    backgroundColor: ${getFocusColor};
    flex: 1;
    flex-direction: column;
    color: ${colors.brandDark};
  `;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: colors.brandPrimary,
  size: 'large',
})`
  padding: ${rem(1)}
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${parseInt(StatusBar.currentHeight, 10)}px;
  backgroundColor: ${colors.brandDark}
`;

export const ScrollView = styled.ScrollView``;

export const AccountThumnail = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${colors.brandInfo}
`;

export const EventThumnail = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: ${colors.brandInfo}
`;

export const Header = styled.View`
  height: ${rem(2)};
  flex-direction: row;
  background-color: ${colors.brandPrimary}
`;

export default null;
