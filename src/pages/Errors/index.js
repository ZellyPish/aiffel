import React from 'react';
import { ErrorLogo, FlexColAlignCenter } from './style';

export default function Errors({ text }) {
  return (
    <FlexColAlignCenter>
      <ErrorLogo>🚫</ErrorLogo>
    </FlexColAlignCenter>
  );
}
