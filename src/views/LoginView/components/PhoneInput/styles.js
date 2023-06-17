import { StyleSheet } from 'react-native';

import Color from 'color';
import styled, { css } from 'styled-components/native';
//import mobileIcon from '../../../../assets/icons/general/mobile.svg';

  // font-family: ${(props) => props.theme.typography.fontFamily.bold};
  // color: ${(props) => props.theme.colors.text};
  // font-size: ${(props) => props.theme.typography.sizes.large.size}px;
const fontStyle = css`
`;

  // border: 1px ${(props) => props.theme.colors.text};
export const Container = styled.View`
  border-radius: 5px;
  border: 1px;
  flex-direction: row;
  overflow: hidden;
  margin: 0px 0 5px 0;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: Color("black").fade(0.2).rgb().string(),
}))`
  padding: 20px 15px;
  flex: 1;
  ${fontStyle}
`;

export const CountryCodeContainer = styled.View`
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

// export const MobileIcon = styled(mobileIcon).attrs((props) => ({
//   fill: props.theme.colors.text,
// }))`
//   opacity: 0.6;
//   width: 18px;
//   height: 18px;
// `;

  // background-color: ${(props) => props.theme.colors.text};
export const Separator = styled.View`
  width: ${StyleSheet.hairlineWidth}px;
  margin: 20px 5px;
  background-color: orange;
`;
