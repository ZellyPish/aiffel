import React from 'react';

import { Center } from '../styles/FlexBox';
import { H1 } from '../styles/H1';
import { ErrorBox, ErrorLogo } from './style';

export default function Errors({ text }) {
  return (
    <Center>
      <ErrorBox>
        <ErrorLogo>🚫</ErrorLogo>
        <H1>{text}</H1>
      </ErrorBox>
    </Center>
  );
}
