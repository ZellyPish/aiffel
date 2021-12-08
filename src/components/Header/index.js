import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  HeaderBox,
  LogoImage,
  ProfileBox,
  UserNameLabel,
  UserProfileImage,
} from './style';

export default function Header() {
  return (
    <HeaderBox>
      <Logo />
      <Profile />
    </HeaderBox>
  );
}

const Logo = () => (
  <Link to="/forum">
    <LogoImage src="/images/aiffel_logo.png" />
  </Link>
);

const Profile = () => {
  const { username } = useSelector((state) => state.userInfo);

  return (
    <Link to="/profile">
      <ProfileBox>
        <UserProfileImage src="/images/profile.png" />
        <UserNameLabel>{username}</UserNameLabel>
      </ProfileBox>
    </Link>
  );
};
