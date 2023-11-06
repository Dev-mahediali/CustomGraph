/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Svg, {Text as SvgText} from 'react-native-svg';
import {ProgressCircle} from 'react-native-svg-charts';

interface HalfCircleProps {
  circleColor: string;
  percentage: number;
}

const HalfCircle: React.FC<HalfCircleProps> = ({circleColor, percentage}) => {
  return (
    <View>
      <Svg height={200} width={225}>
        <ProgressCircle
          style={{height: 150, width: 200, marginTop: 32}}
          progress={((1 / 2) * percentage) / 10}
          progressColor={circleColor}
          startAngle={-Math.PI * 0.5}
          endAngle={Math.PI * 0.5}
          strokeWidth={18}
          cornerRadius={0}
        />

        <SvgText x={10} y={105} textAnchor="middle" fontSize={14} fill="#000">
          0%
        </SvgText>
        <SvgText x={28} y={55} textAnchor="middle" fontSize={14} fill="#000">
          5%
        </SvgText>
        <SvgText x={100} y={22} textAnchor="middle" fontSize={14} fill="#000">
          10%
        </SvgText>
        <SvgText x={178} y={55} textAnchor="middle" fontSize={14} fill="#000">
          15%
        </SvgText>

        <SvgText
          x={203}
          y={105}
          textAnchor="middle"
          font-weight={500}
          fontSize={14}>
          20% +
        </SvgText>
        <SvgText
          x={100}
          y={85}
          font-style="normal"
          textAnchor="middle"
          fontSize={22}
          fill="#191C1D">
          {percentage + '%'}
        </SvgText>
        <SvgText x={100} y={110} textAnchor="middle" fontSize={14}>
          12 ha
        </SvgText>
      </Svg>
    </View>
  );
};

export default HalfCircle;
