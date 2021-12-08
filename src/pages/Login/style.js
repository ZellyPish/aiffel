import styled from 'styled-components';
import Button from '../../components/styles//Button';
import { H1 } from '../../components/styles//H1';

export const LoginBox = styled.div`
  width: 300px;
`;

export const LoginTitle = styled(H1)`
  margin-bottom: 10px;
`;

export const LoginMessage = styled.p`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 37px;
  padding: 0 10px;
  margin: 10px 0;
  width: 100%;

  &::placeholder {
    color: #bbb;
  }
`;

export const LoginInput = styled(Input)`
  border: 1px solid #fedf00;
`;

export const LoginButton = styled(Button)`
  margin-top: 10px;
  font-size: 1em;
  background-color: #fedf00;
`;

export const ValidationAlert = styled.p`
  margin-bottom: 5px;
  font-size: 0.8em;
  height: 20px;
  color: #faa;
`;
