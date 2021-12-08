import styled from 'styled-components';
import Button from '../../../components/styles/Button';
import FlexBox from '../../../components/styles/FlexBox';
import { Input } from '../../Login/style';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 80%;
`;

export const SearchButton = styled(Button)`
  width: 100px;
`;

export const PagenationBox = styled(FlexBox)`
  gap: 10px;
  align-items: center;
`;
