import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
`;

export default FlexBox;

export const FlexColAlignCenter = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
`;

export const Center = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
