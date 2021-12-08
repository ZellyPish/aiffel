import styled from 'styled-components';
import FlexBox from '../../components/styles//FlexBox';

export const HeaderBox = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const LogoImage = styled.img`
  height: 40px;
`;

export const ProfileBox = styled(FlexBox)`
  align-items: center;
  gap: 10px;

  background-color: #eee;
  padding: 10px 20px;
  border-radius: 5px;

  &:hover {
    animation: 2s shake infinite ease-in-out;
  }

  @keyframes shake {
    0% {
      transform: rotateZ(0deg);
    }
    33% {
      transform: rotateZ(10deg);
    }
    66% {
      transform: rotateZ(-10deg);
    }
  }
`;

export const UserNameLabel = styled.span`
  font-size: 1.4em;
`;

export const UserProfileImage = styled.img`
  width: 1.6em;
  height: 1.6em;

  background: black;

  border-radius: 5px;
`;
