import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgLuvio(props) {
  return (
    <Svg width="193mm" height="100mm" viewBox="0 0 193 100" {...props}>
      <Path
        d="M0 100h10V0H0zM20 50v30a20 20 0 0040 0V50H50v30a10 10 0 01-20 0V50z"
        fill="#78ba82"
      />
      <Path d="M47 40v-8l-7.19 3.51A5 5 0 1047 40z" fill="#7cb6df" />
      <Path
        d="M67.5 50l20 50h10l20-50h-10l-15 38-15-38zM125 100h10V50h-10z"
        fill="#78ba82"
      />
      <Path d="M136 38.5v-8l-7.19 3.51A5 5 0 10136 38.5z" fill="#7cb6df" />
      <Circle cx={167} cy={75} fill="#78ba82" r={25} />
      <Path
        d="M177 80V59.7l-17.975 8.775A12.5 12.5 0 10177 79.7z"
        fill="#3a91cf"
      />
    </Svg>
  );
}

export default SvgLuvio;
