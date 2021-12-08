import styled from 'styled-components';
import { FlexBox, FlexColumnBox } from '../../../components/styles/FlexBox';
import { H1 } from '../../../components/styles/H1';
import ItemContent from '../../../components/styles/ItemContent';

export const DetailBox = styled(FlexColumnBox)`
  width: 80%;
`;

export const DetailTitle = styled(H1)`
  margin-bottom: 20px;
`;

export const DetailContent = styled(ItemContent)`
  margin: 20px 0;
`;

export const ActionBox = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
