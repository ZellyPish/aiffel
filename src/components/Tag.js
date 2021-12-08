import React from 'react';
import { TagItem } from './styles/TagItem';

const Tag = ({ tag }) => {
  return <TagItem color={tag.color}>{tag.name}</TagItem>;
};

export default Tag;
