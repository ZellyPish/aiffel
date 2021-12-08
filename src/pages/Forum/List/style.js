import styled from 'styled-components';
import Button from '../../../components/styles/Button';
import { FlexBox } from '../../../components/styles/FlexBox';
import { H1 } from '../../../components/styles/H1';
import ItemContent from '../../../components/styles/ItemContent';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 80%;
  margin-bottom: 20px;
`;

export const SearchButton = styled(Button)`
  width: 100px;
`;

export const ForumItemBox = styled.div`
  width: 80%;
  margin-bottom: 20px;
`;

export const ForumItemTitle = styled(H1)`
  margin-bottom: 20px;
`;

export const ForumItemContent = styled(ItemContent)`
  width: 80%;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PagenationBox = styled(FlexBox)`
  gap: 10px;
  align-items: center;
`;
