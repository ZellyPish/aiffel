import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Errors from '../../../components/Errors';
import Button from '../../../components/styles/Button';
import { FlexBox, CenterHorizontal } from '../../../components/styles/FlexBox';
import { H1 } from '../../../components/styles/H1';
import Tag from '../../../components/Tag';
import {
  useDeletePostByIdMutation,
  useGetPostByIdQuery,
  usePatchPostByIdMutation,
} from '../../../redux/forum.api';
import { ActionBox, DetailBox, DetailContent, DetailTitle } from './style';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split('/').pop();
  const { data: post, isLoading, refetch } = useGetPostByIdQuery({ id });
  const [deletePost] = useDeletePostByIdMutation();

  const handleDelete = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      await deletePost({ id });
      window.alert('게시글이 삭제되었습니다.');
      navigate('/forum');
    }
  };

  if (isLoading) return <H1>로딩중입니다...</H1>;

  return (
    post ? <CenterHorizontal>
      <DetailBox>
        <DetailTitle>{post.title}</DetailTitle>
        {post.tag && (
          <FlexBox>
            <Tag tag={post.tag} />
          </FlexBox>
        )}
        <DetailContent>{post.content}</DetailContent>
        <ActionBox>
          <LikeButton id={post.id} isLiked={post.isLiked} refetch={refetch} />
          <Button onClick={handleDelete}>삭제하기</Button>
        </ActionBox>
      </DetailBox>
    </CenterHorizontal>
    : <Errors text="글을 불러오는데 실패했습니다."/>
  );
};

export default Detail;

const LikeButton = ({ id, isLiked, refetch }) => {
  const [like] = usePatchPostByIdMutation();
  const handleLike = async () => {
    await like({ id, isLiked: !isLiked });
    refetch();
  };

  return (
    <>
      <Button onClick={handleLike}>
        <LikeStatus isLiked={isLiked} />
      </Button>
    </>
  );
};

const LikeStatus = ({ isLiked }) => {
  return isLiked ? '♥' : '♡';
};
