import React from 'react';
import {Pattern, Path} from 'react-native-svg';

const MyPattern = () => {
  return (
    <Pattern
      id="DiagonalLines"
      patternUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={52}
      height={19}
      viewBox="0 0 40 20">
      <Path
        d=" M -670 40 L 380 0"
        stroke={'white'}
        strokeWidth={3}
        transform={{rotation: -30}}
      />
    </Pattern>
  );
};

export default MyPattern;
