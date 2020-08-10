import styled from 'styled-components/native';
import { colors, rem } from './variables';

const TextInput = styled.TextInput.attrs({
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

export default TextInput;
