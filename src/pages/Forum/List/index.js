import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Errors from '../../../components/Errors';
import Button from '../../../components/styles/Button';
import FlexBox, {
  FlexColAlignCenter,
} from '../../../components/styles/FlexBox';
import { useGetForumPostsQuery } from '../../../redux/forum.api';
import { Input } from '../../Login/style';
import { PagenationBox, SearchBox, SearchButton } from './style';

const PAGE_LIMIT = 5;

export default function Forum() {
  const [keyword, setKeyword] = useState({ value: '', isValid: false });
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: post = [],
    isLoading,
    isError,
    refetch,
  } = useGetForumPostsQuery(
    { _page: currentPage, _limit: PAGE_LIMIT },
    {
      selectFromResult: ({ data }) => {
        return {
          data: keyword.value.length
            ? data.filter(
                (v) =>
                  v.title.includes(keyword.value) ||
                  v.content.includes(keyword.value),
              )
            : data,
        };
      },
    },
  );

  useEffect(() => {
    refetch();
  }, [keyword, currentPage, refetch]);

  const onSearch = (keyword) => {
    if (!keyword.isValid) {
      window.alert('검색어를 입력해주세요.');
      return;
    }
    setKeyword(keyword);
  };

  const resetSearch = () => {
    setKeyword((prev) => ({ ...prev, value: '' }));
  };

  const show = () => {
    console.log(post);
  };

  let content;
  if (isLoading) content = <div>로딩중입니다.</div>;
  else if (isError) content = <Errors text="에러 발생." />;
  else if (!post?.length) content = <Errors text="글이 없습니다." />;
  else if (post?.length) {
    console.log('asd');
    content = post.map((v) => <div key={v.id}>{v.title}</div>);
  }

  return (
    <FlexColAlignCenter>
      <Search onSearch={onSearch} resetSearch={resetSearch} />
      {content}
      <Pagenation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </FlexColAlignCenter>
  );
}

const Search = ({ onSearch, resetSearch }) => {
  const [keyword, setKeyword] = useState({ value: '', isValid: false });

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setKeyword({ ...keyword, value, isValid: value.length > 0 });
  }, []);

  return (
    <SearchBox>
      <Input value={keyword.value} onChange={onChange} />
      <SearchButton onClick={() => onSearch(keyword)}>검색</SearchButton>
      <SearchButton onClick={resetSearch}>초기화</SearchButton>
    </SearchBox>
  );
};

const ForumItem = ({ v }) => {};

const Pagenation = ({ currentPage, setCurrentPage }) => {
  return (
    <PagenationBox>
      <Button onClick={() => setCurrentPage((prev) => prev - 1)}>이전</Button>
      <div>현재 {currentPage}페이지</div>
      <Button onClick={() => setCurrentPage((prev) => prev + 1)}>다음</Button>
    </PagenationBox>
  );
};
