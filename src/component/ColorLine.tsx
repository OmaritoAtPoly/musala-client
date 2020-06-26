import React from 'react';
import customTheme from '../theme';

interface Props {
  color: string;
  height: number;
}

const ColorLine = ({ color, height }: Props) => {
  return (
    <hr
      style={{
        color: color,
        height: height,
        width:customTheme.dimension.width.w100
      }}
    />
  );
};

export default ColorLine