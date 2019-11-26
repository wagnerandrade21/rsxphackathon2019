import React from 'react';

import './styles.css';

import PostList from './Components/PostList';
import NewPost from './Components/NewPost';

function Feed() {
  return (
    <>
      <NewPost />
      <PostList />
    </>
  );
}

export default Feed;
