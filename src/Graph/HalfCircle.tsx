import React from 'react';
import {View} from 'react-native';
import Svg, {Text as SvgText} from 'react-native-svg';
import {ProgressCircle} from 'react-native-svg-charts';

interface HalfCircleProps {
  percentage: number;
  text: string;
  circleColor: string;
  LowerLabel: string;
}

const HalfCircle: React.FC<HalfCircleProps> = ({
  percentage,
  text,
  circleColor,
  LowerLabel,
}) => {
  return (
    <View>
      <Svg height={200} width={200}>
        <ProgressCircle
          // eslint-disable-next-line react-native/no-inline-styles
          style={{height: 150, width: 200, marginTop: 32}}
          progress={percentage}
          progressColor={circleColor}
          startAngle={-Math.PI * 0.5}
          endAngle={Math.PI * 0.5}
          strokeWidth={14}
          cornerRadius={0}
        />

        <SvgText x={13} y={105} textAnchor="middle" fontSize={12} fill="#000">
          0%
        </SvgText>
        <SvgText x={34} y={55} textAnchor="middle" fontSize={12} fill="#000">
          5%
        </SvgText>
        <SvgText x={100} y={25} textAnchor="middle" fontSize={12} fill="#000">
          10%
        </SvgText>
        <SvgText x={169} y={55} textAnchor="middle" fontSize={12} fill="#000">
          15%
        </SvgText>

        <SvgText x={175} y={104} textAnchor="start" fontSize={12}>
          20%
        </SvgText>
        <SvgText x={100} y={80} textAnchor="middle" fontSize={22} fill="#000">
          {text}
        </SvgText>
        <SvgText x={100} y={110} textAnchor="middle" fontSize={16} fill="#000">
          {LowerLabel}
        </SvgText>
      </Svg>
    </View>
  );
};

export default HalfCircle;
