import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;
export const FlexColumnBox = styled(FlexColumn)`
  flex-direction: column;
  margin: 20px 0;
`;
export const FlexColAlignCenter = styled(FlexColumn)`
  align-items: center;
`;

export const Center = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const CenterHorizontal = styled(FlexBox)`
  justify-content: center;
`;
